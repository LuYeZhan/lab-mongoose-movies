'use strict';

const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviesDatabase', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const celebrityArr = [
  { name: 'Tom Cruise', occupation: 'actor', catchPhrase: 'Pepeito' },
  { name: 'Beyonce', occupation: 'singer', catchPhrase: 'Single ladies' },
  { name: 'Mickey Mouse', occupation: 'mouse', catchPhrase: 'cheese' }];

const insertArr = async () => {
  try {
    await Celebrity.insertMany(celebrityArr);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

insertArr();
