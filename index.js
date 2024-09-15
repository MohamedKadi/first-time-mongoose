// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
    console.log("Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

const Movie = mongoose.model('Movie', movieSchema);
//after making our model now we can instantiate from it
const silenceMovie = new Movie({
    title: 'silence',
    year: 1995,
    score: 7.5,
    rating: 'A'
})
//But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method.
