// @flow
import type { $Request, $Response } from 'express';
const { Router } = require('express');
const { sync } = require('utilities/express.js')
const { getRoom, createRoom, createMessage, getParticipantRooms } = require('service/room.js');

const apiRouter = Router();

apiRouter.get('/room/list', sync(async ({ user }: $Request, res: $Response): Promise<void> => {
    const { _id } = user;
    const rooms = await getParticipantRooms(_id);
  console.log(rooms);
    res.send(rooms);
}));

apiRouter.get('/room/:id', sync(async ({ params }: $Request, res: $Response): Promise<void> => {
  const { id } = params;
  const messages = await getRoom(id);
  res.send(messages);
}));

// TODO Add newly created resource id in response
apiRouter.post('/room', sync(async ({ body, user }: $Request, res: $Response): Promise<void> => {
  const { name } = body;
  const { _id } = user;
  const id = await createRoom(name, _id);
  res.status(200).send(id);
}));

// TODO Add newly created resource id in response
apiRouter.post('/room/:id/message', sync(async (
  { params, body, user }: $Request,
    res: $Response
): Promise<void> => {
  const { id } = params;
    const { content } = body;
    const { _id } = user;
  const messageId = await createMessage(content, id, _id);
  res.status(200).send(messageId);
}));

module.exports = apiRouter;
