import getToken from '../controller/get-token';
import showIndex from '../controller/show-index';

export default (app) => {
  app.get('/', showIndex);

  app.post('/get_token', getToken);
};
