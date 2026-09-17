import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Document, Page, pdfjs } from "react-pdf";

import "./PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PdfViewerProps {
  file: string;
  title?: string;
  subtitle?: string;
  initialPage?: number;
  onClose?: () => void;
}

type Direction = "next" | "prev";

const PdfViewer: React.FC<PdfViewerProps> = ({
  file,
  title = "Document",
  subtitle = "PDF EXPERIENCE",
  initialPage = 1,
  onClose,
}) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(initialPage);

  const [zoom, setZoom] = useState(1);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [direction, setDirection] = useState<Direction>("next");
  const [pageKey, setPageKey] = useState(0);

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const viewerRef = useRef<HTMLDivElement>(null);

  const zoomPercent = Math.round(zoom * 100);

  const pageProgress = useMemo(() => {
    if (!numPages) return 0;

    if (numPages === 1) return 100;

    return ((pageNumber - 1) / (numPages - 1)) * 100;
  }, [pageNumber, numPages]);

  // =========================
  // PDF LOAD
  // =========================

  const handleDocumentLoad = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);

      setPageNumber(Math.min(Math.max(initialPage, 1), numPages));
    },
    [initialPage],
  );

  // =========================
  // PAGE NAVIGATION
  // =========================

  const changePage = useCallback(
    (newPage: number, newDirection: Direction) => {
      if (newPage < 1 || newPage > numPages) return;

      setDirection(newDirection);
      setPageNumber(newPage);

      // Force animation restart
      setPageKey((value) => value + 1);
    },
    [numPages],
  );

  const nextPage = useCallback(() => {
    changePage(pageNumber + 1, "next");
  }, [changePage, pageNumber]);

  const previousPage = useCallback(() => {
    changePage(pageNumber - 1, "prev");
  }, [changePage, pageNumber]);

  // =========================
  // KEYBOARD
  // =========================

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
          return;
        }

        onClose?.();
      }

      if (event.key === "ArrowRight") {
        nextPage();
      }

      if (event.key === "ArrowLeft") {
        previousPage();
      }

      if (event.key === "+" || event.key === "=") {
        setZoom((value) => Math.min(value + 0.1, 2));
      }

      if (event.key === "-") {
        setZoom((value) => Math.max(value - 0.1, 0.6));
      }

      if (event.key === "f") {
        setIsFocusMode((value) => !value);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [isFullscreen, nextPage, previousPage, onClose]);

  // =========================
  // MOUSE LIGHT
  // =========================

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;

    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  // =========================
  // ZOOM
  // =========================

  const zoomIn = () => {
    setZoom((value) => Math.min(value + 0.1, 2));
  };

  const zoomOut = () => {
    setZoom((value) => Math.max(value - 0.1, 0.6));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  // =========================
  // FULLSCREEN
  // =========================

  const toggleFullscreen = async () => {
    if (!viewerRef.current) return;

    if (!document.fullscreenElement) {
      await viewerRef.current.requestFullscreen?.();

      setIsFullscreen(true);
    } else {
      await document.exitFullscreen?.();

      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // =========================
  // CLOSE
  // =========================

  const handleClose = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }

    onClose?.();
  };

  return (
    <div
      ref={viewerRef}
      className={`pdf-viewer ${isFocusMode ? "focus-mode" : ""}`}
      style={
        {
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pdf-background-glow" />

      <div className="pdf-noise" />

      {/* =========================
          HEADER
      ========================= */}

      <header className="pdf-header">
        <button
          className="pdf-back-button"
          onClick={handleClose}
          aria-label="Fermer le document"
        >
          <span className="back-icon">←</span>

          <span className="back-text">BACK</span>
        </button>

        <div className="pdf-title-wrapper">
          <span className="pdf-eyebrow">{subtitle}</span>

          <h1>{title}</h1>
        </div>

        <div className="pdf-header-actions">
          <button
            className="pdf-icon-button"
            onClick={() => setIsFocusMode((value) => !value)}
            aria-label="Mode focus"
          >
            ◉
          </button>

          <button
            className="pdf-icon-button"
            onClick={toggleFullscreen}
            aria-label="Plein écran"
          >
            ⛶
          </button>
        </div>
      </header>

      {/* =========================
          WORKSPACE
      ========================= */}

      <main className="pdf-workspace">
        {/* =========================
            THUMBNAILS
        ========================= */}

        <aside className="pdf-sidebar">
          <div className="sidebar-label">PAGES</div>

          <div className="thumbnail-list">
            <Document file={file} loading={null}>
              {Array.from(new Array(numPages), (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    className={`thumbnail ${
                      pageNumber === page ? "active" : ""
                    }`}
                    onClick={() => {
                      changePage(page, page > pageNumber ? "next" : "prev");
                    }}
                  >
                    <div className="thumbnail-page">
                      <Page
                        pageNumber={page}
                        width={95}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>

                    <span className="thumbnail-number">
                      {String(page).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </Document>
          </div>
        </aside>

        {/* =========================
            PDF STAGE
        ========================= */}

        <section className="pdf-stage">
          <div className="pdf-stage-top">
            <div className="document-status">
              <span className="status-dot" />

              <span>LIVE DOCUMENT</span>
            </div>

            <div className="page-counter">
              <strong>{String(pageNumber).padStart(2, "0")}</strong>

              <span>/</span>

              <span>{String(numPages).padStart(2, "0")}</span>
            </div>
          </div>

          <div className="pdf-page-container">
            <Document
              file={file}
              onLoadSuccess={handleDocumentLoad}
              loading={
                <div className="pdf-loader">
                  <div className="loader-ring" />

                  <span>Loading document...</span>
                </div>
              }
            >
              <div
                key={pageKey}
                className={`pdf-page-wrapper page-${direction}`}
              >
                <div
                  className="pdf-page-shadow"
                  style={{
                    transform: `scale(${zoom})`,
                  }}
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={1}
                    width={700}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              </div>
            </Document>
          </div>

          {/* =========================
              STAGE CONTROLS
          ========================= */}

          <div className="pdf-stage-controls">
            <button
              className="navigation-button"
              onClick={previousPage}
              disabled={pageNumber <= 1}
              aria-label="Page précédente"
            >
              ←
            </button>

            <button
              className="navigation-button"
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              aria-label="Page suivante"
            >
              →
            </button>
          </div>
        </section>
      </main>

      {/* =========================
          BOTTOM CONTROL BAR
      ========================= */}

      <footer className="pdf-controls">
        <div className="control-left">
          <span className="control-label">DOCUMENT</span>

          <span className="control-title">{title}</span>
        </div>

        <div className="pdf-progress">
          <div className="progress-track">
            <div
              className="progress-value"
              style={{
                width: `${pageProgress}%`,
              }}
            />

            <div
              className="progress-point"
              style={{
                left: `${pageProgress}%`,
              }}
            />
          </div>
        </div>

        <div className="control-right">
          <div className="zoom-control">
            <button onClick={zoomOut} aria-label="Zoom arrière">
              −
            </button>

            <button className="zoom-value" onClick={resetZoom}>
              {zoomPercent}%
            </button>

            <button onClick={zoomIn} aria-label="Zoom avant">
              +
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PdfViewer;

// // export default PdfViewer;
// import React from "react";

// interface PdfViewerProps {
//   file: string;
//   title?: string;
//   subtitle?: string;
//   initialPage?: number;
//   onClose?: () => void;
// }

// const PdfViewer: React.FC<PdfViewerProps> = ({
//   file,
//   title = "Document",
//   subtitle = "PDF EXPERIENCE",
//   onClose,
// }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{subtitle}</p>

//       <p>{file}</p>

//       <button onClick={onClose}>Fermer</button>
//     </div>
//   );
// };

// export default PdfViewer;
