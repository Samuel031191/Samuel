// 1. Dichiara alcune variabili di tipo diverso
let nomeStudente = "Samuel";
let etaStudente = 30;
let corsoAttivo = true; // Booleano

// 2. Stampa in console
console.log("Il nome dello studente è:", nomeStudente);
console.log("L'età dello studente è:", etaStudente);
console.log("Lo studente è iscritto al corso?", corsoAttivo);

// 3. Esegui alcune operazioni matematiche
let numero1 = 30;
let numero2 = 3;
let risultatoSomma = numero1 + numero2;
let risultatoSottrazione = numero1 - numero2;
let risultatoMoltiplicazione = numero1 * numero2;
let risultatoDivisione = numero1 / numero2;

console.log("Somma:", risultatoSomma);
console.log("Sottrazione:", risultatoSottrazione);
console.log("Moltiplicazione:", risultatoMoltiplicazione);
console.log("Divisione:", risultatoDivisione);

// 4. Concatenazione di stringhe
let primaParte = "Ciao, io sono ";
let secondaParte = "e ho ";
let terzaParte = " anni";

let fraseCompleta = primaParte + nomeStudente + secondaParte + etaStudente + terzaParte;
console.log(fraseCompleta);

// 5. Prova un prompt per chiedere un valore all'utente (opzionale)
// Apri la pagina in un browser e osserva il comportamento
let colorePreferito = prompt("Qual è il tuo colore preferito?");
console.log("Il colore preferito inserito è:", colorePreferito);
