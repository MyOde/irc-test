// @flow
import type { $Request, $Response, NextFunction } from 'express';

// Maybe: https://medium.com/@interacsean/flow-types-for-an-express-route-2e6212f8eabf
type ExpressFuncType = ($Request, $Response, NextFunction) => Promise<void>;
const sync = (fn: ExpressFuncType): ExpressFuncType => {
    return (req: $Request, res: $Response, next: NextFunction): Promise<void> => {
        Promise.resolve(fn(req, res, next))
               .catch(next);
    };
}

module.exports = { sync };
