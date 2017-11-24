document.addEventListener('DOMContentLoaded', function() {
//tutaj nazwy funkcji, odpalane przy danym zdarzeniu    
    changeColor();
    hoverLinks();
    zmienCos(); 
    wcisnijPodnies();
    wypiszZInputa();
})

window.addEventListener('resize', function(){
    zmienCos();
})

//window.addEventListener('scroll', function(){
////    jakasinnafunkcja
//})

function changeColor() {
//    tworze zmienna, tablice z elemewntami class
    var linki = document.getElementsByClassName('link');
    
    for (var i=0; i < linki.length; i++) {
        linki[i].style.color = 'red';
    }
}

function hoverLinks() {
    var linki = document.getElementsByClassName('link');
    
    for (var i=0; i < linki.length; i++) {
        linki[i].style.transition = 'all 0.3s';
        
        linki[i].addEventListener('mouseover', function(){
            this.style.color = 'blue';
        })
    }
    for (var i=0; i < linki.length; i++) {
        linki[i].addEventListener('mouseout', function(){
            this.style.color = 'red';
        })
        
        linki[i].addEventListener('click', function(){
            this.style.fontSize = "25px"
        })
    }
}

function wcisnijPodnies() {
    var inputs = document.querySelectorAll('#form input');
//    console.log(inputs);
    
    for (var i=0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function(){
            this.style.backgroundColor = "green";
        })
        
        inputs[i].addEventListener('keyup', function(){
            this.style.backgroundColor = "";
        })
    }
}
    

function zmienCos() {
    if (window.innerWidth < 768) {
//        console.log(window.innerWidth);
        document.body.style.backgroundColor = 'black';
    }
    else {
        document.body.style.backgroundColor = 'red';

    }
}

function wypiszZInputa() {
    var inputy = document.querySelectorAll('input');
    
    for (var i=0; i < inputy.length; i++) {
        inputy[i].addEventListener('change', function(){
            console.log(this.value);
        })
    }
}

var przycisk = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    console.log(e);
    e.stopPropagation();
})


document.body.addEventListener('click', function (){
    console.log('kliknieto body');
})
