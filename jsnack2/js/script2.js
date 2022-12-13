// console.log('JS OK');

/* 
In un array sono contenuti i nomi degli invitati
alla festa del grande Gatsby, 
l’utente inserisce il suo nome tramite
un input. 
Comunicagli se può partecipare o no alla festa.
*/


// Prendo gli elementi dal DOM
const userNameElement = document.getElementById ('user-name');
const buttonElement = document.getElementById ('confirm');
const messageElement = document.getElementById ('target-message');


// Creo l'array con i nomi degli invitati alla festa
const guestList = [
    'Pippo',
    'Pluto', 
    'Paperino',
    'Topolino'
]

// Aggancio l'eventlistener al click del bottone
buttonElement.addEventListener ('click', function() {

    // Prendo il valore dall'input (username)
    const userName = userNameElement.value.trim();

    // Flag
    let isApproved = false;

    //  Controllo se il nome inserito è tra quelli autorizzati
    for (let i = 0; i < guestList.length && !isApproved; i++) {
    
        if(userName === guestList[i]) {
            isApproved = true;
        }
    }

    messageElement.innerText = isApproved ? 'Benvenuto, buona serata!' : 'Mi dispiace, non sei autorizzato a partecipare!';
    messageElement.className = isApproved ? 'text-success' : 'text-danger';
    userNameElement.value = '';

});