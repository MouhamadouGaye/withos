import "../css/cards.css";

type Props = {
  title: string;
  objective: string;
  content: string[];
  impact: string[];
};

export default function SectionCard({
  title,
  objective,
  content,
  impact,
}: Props) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="objective">🎯 {objective}</p>

      <div className="block">
        <h3>Mise en œuvre: </h3>
        <ul>
          {content.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="block impact">
        <h3>Pour espérer:</h3>
        <ul>
          {impact.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
