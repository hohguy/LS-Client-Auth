const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const db = process.env.DB || 'mongodb://localhost/auth';

mongoose.Promise = global.Promise;
mongoose.connect(db);

const app = express();
app.use(bodyParser.json());
app.use(cors());

require('./controllers')(app);

app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});
