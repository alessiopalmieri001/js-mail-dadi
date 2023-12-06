const email = prompt('Inserisci la tua email');
console.log(email);

const controlloEmail = ['alessio@gmail.com', 'alessio@virgilio.it' , 'alessio@hotmail.com'];
console.log(controlloEmail);

/* if ((email == controlloEmail[0] ) || (email == controlloEmail[1]) || (email == controlloEmail[2])){
    console.log(email)
    alert('entra entra')
}
else{
    alert('non entra')
}


 */
let emailvalida = false;

for (let i = 0; i < controlloEmail.length; i++){

    if(email == controlloEmail[i]){
        emailvalida = true;
        
    }
}
if(emailvalida == true){

    alert('email valida');
}
else{
    alert('email non valida');
}
