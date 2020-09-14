const e = require("express")
const express = require("express");
const app = express();
const cors = require("cors");

// Connect database
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true}));
app.use(cors());

const appRoutes = require("./routes/app.routes");
appRoutes(app);

const SERVER_PORT = 8000;
app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));