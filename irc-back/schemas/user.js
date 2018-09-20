// @flow
const { Schema } = require('mongoose');
const setSerializer = require('./utilities.js');

const userSchema = new Schema({
  sessionId: String,
  name: String
});

setSerializer(userSchema,);

module.exports = userSchema;
