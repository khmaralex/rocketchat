import React from "react";
import { connect } from "react-redux";
import Operation from "components/Operation";
import {userSentMessage} from "actions";

const OperationContainer = ({operation, submitMessage}) => {
  const sendOperationMessage = (operation) => {
    submitMessage({
      type: 'operation',
      author: 'user',
      messageData: operation
    });
  }

  return <Operation operation={operation} sendOperationMessage={sendOperationMessage} />;
}

const mapDispatchToProps = dispatch => {
  return {
    submitMessage: message => dispatch(userSentMessage(message))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OperationContainer);
