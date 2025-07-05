const express = require('express');
const configDB = require('./src/config/db.js');
const todoRouter = require('./src/router/Todo.route.js');

const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/todos', todoRouter);

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await configDB(); 
});
