import React from "react";
import App from "components/App";
import { connect } from "react-redux";
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
    getAppData: () => {
      dispatch(getInitialData());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AppContainer);
