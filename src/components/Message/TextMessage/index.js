import React from "react";
import "./TextMessage.scss";

const TextMessage = ({ text }) => {
  return (
    <div className="text-message">
      <p>{text}</p>
    </div>
  );
};

export default TextMessage;
