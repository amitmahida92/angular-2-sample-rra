module.exports.controller = function (app) {
    var rcaModel = require('./rcaModel');

    return {
        index: function (req, res) {
            res.send("Index Called from rca Controller");
        },
        listIssues: function (req, res) {

            var fDate = req.query.fromDate.split(/\D/);
            var fromDate = new Date(fDate.join('.'));            
            var tDate = req.query.toDate.split(/\D/);
            var toDate = new Date(tDate.join('.'));
            toDate.setDate(toDate.getDate() + 1);
            console.log(new Date(fromDate));

            rcaModel.find({ "recordCreatedOn": { "$gt": fromDate, "$lte": toDate } }, function (err, records) {
                if (err) res.err(err);

                res.send(records);
            });
        },
        listIssue: function (req, res) {
            var username = req.params.username;

            rcaModel.find({ 'employeeName': username }).sort({ 'recordCreatedOn': -1 }).exec(function (err, record) {
                if (err) return next(err);
                res.json(record);
            });
        },

        addIssue: function (req, res) {
            dataToSave = req.query;

            rcaModel.create(dataToSave, function (err, record) {
                if (err) {
                    console.log(err);
                    return res.send({
                        "status": "OK",
                        "messageCode": 0,
                        "message": "Please enter valid Data",
                        "data": {
                            "auth": "false"
                        }
                    });
                } else {
                    return res.send({
                        "status": "OK",
                        "messageCode": 0,
                        "message": "Data saved successfully",
                        "data": {
                            "auth": "true"
                        }
                    });
                }
            });
        },

        getIssueById: function (req, res) {
            var id = req.params.id;

            rcaModel.find({ '_id': id }).sort({ 'createdOn': -1 }).exec(function (err, record) {
                if (err) return next(err);
                res.json(record);
            });

        },

        updateIssue: function (req, res) {
            var dataToUpdate = req.query;
            var id = dataToUpdate._id;
            delete dataToUpdate._id;

            rcaModel.findByIdAndUpdate(id, dataToUpdate, { new: true }, function (err, record) {
                if (err) {
                    console.log(err);
                    return res.send({
                        "status": "OK",
                        "messageCode": 0,
                        "message": "Please enter valid Data",
                        "data": {
                            "success": "false"
                        }
                    });
                } else {
                    return res.send({
                        "status": "OK",
                        "messageCode": 0,
                        "message": "Data updated successfully",
                        "data": {
                            "success": "true"
                        }
                    });
                }
            });

        },

        deleteIssueById: function (req, res) {
            var id = req.params.id;
            var options = { sort: { 'createdOn': -1 } };

            rcaModel.findByIdAndRemove(id, options, callback);

            function callback(err, record) {
                if (err) {
                    console.log(err);
                    return res.send({
                        "status": "KO",
                        "messageCode": 0,
                        "message": "Error occured while deleting record",
                        "data": {
                            "success": "false"
                        }
                    });
                } else {
                    return res.send({
                        "status": "OK",
                        "messageCode": 0,
                        "message": "Recprd deleted successfully",
                        "data": {
                            "success": "true"
                        }
                    });
                }
            }

        }

    }

}

