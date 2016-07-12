module.exports = function (app) {
  
    var loginController = require('./loginController').controller(app);

    var BASE = "/node/rcaService";    

    app.get(BASE + '/index', loginController.index);

    app.get(BASE + '/login', loginController.authenticate);    
}
