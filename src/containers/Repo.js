import {connect} from 'react-redux';

import Repo from '../components/RepoList/Repo';
import ReposActions from '../actions/ReposActions';

const mapStateToProps = (state) => {
  return {
    repo: state.repo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getRepo: (full_name) => dispatch(ReposActions.getRepo(full_name)),
      clearRepo: () => dispatch(ReposActions.clearRepo())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repo);