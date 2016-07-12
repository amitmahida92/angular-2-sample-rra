var mongoose = require('mongoose');

var rcaSchema = mongoose.Schema({
    employeeName: String,
    projectName: String,
    jiraNumber: Number,
    jiraUrl: String,
    issueType: String,
    RCAType: String,
    comments: String,
    createdOn: Date,
    createdBy: String,
    recordCreatedOn: Date
});

module.exports = mongoose.model('recordmodels', rcaSchema);