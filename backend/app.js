const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => res.send("API is running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
