const Bootcamp = require("../models/Bootcamp");

// @descr     Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: "Show all bootcamps" });
};

// @descr     Get single bootcamp
// @route     GET /api/v1/bootcamp/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show bootcamp with id${req.params.id}` });
};

// @descr     Create single bootcamp
// @route     POST /api/v1/bootcamp
// @access    Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: "Create new bootcamp" });
};

// @descr     Update single bootcamp
// @route     PUT /api/v1/bootcamp/:id
// @access    Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ message: "Update bootcamp" });
};

// @descr     Delete single bootcamp
// @route     PDELETE /api/v1/bootcamp/:id
// @access    Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ message: "Delete request" });
};
