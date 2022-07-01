const nav=document.querySelector('.navbar');
window.onscroll = function(){
    var top = window.scrollY;
    if(top>=400){
       nav.classList.add('scrolling');
    }
    else{
     nav.classList.remove('scrolling')
    }
}