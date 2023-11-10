const express = require('express');
const routes = require('./routes');
const { body, validationResult } = require('express-validator');

require('dotenv').config();

const app = express();
app.use(routes);

app.use(express.json());

const PORT = process.env.PORT;

app.post('/api/hello', body('email').isEmail(), (req, res) => {
  const result = validationResult(req);
  console.log(result);
  if (result.isEmpty()) {
    return res.send(`Hello`);
  }

  res.send({ errors: result.array() });
});

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});
