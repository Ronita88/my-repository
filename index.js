require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//connexion à la bdd
// mongoose.connect("mongodb://localhost/vinted-orion22");
mongoose.connect(process.env.DATABASE_URL);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome on Vinted Api ! 🎉");
});

//import des routes users et offers
const usersRoutes = require("./routes/users");
app.use(usersRoutes);
const offersRoutes = require("./routes/offers");
app.use(offersRoutes);

app.all("*", (req, res) => {
  res.status(400).json("Route introuvable");
});

app.listen(process.env.PORT, () => {
  console.log("Server has started ! 🤙");
});
