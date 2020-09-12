const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }));

const appRoutes = require("./routes/app.routes");
appRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));