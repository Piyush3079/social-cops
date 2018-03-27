import fs from 'fs';
import request from 'request';
import sharp from 'sharp';

const downloadFile = (req, res) => {
  const { uri } = req.body;
  const arr = uri.split('.');
  const format = arr[(arr.length) - 1];
  const name = new Date().getTime();
  request(uri).pipe(fs.createWriteStream(`./public/images/temp/${name}.${format}`)).on('close', () => {
    sharp(`./public/images/temp/${name}.${format}`)
      .resize(50, 50)
      .toFile(`./public/images/temp_compressed/${name}.${format}`, (err) => {
        if (err) throw err;
        fs.unlink(`./public/images/temp/${name}.${format}`, (err) => {
          if (err) throw err;
          const image = fs.readFile(`./public/images/temp_compressed/${name}.${format}`, 'base64', (err, data) => {
            if (err) throw err;
            else {
              console.log(data);
              res.json({
                done: true,
                image: data,
                data: `data:image/${format};base64, `,
                error: false,
              });
            }
          });
        });
      });
  });
};

export default downloadFile;
