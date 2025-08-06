const express = require('express');
const path = require('path');
const configDB = require('./src/config/db.js');
const todoRouter = require('./src/router/Todo.route.js');
require('dotenv').config();

const app = express();
const port = 5000;
const cors = require('cors');
const __dirName = path.resolve();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRouter);

console.log(__dirName);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirName,'frontend', 'dist')));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirName,'frontend', 'dist', 'index.html'));
  });
}

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await configDB();
});
