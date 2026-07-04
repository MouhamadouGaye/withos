import SectionCard from "../../card/cardSection";
import { programme } from "../../data/senegal2035";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="container">
      <h1>Programme Sénégal 2035</h1>

      <div className="grid">
        {programme.map((p, i) => (
          <SectionCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
