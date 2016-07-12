module.exports = function (app) {
  
    var csController = require('./rcaController').controller(app);

    var BASE = "/node/rcaService";    

    app.get(BASE + '/index', csController.index);

    app.get(BASE + '/searchIssues', csController.listIssues);

    app.get(BASE + '/getRecord/:username', csController.listIssue);

    app.post(BASE + '/saveRecord', csController.addIssue);

    app.get(BASE + '/updateRecord/:id', csController.getIssueById);

    app.post(BASE + '/updateIssue', csController.updateIssue);

    app.get(BASE + '/deleteIssue/:id', csController.deleteIssueById);


}
