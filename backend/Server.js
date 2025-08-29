const { error } = require("console");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/TaskRoutes");
const cors = require("cors");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

//middleware
app.use((req, res, next) => {
  console.log("path " + req.path + " method " + req.method);
  next();
});

app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MANGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        " DB connected Successfully and listening to " + process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));

app.use("/api/tasks", taskRoutes);
