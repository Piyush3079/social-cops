import mysql from 'mysql';

const connection = mysql.createConnection({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'Piyush@1997',
  database: 'test',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

export default connection;
