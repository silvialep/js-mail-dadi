

//         Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare ?
//     4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



// Mail
// Chiedi all’utente la sua email,
//     controlla che sia nella lista di chi può accedere,
//         stampa un messaggio appropriato sull’esito del controllo.




// creo variabile array con mail accettate
const pwList = ['pippo@gmail.com', 'pluto@gmail.it', 'topolino@yahoo.com', 'paperino@yahoo.it'];
console.log(pwList);

// creo variabili per elementi HTML
let userEmailEl = document.getElementById('user-email');
let userEmailAnswerEl = document.getElementById('email-answer');
let confirmButtonEl = document.getElementById('btn-confirm');

// creo evento al click del button
confirmButtonEl.addEventListener('click', function() {
    // inizializzo il ciclo for
    // for(let i = 0; i < pwList.length; i++) {
    //     if (userEmailEl.value == pwList[i]) {
    //         // controllo che l'input dell'utente sia presente nell'array e interrompo il ciclo
    //         userEmailAnswerEl.innerHTML = `Accesso consentito`;
    //         break;
    //     } else {
    //         // se l'input non è presente stampo un messaggio di errore
    //         userEmailAnswerEl.innerHTML = `Accesso negato`;
    //     }
    // }

    let provaOk = false;
    for (let i = 0; i < pwList.length; i++) {

        if (userEmailEl.value == pwList[i]) {
            provaOk = true;
        }
    }

    if (provaOk == true) {
        userEmailAnswerEl.innerHTML = `Accesso consentito`;
    } else {
        userEmailAnswerEl.innerHTML = `Accesso negato`;
    }
})





// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte ?
//     Se dobbiamo confrontare qualcosa che "cosa" ci serve ?

//

// creo array dei numeri del dado
let dice = [1,2,3,4,5,6];

// creo variabili degli elementi HTML
let buttonDice = document.getElementById('btn-dice');
let userNumberEl = document.querySelector('.user-number');
let pcNumberEl = document.querySelector('.pc-number');
let diceOutcomeEl = document.querySelector('.dice-outcome');


buttonDice.addEventListener('click', function() {
    // creo variabili delle estrazioni del dado dell'utente e del pc
    let userDice = dice[Math.floor(Math.random() * dice.length)];
    let pcDice = dice[Math.floor(Math.random() * dice.length)];
    // stampo i numeri estratti nell'HTML
    userNumberEl.innerHTML = `Il numero estratto da te è ${userDice}.`;
    pcNumberEl.innerHTML = `Il numero estratto dal computer è ${pcDice}.`;
    // controllo quale numero è più alto e stampo in pagina l'esito
    if(userDice > pcDice) {
        diceOutcomeEl.innerHTML = `Hai vinto!`;
    } else {
        diceOutcomeEl.innerHTML = `Ritenta`;
    }
})

let blabla = Math.floor(Math.random() * (0, 6) + 1);
console.log(blabla);


