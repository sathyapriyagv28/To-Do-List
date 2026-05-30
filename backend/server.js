require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());
console.log("URI:", process.env.MONGO_URI);

// MongoDB Atlas Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("ERROR NAME:", err.name);
    console.log("ERROR MESSAGE:", err.message);
    console.log(err);
  });

// Routes
app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});