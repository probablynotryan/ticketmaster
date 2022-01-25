// Business Logic
function Receipt() {
  this.movies = {};
  this.currentId = 0;
}

Receipt.prototype.addMovie = function (movie) {
  this.movies[movie.movieName] = movie;
}
Receipt.prototype.assignID = () => {
  this.currentId += 1;
  return this.currentId;
}


function MovieTicket (movieName, price, time) {
  this.movieName = movieName;
  this.price = price;
  this.time = time;
}

function getPrice(userAge, movieAge, movieTime) {
  if (userAge > 65 || userAge < 13) {
    return 5;
  } else if (movieAge === "new") {
    return 100;
  } else if (movieTime < 15) { //before 3:00PM
    return 10;
  } else { 
    return 13;
  }
}

// User Interface





let myReceipt = new Receipt();

let price = getPrice(44, "old", 16); 

let movie = new MovieTicket ("Garfield 5", price, 16);

myReceipt.addMovie(movie);
