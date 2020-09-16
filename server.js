const express = require("express");
const cors = require("cors");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;

env.config();
app.use(express.json());
app.use(cors());
app.use(express.json({ extended: false }));
// import routes
const authRoutes = require("./routes/auth");
// use routes
app.use('/api', authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static( "client/build" ));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); //relative path
  });
}

// connect to db
const uri = "mongodb+srv://user:user@users.y6fgk.mongodb.net/mern-login?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || uri, {
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
app.listen(PORT, () =>
console.log("server started on PORT: ${PORT}"))