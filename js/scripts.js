// Business Logic for movie ticket--

function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
  this.price = 0
}


Ticket.prototype.ticketPrice = function(){
  if (this.age == "child") {
     this.price += 5;
  } else if (this.age === "student") {
    this.price += 8;
  } else if (this.age === "senior") {
    this.price += 7;
  } else {
    this.price += 12;
  };

  if (this.movie=== "new-release") {
    this.price += 3
  } else {
    this.price += 0
  };
  if (this.time === "matinee" ) {
  this.price /= 2
  } else {
  this.price += 0
  };

  return this.price
};


// Front-end logic for movie ticket--



$(document).ready(function(){
  $("form#movies").submit(function(event){
    event.preventDefault();
    var inputMovie = $("input:radio[name=movie]:checked").val();
    var inputTime = $("input:radio[name=time]:checked").val();
    var inputAge = $("input:radio[name=age]:checked").val();
    var newTicket = new Ticket(inputMovie, inputTime, inputAge);




    var totalPrice = newTicket.ticketPrice();

    $(".total").text("$" + totalPrice.toFixed(2));

    document.getElementById("movies").reset();

  });

});
