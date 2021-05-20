const express = require ('express');
const mongoose = require ('mongoose');
const requireDir = require ('require-dir');
const cors = require ('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/estoque', {useNewUrlParser: true});

requireDir('./src/models');

app.use('/sistema', require('./src/routers/routers'));
app.listen(3005);
