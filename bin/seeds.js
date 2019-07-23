'use strict';

// const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');
const Movie = require('../models/Movies');

mongoose.connect('mongodb://localhost/moviesDatabase', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

// const celebrityArr = [
//   { name: 'Tom Cruise', occupation: 'actor', catchPhrase: 'Pepeito' },
//   { name: 'Beyonce', occupation: 'singer', catchPhrase: 'Single ladies' },
//   { name: 'Mickey Mouse', occupation: 'mouse', catchPhrase: 'cheese' }];

// const insertArr = async () => {
//   try {
//     await Celebrity.insertMany(celebrityArr);
//     mongoose.connection.close();
//   } catch (error) {
//     console.log(error);
//   }
// };

// insertArr();

const moviesArr = [
  { title: 'Dark', genre: 'Terror', plot: 'no mucho' },
  { title: 'Happy', genre: 'Comedy', plot: 'no mucho' },
  { title: 'science', genre: 'fiction', plot: 'no mucho' }
];

const insertMoviesArr = async () => {
  try {
    await Movie.insertMany(moviesArr);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

insertMoviesArr();
