//wyszukiwanie elementow po indentyfikatorze

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

//wyszukiwanie elementow po klasie
var linki = document.getElementsByClassName('link');
console.log(linki);

console.log(linki[4]);

var par = document.getElementsByTagName('p');
console.log(par);

var linkiCSS = document.querySelectorAll('#parFirst .link');
console.log(linkiCSS);

var linkCSS = document.querySelector('#sectionFirst .link');
console.log(linkCSS);