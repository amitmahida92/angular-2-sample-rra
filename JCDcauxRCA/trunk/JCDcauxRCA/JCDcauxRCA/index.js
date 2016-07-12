var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//App setting header configuring
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/node/rcaService/', function (req, res, next) {
    res.send("App Running Successfully");
    next();
})


var mongoose = require('mongoose');
mongoose.connect('mongodb://172.16.7.101/RCADBTEST')


var loginApi = require('./apis/login/loginRoutes.js')(app);
var caseStudyApi = require('./apis/rca/rcaRoutes.js')(app);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});


app.set('port', process.env.ip || 2323);
app.set('ip', process.env.ip ||  "172.16.3.190");

var server = app.listen(app.get('port'), app.get('ip'), function () {
    console.log(" Express Server is listening on " + app.get('ip') + ':' + app.get('port'));
});
