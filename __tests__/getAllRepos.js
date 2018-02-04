import axios from 'axios';
import {apiRequests} from '../src/constants/AppConstants';

it('returns data when getAllRepos is called', () => {
  return axios
    .get(`${apiRequests.getAllRepos}`)
    .then(({data: {incomplete_results, items}}) => {
      expect(incomplete_results).toBe(false);
      expect(Array.isArray(items)).toBe(true);
    });
});
