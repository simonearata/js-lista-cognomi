// array cognomi
var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

//chiedere cognome all'utente e aggiungerlo
var cognome_utente = prompt("Inserisci il tuo cognome");
cognomi.push(cognome_utente);
cognomi.sort();

// stampare la lista ordinata alfabeticamente
for(var i = 0; i < cognomi.length; i++){
  
  var elementi_lista = cognomi[i];
  
  var elemento_precedete = document.getElementById('lista').innerHTML;
  
  document.getElementById('lista').innerHTML = elemento_precedete + "<li>" + elementi_lista + "</li>"
}

var a = cognomi.indexOf(cognome_utente);
document.getElementById('position_user').innerHTML = "Il tuo cognome è nella seguente posizione " + a




