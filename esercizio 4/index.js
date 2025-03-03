// 1. Seleziona gli elementi dal DOM
const titolo = document.getElementById("titolo");
const testo = document.getElementById("testo");
const inputTesto = document.getElementById("inputTesto");
const inputTitolo = document.getElementById("inputTitolo");
const btnCambia = document.getElementById("btnCambia");
const btnCambiaTitolo = document.getElementById("btnCambiaTitolo");

// 2. Aggiungi un listener per il click sul bottone
btnCambia.addEventListener("click", function () {
    // Prendi il testo dall'input
    const nuovoContenuto = inputTesto.value;

    // Se il testo non è vuoto, cambia il paragrafo
    if (nuovoContenuto.trim() !== "") {
        testo.textContent = nuovoContenuto;
    } else {
        document.querySelector("#errore").innerHTML = " Inserisci del testo prima di cambiare il contenuto!";
    }
  });
  


// 3. Aggiungi un altro listener per il click sul bottone
btnCambiaTitolo.addEventListener("click", function () {
    // Prendi il testo dall'input
    const nuovoContenuto = inputTitolo.value;

    // Se il testo non è vuoto, cambia il paragrafo
    if (nuovoContenuto.trim() !== "") {
        titolo.textContent = nuovoContenuto;
    } else {
        document.querySelector("#errore").innerHTML = " Inserisci del testo prima di cambiare il contenuto!";
    }
  });
  