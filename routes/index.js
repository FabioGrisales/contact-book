
const express = require('express');
const agendasRouter = require('./agendasRouter');
const usersRouter = require('./usersRouter');
const contactsRouter = require('./contactsRouter');


function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/users/:usersId/agendas/:agendasId/contacts', contactsRouter);
  router.use('/users/:usersId/agendas', agendasRouter);
  router.use('/users', usersRouter);

}

module.exports=routerApi;
