import React from "react";
import { connect } from "react-redux";
import Operation from "components/Operation";
import {userSentMessage} from "actions";
import {v4 as getId} from 'uuid';

const OperationContainer = ({ operation, submitMessage }) => {
  const sendOperationMessage = operation => {
    submitMessage({
      type: "operation",
      authorType: "user",
      messageData: operation,
      id: getId()
    });
  };

  return (
    <Operation
      operation={operation}
      sendOperationMessage={sendOperationMessage}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    submitMessage: message => dispatch(userSentMessage(message))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OperationContainer);
