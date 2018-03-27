import getToken from '../controller/get-token';
import downloadFile from '../controller/download-file';
import Authenticate from '../middleware';

export default (app) => {
  app.post('/get_token', getToken);

  app.post('/download_file', Authenticate, downloadFile);

  app.get('/*', (req, res) => {
    res.status(404);
    res.json({
      error: true,
      mag: 'resource does not exist',
    });
  });

  app.post('/*', (req, res) => {
    res.status(404);
    res.json({
      error: true,
      mag: 'resource does not exist',
    });
  });
};
