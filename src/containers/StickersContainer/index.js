import React from "react";
import { connect } from "react-redux";
import Stickers from "components/Stickers";
import { userSentMessage } from "actions";

const StickersContainer = ({ stickers, sendStickerMessage }) => {
  return (
    <Stickers stickers={stickers} sendStickerMessage={sendStickerMessage} />
  );
};

const mapStateToProps = state => ({
  stickers: state.userData.stickers
});

const mapDispatchToProps = dispatch => ({
  sendStickerMessage: sticker => {
    dispatch(
      userSentMessage({
        type: "sticker",
        authorType: "user",
        messageData: sticker,
        id: sticker.id
      })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StickersContainer);
