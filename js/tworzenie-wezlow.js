var btn = document.createElement('button');
var text = document.createTextNode('kliknij mnie');
var title = document.createAttribute('title');

title.value = 'tytul';

btn.appendChild(text);

btn.setAttributeNode(title);
document.body.appendChild(btn);

btn.setAttribute('class', 'wartosc');
console.log(btn);

function stworzElement(element, text, atrybut, wartosc_atrybutu) {
    
    var new_elemenet = document.createElement(element);
    var new_text = document.createTextNode(text);
    var new_attr = document.createAttribute(atrybut);
    
    new_attr.value = wartosc_atrybutu;
    new_elemenet.appendChild(new_text);
    new_elemenet.setAttributeNode(new_attr);
    
    document.body.appendChild(new_elemenet);
}

stworzElement('p', 'nowy paragraf', 'class', 'paragraf');

var paragraf2 = document.querySelector('.paragraf');
console.log(paragraf2);

document.body.removeChild(paragraf2);

var linki = document.getElementsByClassName('link');
linki[4].removeAttribute('class');

var klasa = linki[3].getAttributeNode('class')

linki[3].removeAttributeNode(klasa);

