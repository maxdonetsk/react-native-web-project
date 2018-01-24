import {connect} from 'react-redux';

import MainScreen from '../components/MainScreen';
import {getAllRepos} from '../actions/ReposActions';

const mapStateToProps = (state) => {
  return {
    reposList: state.reposList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getAll: () => dispatch(getAllRepos())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);