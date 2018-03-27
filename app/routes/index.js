import getToken from '../controller/get-token';
import downloadFile from '../controller/download-file';
import Authenticate from '../middleware';
import patchObjects from '../controller/patching';

export default (app) => {
  app.post('/get_token', getToken);

  app.post('/download_file', Authenticate, downloadFile);

  app.patch('/add_patch', Authenticate, patchObjects);

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
