import React from "react";
import './StickerMessage.scss';

const StickerMessage = ({ image }) => {
  return <img src={image} className="sticker-message" alt="sticker-message"/>;
};

export default StickerMessage;