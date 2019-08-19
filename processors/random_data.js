'use strict';

module.exports = {
  generateEmail,
  generateFilename,
  getFileData
};


const FILES = require('../resources/files.json');
// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateEmail(userContext, events, done) {
  // generate data with Faker:
  let base_email = Faker.internet.exampleEmail();
  let timestamp = Math.round((new Date()).getTime() / 1000);
  let emailParts = base_email.split('@');
  let email = emailParts[0] + "+" + timestamp + "@" + emailParts[1];
  // add variables to virtual user's context:
  userContext.vars.email = email;
  // continue with executing the scenario:
  return done();
}

function generateFilename(userContext, events, done) {
  // generate data with Faker:
  let base_filename = Faker.system.fileName();
  let timestamp = Math.round((new Date()).getTime() / 1000);
  let filenameParts = base_filename.split('.');
  let filename = filenameParts[0] + "_" + timestamp + "." + filenameParts[1];
  // add variables to virtual user's context:
  userContext.vars.filename = filename;
  // continue with executing the scenario:
  return done();
}

function getFileData(userContext, events, done) {
  let file_bytes = FILES.default.bytes;
  // add variables to virtual user's context:
  userContext.vars.file_bytes = file_bytes;
  // continue with executing the scenario:
  return done();
}
