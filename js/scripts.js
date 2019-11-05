// Business Logic for movie ticket--

function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
}

Ticket.prototype.ticketPrice = function() {
  return this.age - this.time + this.movie
}



// Front-end logic for movie ticket--



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputMovie = $("input:radio[name=movie]:checked").val();
    var inputTime = $("input:radio[name=time]:checked").val();
    var inputAge = $("input:radio[name=age]:checked").val();
    var newTicket = new Ticket(inputMovie, inputTime, inputAge);
    console.log(newTicket);
    var price = 0;

    if (newTicket.age == "child") {
       price += 5;
    } else if (inputAge === "student") {
      price += 8;
    } else if (inputAge === "senior") {
      price += 7;
    } else {
      price += 12;
    };

    if (newTicket.time === "matinee" ) {
    price += 3
    } else {
    price += 0
    };

    if (newTicket.movie=== "new-release") {
      price += 3
    } else {
      price += 0
    };
  console.log(price);

    var totalPrice = newTicket.ticketPrice();
    console.log(totalPrice);

  });

});
