const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//const config=require("./Database/config");
const { config } = require("process");
require("dotenv").config();
//const Sequelize=require('sequelize');
//const sequelize= new Sequelize('database','username','password',{}
const sequelize = require("sequelize");
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("INDEX")); // this is the route makes a request to the server and returns a response.

const PORT = process.env.PORT;
//console.log(config);

const userRoute = require("./routes/user.route");
const RentalAgreementRoute = require("./routes/Rental_Agreement.route");
const carRoute = require("./routes/car.route");

app.use("/api/user", userRoute);
app.use("/api/rentalAgreement", RentalAgreementRoute);
app.use("/api/car", carRoute);

// sequelize
//    .sync({ force: true })
//    .then(() => {
//      console.log("Tables created.");
//    })
//    .catch((err) => {
//      console.error("Error creating tables:", err);
//    });

app.listen(PORT);
console.log(`Server started on ${PORT}`);
/*sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.')});*/

