const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', router)


app.listen(1010, () => {
    console.log(`running in port 1010`)
})