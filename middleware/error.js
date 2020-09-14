const errorHandler = (err, req, res, next) => {
  console.log(err.name);
  res.status(err.statusCode).json({
    success: false,
    error: err.message || "server error",
  });
};

module.exports = errorHandler;
