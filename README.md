# Going To The Movies

#### By _**Daniel Lindsey & Ryan Bass**_

#### _This application allows you to order movies and will display an itemized receipt when submitted._

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Tests

### Describe MovieTicket();  
Test: "It should return the name of movie and age of person purchasing."  

Code:  
MovieTicket("Garfield", "100")
Expected Output: Garfield, Price  

### Describe MovieTicket();  
Test: "It should return the name of movie and age of person purchasing."  

Code:  
MovieTicket("Garfield", "100", 17)  
Expected Output: Garfield, Age , time

### Describe getPrice();  
Test: "It should calculate a ticket price"  

Code: 
getPrice(44, "old", 16)  
13  

### Describe Receipt.prototype.addMovie();  
Test: "It add a movie to the receipt"  

Code: 
let myReceipt = new Receipt();  
let price = getPrice(44, "old", 16);  
let movie = new MovieTicket ("Garfield 5", price, 16);  
myReceipt.addMovie(movie);  
Receipt {movies: {…}}


## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_