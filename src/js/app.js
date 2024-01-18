document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    escuchandoScroll();
    escuchandoScrollDos();
    escuchandoScrollTres();
    escuchandoScrollCuatro();
}

function escuchandoScroll(){
    const anima = document.getElementById('inf');
    const header = document.getElementById('header');

    window.addEventListener('scroll', function(){
        
        if(header.getBoundingClientRect().bottom > 0){
            anima.classList.remove('animacion1')
        }else{
            anima.classList.add('animacion1')
        }
            
    })
}

function escuchandoScrollDos(){
    const header = document.getElementById('header');
    const infDos = document.getElementById('inf-row2');

    window.addEventListener('scroll', function(){
        
        if(header.getBoundingClientRect().bottom > 0){
            infDos.classList.remove('animacion2')
        }else{
            infDos.classList.add('animacion2')
        }
            
    })
}

function escuchandoScrollTres(){
    const rowUno = document.getElementById('row1');
    const infRowTres = document.getElementById('inf-row3');

    window.addEventListener('scroll', function(){
        
        if(rowUno.getBoundingClientRect().bottom > 0){
            infRowTres.classList.remove('animacion1')
        }else{
            infRowTres.classList.add('animacion1')
        }
            
    })
}

function escuchandoScrollCuatro(){
    const rowDos = document.getElementById('row2');
    const infRow4 = document.getElementById('inf-row4');

    window.addEventListener('scroll', function(){
        
        if(rowDos.getBoundingClientRect().bottom > 0){
            infRow4.classList.remove('animacion2')
        }else{
            infRow4.classList.add('animacion2')
        }
            
    })
}