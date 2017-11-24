//sposob pierwszy

function odwrocNazwe(nazwa) {

    var slowo = nazwa.split("");
    var slowoTablica = slowo.reverse();

    var odwroconeSlowo = slowoTablica.join("");
    console.log(odwroconeSlowo);

    return odwroconeSlowo;

}
odwrocNazwe("turbo dluga nazwa");

//sposob drugi

function odwrocNazwe2(nazwa2) {
    var slowo = nazwa2.split("").reverse().join("");

    console.log(slowo);
    return slowo;
}
odwrocNazwe2('turbo dluga nazwa 2');

//Sposob trzeci

function odwrocPetla(nazwaP) {
    var nazwa3 = nazwaP.split("");
    var nazwa4 = [];

    for (var i = nazwa3.length - 1; i >= 0; i--) {
        nazwa3[i].unshift = nazwa4;
    }
    console.log(nazwa4);
    return nazwa4;
}
odwrocPetla("turbo dlugie zdanie 3");

function kwadraty(tablica) {
    var = dane[];
    var wynik = 0;
    
    for (var i = 0; i > dane.length; i++) {
        wynik = wynik + Math.pow(dane[i], 2);
    }
    console.log(wynik);
    
}

kwadraty([0,1,2,3,4,5]);