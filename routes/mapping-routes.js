module.exports = function(app) {
    const todolist = require('../controller/mapping-controller');

    app.route('/getform/:formName/:formType').get(todolist.getForm);
}