// Cambia il testo del paragrafo
document.getElementById("btnCambia").addEventListener("click", function() {
    var nuovoTesto = document.getElementById("inputTesto").value;
    
    if (nuovoTesto) {
      document.getElementById("testo").innerText = nuovoTesto;
      document.getElementById("errore").innerText = ''; // Rimuovi eventuali errori
    } else {
      document.getElementById("errore").innerText = 'Inserisci un testo valido!';
    }
  });
  
  // Cambia il titolo
  document.getElementById("btnCambiaTitolo").addEventListener("click", function() {
    var nuovoTitolo = document.getElementById("inputTitolo").value;
  
    if (nuovoTitolo) {
      document.getElementById("titolo").innerText = nuovoTitolo;
      document.getElementById("errore").innerText = ''; // Rimuovi eventuali errori
    } else {
      document.getElementById("errore").innerText = 'Inserisci un titolo valido!';
    }
  });
  
  // Cambia il colore del paragrafo
  function cambiaColore() {
    var selezione = document.getElementById("colorSelect").value;
    document.getElementById("testo").style.color = selezione;
  }
  

   
  