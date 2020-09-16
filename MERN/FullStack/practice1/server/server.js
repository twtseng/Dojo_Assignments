const config = require("./config/production.config.js");
const express = require("express");
const app = express();
const cors = require("cors");

// Connect database
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true}));
app.use(cors());

const appRoutes = require("./routes/app.routes");
appRoutes(app);

app.listen(config.SERVER_PORT, () => console.log(`Server listening on port ${config.SERVER_PORT}`));