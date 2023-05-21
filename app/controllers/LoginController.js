const login = (req, res) => {
  console.log('login');
  res.status(200).json({
    msg: 'hello login',
    error: 'error',
  });
};

module.exports = {
  login,
};
