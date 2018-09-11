// @flow
import type { $Request, $Response } from 'express';
const { Router } = require('express');
const { getRoom } = require('./service/room.js');

const apiRouter = Router();

apiRouter.get('/room/list', (_, res: $Response) => {
    res.send({ hello: 'Hello' })
});

apiRouter.get('/room/:id', (req: $Request, res: $Response) => {
    const { id } = req.parameters;
    res.send({ hello: 'Hello' })
});

module.exports = apiRouter;
