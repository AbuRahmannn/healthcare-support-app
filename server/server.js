const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const supportRoutes = require("./routes/supportRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/healthcareDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/support", supportRoutes);
app.use("/api/volunteer", volunteerRoutes);

app.get("/", (req, res) => {
  res.send("Healthcare Support API Running");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
