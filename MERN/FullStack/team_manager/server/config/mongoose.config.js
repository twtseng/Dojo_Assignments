const mongoose = require('mongoose');
const database_name = "mongodb://localhost/team_manager";

mongoose.connect(database_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log(`Connected to database: ${database_name}`))
.catch(err => console.log(`Error connecting to database: ${database_name}, error=${err}`))