import { diagnostic } from "../../data/senegal";

export default function Diagnostic() {
  return (
    <div style={{ padding: 20 }}>
      <h1>{diagnostic.title}</h1>

      {diagnostic.sections.map((sec, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h2>{sec.title}</h2>
          <p>{sec.content}</p>
        </div>
      ))}
    </div>
  );
}
