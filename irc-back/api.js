// @flow
const { Router } = require('express');
const roomRouter = require('./routers/room.js');
const userRouter = require('./routers/user.js');

const apiRouter = Router();

apiRouter.use('/room', roomRouter);
apiRouter.use('/user', userRouter);

module.exports = apiRouter;

