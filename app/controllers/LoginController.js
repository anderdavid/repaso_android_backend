const { query, validationResult } = require('express-validator');
const login = (req, res) => {
  /*   console.log('login');
  res.status(200).json({
    msg: 'hello login',
    error: 'error',
  }); */
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello`);
  }
};

module.exports = {
  login,
};
