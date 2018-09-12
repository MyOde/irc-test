// @flow
export type MongoClientType = {
    connect: (string, ConnectCallback) => void
};

export type DatabaseType = {
    collection: (string, ?CollectionOptionsType, ?CollectionCallbackType) => void
};

export type CollectionOptionsType = {
    strict: boolean
};

export type CollectionCallbackType = (string, Collection) => void;
export type ConnectCallbackType = (string, Database) => void;
