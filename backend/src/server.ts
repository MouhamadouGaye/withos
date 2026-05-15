// backend/src/server.ts
import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { SupporterController } from "./controller/SupporterController";
import { StatsController } from "./controller/StatsController";
import { ApiResponse } from "./types";
import { testDatabaseConnection } from "./config/database";
import { WhatsAppLinkResponse } from "./types";
dotenv.config();

const app: Express = express();

const PORT = process.env.PORT || 5001;

// // Middleware
// app.use(cors());

// backend/src/server.ts
app.use(
  cors({
    origin: "http://localhost:5173", // URL du frontend
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
const supporterController = new SupporterController();
const statsController = new StatsController();

// Routes
app.post("/api/supporters", supporterController.createSupporter);
app.get("/api/supporters", supporterController.getAllSupporters);
app.get("/api/stats", statsController.getStats);

app.get("/api/whatsapp-link", (req: Request, res: Response) => {
  // Remplacez par votre vrai lien WhatsApp
  const whatsappLink =
    process.env.WHATSAPP_GROUP_LINK ||
    "https://chat.whatsapp.com/your-invite-code";
  const response: WhatsAppLinkResponse = { link: whatsappLink };
  res.json(response);
});

// Health check
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);
  const response: ApiResponse = {
    success: false,
    error: "Internal server error",
  };
  res.status(500).json(response);
});

// 404 handler
app.use((req: Request, res: Response) => {
  const response: ApiResponse = {
    success: false,
    error: "Route not found",
  };
  res.status(404).json(response);
});

// Start server
const startServer = async (): Promise<void> => {
  try {
    // Test database connection
    const dbConnected = await testDatabaseConnection();
    if (!dbConnected) {
      console.warn(
        "⚠️  Database connection failed, but server will continue running",
      );
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
