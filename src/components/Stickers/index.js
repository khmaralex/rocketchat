import React from "react";
import "./Stickers.scss";

const Stickers = ({ stickers, sendStickerMessage }) => {
  const isStickers = !!stickers.length;

  return (
    isStickers && (
      <div className="stickers">
        {stickers.map(sticker => (
          <img
            className="sticker"
            key={sticker.id}
            src={sticker.image}
            onClick={() => sendStickerMessage(sticker)}
            alt="sticker"
          />
        ))}
      </div>
    )
  );
};

export default Stickers;
