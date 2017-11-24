console.log(document.getElementById('header').innerHTML);

console.log(document.getElementById('header').innerHTML = '<p class="jakasklasa">jakis tekst</p>');

var new_par = document.querySelector('#header p');
console.log(new_par.className);

new_par.innerText = '<span>jakis konkretny text</span>';

document.getElementById('header').className = "nowa_klasa nowa_klasa2";

var linki = document.getElementsByClassName('link');
console.log(linki);

linki[3].href = 'http://google.com';

for (var i=0; i < linki.length; i++) {
    linki[i].style.color='red';
}