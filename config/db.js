const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Mongo connected".green.underline, conn.connection.host);
  } catch (err) {
    console.error(err.stack);
  }
};

module.exports = connectDB;
