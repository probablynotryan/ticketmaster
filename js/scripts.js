// Business Logic
function Receipt() {
  this.movies = {};
  this.currentId = 0;
}

Receipt.prototype.addMovie = function (movie) {
  movie.id = this.assignID();
  this.movies[movie.id] = movie;
}

Receipt.prototype.assignID = function () {
  this.currentId += 1;
  return this.currentId;
}

Receipt.prototype.findMovie = function (id) {
  return this.movies[id];
}

Receipt.prototype.deleteMovie = function (id) {
  if (this.movies[id] === undefined) {
    return false;
  }
  delete this.movies[id];
  return true;
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

function addToVisibleReceipt (movie) {
  let movieRow = "<div class=\"row movie-rows\" id=\"movie-row-" + movie.id + "\"><div class=\"col-7 receipt-col\">" + movie.movieName + " &nbsp;&nbsp;&nbsp;&nbsp;<span class=\"delete-button\" id=\"button-" + movie.id + "\">[X]</span></div><div class=\"col-3 receipt-col\">" + movie.time + "</div><div class=\"col-2 receipt-col\">$" + movie.price + "</div></div>"

  $(".receipt-container").append(movieRow);
}

function calculateCounts () {
  let totalPrice = 0;
  let totalNumber = 0;
  Object.keys(myReceipt.movies).forEach(function(key) {
    let movie = myReceipt.findMovie(key);
    totalPrice += movie.price;
    totalNumber++;
  })
  $("#total-price").html("$" + totalPrice);
  $("#ticket-count").html(totalNumber + " Tickets");
}


function attachContactListenersForDelete(id) {
  let strID = "#button-" + id
  $(strID).on("click", function () {
    myReceipt.deleteMovie(id);
    $("div#movie-row-" + id).remove();
    calculateCounts();
  })
}


$(document).ready(function() {
	$("form#add-movie").submit(function(event) {
    event.preventDefault();
    let movieSelect = $("#movieInput").val();
    let timeSelect = $("#timeInput").val();
    let ticketTypeSelect = $("#ticketTypeInput").val();
    let movieAge;
    let timeSelectOut;

    switch (timeSelect) {
      case "24":
        timeSelectOut = "12:00am";
        break;
      case "14":
        timeSelectOut = "2:00pm";
        break;
      case "21":
        timeSelectOut = "9:00pm";
        break;
      default:
        timeSelectOut = "x:xx";
        break;
    }

    switch (movieSelect) {
      case "Garfield5":
        movieAge = "old";
        movieSelect = "Garfield 5: Fast and the Furriest";
        break;
      case "Garfield20":
        movieAge = "new";
        movieSelect = "Garfield 20: Yes, We're Still Making These";
        break;
      case "Godzilla":
        movieAge = "new"
        movieSelect = "Godzilla 29014: Again";
        break;
      default:
        movieAge = "";
        break;
    }

    
    let actualPrice = getPrice(ticketTypeSelect, movieAge, parseInt(timeSelect));

    let movie = new MovieTicket (movieSelect, actualPrice, timeSelectOut);
    
    myReceipt.addMovie(movie);
    addToVisibleReceipt(movie);
    calculateCounts();
    attachContactListenersForDelete(movie.id);
  });
});
