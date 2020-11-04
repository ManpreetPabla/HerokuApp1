const mongoose = require('mongoose');
const connection = "mongodb+srv://infocus:infocus@cluster0.rykvx.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));