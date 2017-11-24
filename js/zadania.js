document.addEventListener('DOMContentLoaded', function() {
//    zmienTlo();
    klikniecie();
    formularz();
//    pokazPoKlik();
})



function zmienTlo() {
    var paragrafy = document.querySelectorAll('p');
    
    paragrafy[0].style.backgroundColor = "red";
    paragrafy[1].style.backgroundColor = "green";
    
}

function klikniecie() {
    var przycisk = document.querySelector('button');
    
    przycisk.addEventListener('click', zmienTlo);
}

function formularz(e) {
//    e.preventDefault();
    
    var wartosc_name = document.querySelectorAll('#formularz input');
    var pokaz_name = wartosc_name[0].value;
    var pokaz_name2 = wartosc_name[1].value;
    
    console.log(pokaz_name);
    console.log(pokaz_name2);
}

function pokazPoKlik() {
    
    var knefel = document.querySelector('')
}