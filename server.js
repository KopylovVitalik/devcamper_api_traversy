const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require('./middleware/error');
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDB();

const app = express();

// Body Parser
app.use(express.json());

// Routes
const bootcamps = require("./routes/bootcamps");

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

// Error handler
app.use(errorHandler);

app.use(morgan("dev", {}));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log("Server running...".yellow.bold)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit());
});
