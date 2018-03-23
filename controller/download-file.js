import fs from 'fs';
import request from 'request';

const downloadFile = (req, res) => {
	const { uri } = req.body;
	request(uri).pipe(fs.createWriteStream('google.jpg')).on('close', () => {
		console.log('done');
	});
}

export default downloadFile;
