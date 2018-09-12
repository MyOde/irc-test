// @flow
import type { $Request, $Response } from 'express';
const { Router } = require('express');
const { sync } = require('utilities/express.js')
const { getRoom, createRoom, createMessage, getParticipantRooms } = require('service/room.js');

const apiRouter = Router();
const everythingIsMyFault = (err, req: $Request, res: $Response): Promise<void> => {
    res.status(500).send();
}

apiRouter.get('/room/list', sync(async ({ user }: $Request, res: $Response): Promise<void> => {
    const { _id } = user;
    const rooms = await getParticipantRooms(_id);
    res.send(rooms);
}));

apiRouter.get('/room/:id', sync(async (req: $Request, res: $Response): Promise<void> => {
    const { id } = req.parameters;
    const room = await getRoom(id);
    res.send(room);
}));

// TODO Add newly created resource id in response
apiRouter.post('/room', sync(async ({ body, user }: $Request, res: $Response): Promise<void> => {
  const { name } = body;
  const { _id } = user;
  await createRoom(name, _id);
  res.status(201).send();
}));

// TODO Add newly created resource id in response
apiRouter.post('/room/:id/message', sync(async (
    { parameters, body, user }: $Request,
    res: $Response
): Promise<void> => {
    const { id } = parameters;
    const { content } = body;
    const { _id } = user;
    await createMessage(content, id, _id);
    res.status(201).send();
}));

apiRouter.use(everythingIsMyFault);

module.exports = apiRouter;
