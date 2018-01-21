import {connect} from 'react-redux';

import MainScreen from '../components/MainScreen';
import ReposActions from '../actions/ReposActions';

const mapStateToProps = (state) => {
  return {
    reposList: state.reposList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getAll: () => dispatch(ReposActions.getAll())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);