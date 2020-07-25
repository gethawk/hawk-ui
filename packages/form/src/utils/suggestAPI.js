import axios from 'axios';
import _ from 'lodash';

const formatUrl = (path) => {
  if (path[0] === 'h') return path;

  const adjustedPath = path[0] !== '/' ? `/${path}` : path;

  return adjustedPath;
};

const sanitiseQueryParams = (obj) => {
  let query = _.omitBy(obj, (value) => (_.isArray(value) && _.isEmpty(value)));

  query = _.mapValues(query, (value) => (_.isArray(value) ? _.join(value, ',') : value));
  query = _.omitBy(query, _.isNil);

  return query;
};


export default function suggestAPI(path, { params }) {
  axios({
    method: 'get',
    url: formatUrl(path),
    ...(_.isNil(params) ? {} : { params: sanitiseQueryParams(params) }),
    headers: {
      'Content-type': 'application/json',
    },
  });
}
