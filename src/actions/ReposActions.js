import axios from 'axios';

import {BASE_URL} from '../constants/AppConstants';

class StationsActions {

  searchRepos () {
    axios.get(`${BASE_URL}/search/repositories?q=map+language:javascript&sort=stars&order=desc`)
      .then(({data}) => console.log(data))
      .catch(({message}) => console.error(message));
  };
}

export default new StationsActions();
