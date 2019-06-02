import React from "react";
import { v4 as getId } from "uuid";
import { connect } from "react-redux";
import { userSentMessage } from "actions";
import Operation from "components/Operation";

const OperationContainer = ({ operation, sendOperationMessage }) => {
  return (
    <Operation
      operation={operation}
      sendOperationMessage={sendOperationMessage}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    sendOperationMessage: operation => {
      dispatch(
        userSentMessage({
          type: "operation",
          authorType: "user",
          messageData: operation,
          id: getId()
        })
      );
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OperationContainer);
