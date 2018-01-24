import {connect} from 'react-redux';

import Repo from '../components/RepoList/Repo';
import {getRepo} from '../actions/ReposActions';
import {clearRepo} from '../actions/ReposActions';

const mapStateToProps = (state) => {
  return {
    repo: state.repo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getRepo: (full_name) => dispatch(getRepo(full_name)),
      clearRepo: () => dispatch(clearRepo())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repo);