import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";
import { withRouter } from "react-router";
import Query from "./Components/Query";
import 'bootstrap/dist/css/bootstrap.min.css';

function mapStateToProps(state) {
  return {
    availableFields: state.availableFields,
    criterias: state.criterias,
    teamAllowed: state.teamAllowed
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Query));

export default App;
