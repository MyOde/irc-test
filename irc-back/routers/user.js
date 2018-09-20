// @flow
import type { $Request, $Response } from 'express';
const { Router } = require('express');
const { getUserName } = require('service/user.js');

const router = Router();

router.get(
  '/',
  ({ user }: $Request, res: $Response): Promise<void> => {
    const name = getUserName(user);
    res.type('text/plain').send(name);
  }
)

module.exports = router;
