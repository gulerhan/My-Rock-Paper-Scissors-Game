var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

class RPS{
  constructor(){
      this.result = ["rock","paper","Scissors"];
  }
  createMovement(){
      var key = Math.floor(Math.random()*3);
      var hand = this.result[key];
      this.firstPick = hand;
      console.log("Player 1"+hand+"Made her move");
      return this;
  }
  createMovement2(){
    var key = Math.floor(Math.random()*3);
    var hand = this.result[key];
    this.secondPick = hand;
    console.log("Player 1"+hand+"Made her move");
    return this;
    }
  checkIt(){
    if(this.firstPick === this.secondPick){
        this.rePlay();
    }else if(this.firstPick === "rock" && this.secondPick === "paper"){
      return 2;
    }else if(this.firstPick === "rock" && this.secondPick === "Scissors"){
      return 1;
    }else if(this.firstPick === "paper" && this.secondPick === "Scissors"){
      return 2;
    }else if(this.firstPick === "paper" && this.secondPick === "rock"){
      return 1;
    }else if(this.firstPick === "Scissors" && this.secondPick === "paper"){
      return 1;
    }else if(this.firstPick === "Scissors" && this.secondPick === "rock"){
      return 2;
    }else{
      console.log("The machine has failed");
    }

  }
  rePlay(){
    console.log("The game is played again");
    var whoWon =  this.createMovement().createMovement().checkIt();
  }
}

var rps = new RPS();
var whoWon;
for(var counter = 0; counter < 100; counter++){
  whoWon = rps.createMovement().createMovement2().checkIt();
    if(whoWon === 1){
      player1.innerText += "+";
    }else if(whoWon === 2){
      player2.innerText += "+";
    }else{
      console.log("game is invalid");
    }
}
