var express = require('express');
var baseinfo = require('./routes/baseinfo');
var skill = require('./routes/skill');
var evaluation = require('./routes/evaluation');
var workExperience = require('./routes/workExperience');
var app = express();

app.use('/baseinfo', baseinfo);
app.use('/skill', skill);
app.use('/evaluation', evaluation);
app.use('/workExperience', workExperience);
app.get('/', function(req, res) {
    res.send('Hello world!');
});
app.listen(3000);