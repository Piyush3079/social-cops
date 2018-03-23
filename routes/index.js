import getToken from '../controller/get-token';
import showIndex from '../controller/show-index';
import downloadFile from '../controller/download-file';

export default (app) => {
  app.get('/', showIndex);

  app.post('/get_token', getToken);

  app.post('/download_file', downloadFile);
};
