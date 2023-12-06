const email = prompt('Inserisci la tua email');
console.log(email);

const controlloEmail = ['alessio@gmail.com', 'alessio@virgilio.it' , 'alessio@hotmail.com'];
console.log(controlloEmail);

let emailvalida = false;

for (let i = 0; i < controlloEmail.length; i++){

    if(email == controlloEmail[i]){
        emailvalida = true;
        
    }
}
if(emailvalida){

    alert('email  valida');
}
else{
    alert('email non valida');
}
