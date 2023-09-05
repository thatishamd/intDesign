const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode ? err.statusCode : 500;
  let message = err.name;

  res.status(statusCode).json({ success: false, data: err.stack, message });
};

module.exports = errorHandler;
