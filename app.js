const express = require("express");
const cors = require("cors");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");

env.config();
app.use(express.json());
app.use(cors());
app.use(express.json({ extended: false }));
// import routes
const authRoutes = require("./routes/auth");
// use routes
app.use('/api', authRoutes);

// connect to db
const uri = "mongodb+srv://user:@users.y6fgk.mongodb.net/mern-login?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // always add this as db wont connect properly
  useCreateIndex: true  
})
.then(() => {
  console.log("mongoDB connected")
})
.catch(err => console.log(err))

// to start server
app.listen(5000, () =>
console.log("server started on port 5000"))