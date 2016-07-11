#!/usr/bin/env node

'use strict';

const fs = require('fs');

const _ = require('lodash');
const faker = require('faker');

const mockPath = './src/main/js/mocks/messages.json';

let emails = [];

_.times(10000, (id) => {
  let email = {
    id : id,
    from : faker.internet.email(),
    to: faker.internet.email(),
    body : faker.lorem.text(),
    subject : faker.lorem.sentence(),
    time : faker.date.recent(),
    labels : _.random(0, 1) === 0 ? ['sent'] : ['inbox']
  };
  emails.push(email);
});

console.log('Writing fake messages to path:', mockPath);

fs.writeFileSync(mockPath, JSON.stringify(emails));
