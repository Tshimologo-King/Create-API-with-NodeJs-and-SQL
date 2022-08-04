//Used to set up a server
const express = require("express");

//Used to prevwent errors when working locally
const cors = require("cors");

//Initialize express as an app variable
const app = express();
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoriesRoute = require("./routes/categoriesRoute");
const orderRoute = require("./routes/orderRoute");

//Set The Port
app.set("port", process.env.PORT || 6969);

//Enable the server to handle JSON requests
app.use(express.json());
//add routes

//Import from HTML
app.use(express.static("Public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "public/index.html");
});

//use routes
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/categories", categoriesRoute);
app.use("/order", orderRoute);

//Dont let local development give errors
app.use(cors());

app.listen(app.get("port"), () => {
  console.log(`Listening for calls on prt ${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});
