// @flow
import type { $Request, $Response, NextFunction } from 'express';
const { randomBytes } = require('crypto');
const { sync } = require('utilities/express.js');
// const { connectIrcDb, closeIrcDb, UserModel } = require('utilities/ircDb.js');
const { connectIrcDb, UserModel } = require('utilities/ircDb.js');

const SESSION_ID = 'sessionId';
const COOKIE_AGE = 900000;

// TODO Cheaty name - also handles mongo connection, not just user session auth
const sessionAuthMiddleware = async (
    req: $Request,
    res: $Response,
    next: NextFunction
): Promise<void> => {
    const { cookies } = req;
    const sessionId = cookies[SESSION_ID];

    // TODO Will be connected even for endpoints that might not need it.
    await connectIrcDb();
    if (!sessionId) {
        const newSessionId = randomBytes(32).toString('hex');
        const newUser = new UserModel({ sessionId: newSessionId });
        const result = await newUser.save();

        req.user = result;
        res.cookie(SESSION_ID, newSessionId, { maxAge: COOKIE_AGE, httpOnly: true });
    }
    else {
        const existingUser = await UserModel.find({ sessionId }).exec();
        req.user = existingUser;
    }

    next();
};

module.exports = sync(sessionAuthMiddleware);
