const express = require('express');
const apiRouter = express.Router();
const employeesRouter = require('./employee.js');
const menuRouter = require('./menu.js');

apiRouter.use('/employees', employeesRouter);
apiRouter.use('/menus', menuRouter);

module.exports = apiRouter;