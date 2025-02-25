// 1. Chiedi all'utente il prezzo
let prezzo = prompt("prezzo prodotto:");
prezzo = parseFloat(prezzo); // converti la stringa in numero decimale

// 2. Chiedi se ha un coupon (sì/no)
let haCoupon = prompt("coupon? (sì/no)");

// 3. Imposta regole per lo sconto
// - se l'utente ha coupon, applichiamo uno sconto del 10%
// - altrimenti nessuno sconto
// - BONUS: se il prezzo è sopra un certo valore (es. 100€), applichiamo uno sconto extra

let sconto = 0;
if (haCoupon.toLowerCase() === "sì" || haCoupon.toLowerCase() === "si") {
  sconto = 0.10; // 10%
}

// Se il prezzo è maggiore di 100, sconto aggiuntivo del 10%
if (prezzo > 100) {
  sconto += 0.10; // 10% aggiuntivo
}

// 4. Calcola il prezzo finale
let prezzoFinale = prezzo - (prezzo * sconto);

// 5. Mostra il risultato in console
console.log("Prezzo iniziale:", prezzo.toFixed(2) + "€");
console.log("Sconto applicato:", sconto * 100 + "%");
console.log("Prezzo finale:", prezzoFinale.toFixed(2) + "€");
