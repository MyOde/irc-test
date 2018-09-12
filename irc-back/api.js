// @flow
import type { $Request, $Response } from 'express';
const { Router } = require('express');
const { sync } = require('utilities/express.js')
const { getRoom, createRoom } = require('service/room.js');

const apiRouter = Router();
const everythingIsMyFault = (err, req: $Request, res: $Response): Promise<void> => {
    /* console.log(err); */
    res.status(500).send();
}

apiRouter.get('/room/list', sync(async (_, res: $Response): Promise<void> => {
    await Promise.resolve(1);
    res.send({ hello: 'Hello' })
}));

apiRouter.get('/room/:id', sync(async (req: $Request, res: $Response): Promise<void> => {
    const { id } = req.parameters;
    const room = await getRoom(id);
    res.send(room);
}));

apiRouter.post('/room', sync(async ({ body, user }: $Request, res: $Response): Promise<void> => {
  const { name } = body;
  const { _id } = user;
  await createRoom(name, _id);
  res.status(201).send();
}));

apiRouter.use(everythingIsMyFault);

module.exports = apiRouter;
