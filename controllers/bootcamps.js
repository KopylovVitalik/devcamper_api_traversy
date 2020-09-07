const Bootcamp = require("../models/Bootcamp");

// @descr     Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// @descr     Get single bootcamp
// @route     GET /api/v1/bootcamp/:id
// @access    Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(`${req.params.id}`);

    if (!bootcamp) {
      return res.status(400).json({ success: false, message: err.message });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
  // res
  //   .status(200)
  //   .json({ success: true, message: `Show bootcamp with id${req.params.id}` });
};

// @descr     Create single bootcamp
// @route     POST /api/v1/bootcamp
// @access    Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch {
    res.status(400).json({ success: false });
  }

  // console.log(req.body)
  // res.status(200).json({ success: true, message: "Create new bootcamp" });
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
