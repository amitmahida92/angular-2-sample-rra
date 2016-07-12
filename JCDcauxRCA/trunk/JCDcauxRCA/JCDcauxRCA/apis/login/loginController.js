module.exports.controller = function (app) {
    //var csModel = require('./rcaModel');        
    var ActiveDirectory = require('activedirectory');
    var config = {
        //  url: 'ldap://172.16.7.2:389/dc=rishabh,dc=com',
        url: 'LDAP://172.16.7.2/',
        baseDN: 'dc=Rishabh,dc=com'
    }

    var ad = new ActiveDirectory(config);

    return {
        index: function (req, res) {
            res.send("Index Called from login Controller");
        },
        authenticate: function (req, res) {

            var username = req.query.username + '@rishabh.com';
            var password = req.query.password;

            return ad.authenticate(username, password, function (err, auth) {
                if (err) {
                    return res.send({
                        "status": "OK",
                        "messageCode": 0,
                        "message": "Please Enter valid credentials",
                        "data": {
                            "auth": "false"
                        }
                    });
                }

                if (auth) {
                    return res.send({
                        "status": "OK",
                        "messageCode": 0,
                        "message": "Returned User Data Information",
                        "data": {
                            "auth": "true"
                        }
                    });
                }
                else {
                    return res.send({
                        "status": "OK",
                        "messageCode": 0,
                        "message": "Please Enter valid credentials",
                        "data": {
                            "auth": "false"
                        }
                    });
                }
            });
        }
    }
}
