import React from "react";
import "./FloatingNote.css";

const FloatingNote: React.FC = () => {
  return (
    <div className="floating-note">
      <p>nouveau message</p>
      <p>réunion demain 10h</p>
      <p>rapport envoyé</p>
      <p>ok bien reçu</p>
    </div>
  );
};

export default FloatingNote;
