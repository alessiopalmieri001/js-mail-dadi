let player1 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log(player1);
let computer = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log(computer);
if(player1 > computer ){
    alert('Hai vinto');
}
else if ( player1 < computer){
    alert('Hai perso')
}
else{
    alert('Hai pareggiato')
}