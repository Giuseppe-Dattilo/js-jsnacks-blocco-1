// console.log('JS OK');

/* 
Il software deve chiedere per 10 volte all’utente 
di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.
*/

// prendo l'elemento dal DOM
const targetElement = document.getElementById('target');

let sum = 0;

let isvalid = true;

// chiedo all'utente di inserire 10 volte un numero (con un prompt)
for (let i = 0; i < 10 && isvalid; i++){
    const number = parseInt (prompt ('digita il numero che preferisci').trim());
    
    if(isNaN(number)){
        targetElement.classList.add('text-danger');
        targetElement.innerText = 'il valore che hai inserito non risulta corretto, riprova';
        isvalid = false;

    } else {
        sum += number;
    }  
}

if(isvalid){
    targetElement.innerText =`Il risultato è: ${sum}`;
}
