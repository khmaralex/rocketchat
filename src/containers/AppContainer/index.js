import React from "react";
import { connect } from "react-redux";
import App from "components/App";
import { getInitialData } from "actions";

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.getAppData();
  }

  render() {
    return <App />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAppData: function () {
      dispatch(getInitialData());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AppContainer);
