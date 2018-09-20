// @flow
import type { $Request, $Response } from 'express';
const { Router } = require('express');
const { sync } = require('utilities/express.js')
const {
  getRoom,
  createRoom,
  createMessage,
  getParticipantRooms
} = require('service/room.js');

const roomRouter = Router();

roomRouter.get(
  '/list',
  sync(async (
    { user }: $Request, res: $Response
  ): Promise<void> => {
    const { id } = user;
    const rooms = await getParticipantRooms(id);
    res.send(rooms);
  }));

roomRouter.get(
  '/:id',
  sync(async (
    { params }: $Request, res: $Response
  ): Promise<void> => {
    const { id } = params;
    const messages = await getRoom(id);
    res.send(messages);
  }));

roomRouter.post(
  '/',
  sync(async (
    { body, user }: $Request, res: $Response
  ): Promise<void> => {
    const { name } = body;
    const { id: userId } = user;
    const id = await createRoom(name, userId);
    res.type('text/plain').send(id);
  }));

roomRouter.post(
  '/:id/message',
  sync(async (
    { params, body, user }: $Request,
    res: $Response
  ): Promise<void> => {
    const { id } = params;
    const { content } = body;
    const { id: userId } = user;
    const messageId = await createMessage(content, id, userId);
    res.type('text/plain').send(messageId);
  }));

module.exports = roomRouter;
