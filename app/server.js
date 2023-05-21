const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});
