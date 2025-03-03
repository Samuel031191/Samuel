// 1. Chiedi all'utente il tipo di forma geometrica
let forma = prompt("inserisci la forma di cui vuoi calcolare l' area: rettangolo, triangolo, cerchio")
console.log(forma)

//2. Imposta le regole per le forme geometriche
if (forma === "rettangolo") {
    //logica calcolo rettangolo 
    console.log("calcolo forma rettangolo IN")
    const base = prompt("inserisci il valore della base")
    const altezza = prompt("inserisci il valore dell' altezza")
    console.log(`calcolo forma rettangolo VALORI B: ${base} H:  ${altezza}`)
    //3. calcolo aerea rettangolo
    const area = (base * altezza)
    console.log("l' area del tuo rettangolo è: " + area)
    document.querySelector("#risultato").innerHTML = "La tua area è " + area



} else if (forma === "triangolo") {
    //logica calcolo area triangolo
    console.log("calcolo forma triangolo IN")
    const base = prompt("inserisci il valore della base")
    const altezza = prompt("inserisci il valore dell' altezza")
    console.log(`calcolo forma triangolo VALORI B: ${base} H:  ${altezza}`)
    //3. calcolo aerea triangolo
    const area = ((base * altezza) / 2)
    console.log("l' area del tuo triangolo è: " + area)
    document.querySelector("#risultato").innerHTML = "La tua area è " + area
}
else if (forma === "cerchio") {
    //logica calcolo area cerchio
    console.log("calcolo forma cerchio IN")
    const raggio = prompt("inserisci il valore del raggio")
    console.log(`calcolo forma rettangolo VALORI r: ${raggio}`)
    //3. calcolo aerea cerchio
    const area = ((raggio * raggio) * 3.14)
    console.log("l' area del tuo cerchio è: " + area)
    document.querySelector("#risultato").innerHTML = "La tua area è " + area
}
else {
    console.log("errore")
    document.querySelector("#errore").innerHTML = forma + " non è una forma corretta"
}