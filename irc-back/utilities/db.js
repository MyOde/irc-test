// @flow
// TODO File name aliasing
import type { DatabaseType } from '../types/mongodb.js'
const { MongoClient } = require('mongodb');

// TODO Move to a config file
const connectionString = '';

const performAction = (dbAction: (DatabaseType) => void) => {
    // TODO Handle errors
    MongoClient.connect(connectionString, (_, db: DatabaseType) => {
        dbAction(db);
    });
};

module.export = {
    performAction
};
