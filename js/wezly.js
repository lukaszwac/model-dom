var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

//zwroci welez rodzica
console.log(pierwszyDiv.parentNode);

//zwroci element rodzica
console.log(pierwszyDiv.parentElement);

//tablica wezlow dzieci
console.log(pierwszyDiv.childNodes);

console.log(pierwszyDiv.childNodes[0]);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

//zwracanie wartosci elementow siostrzanych
var link = document.getElementById('link');
console.log(link.nextElementSibling);

console.log(link.previousSibling);

