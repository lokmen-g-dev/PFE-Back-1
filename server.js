const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(express.json());

const AdminRoute = require("./routes/admin_route");





app.use('/admin',AdminRoute);





mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to MongoDB");
    }
  );
  

    app.listen(5000, () => {  
    console.log("server is up and connect")});
 