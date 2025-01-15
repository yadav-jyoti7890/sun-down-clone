const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function fixedanimation(){
    let fixed = document.querySelector('#fixed')
let elems = document.querySelectorAll('.elem');
   elems.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        let image_src = e.getAttribute('data-image')
        fixed.style.display = "block";
        fixed.style.backgroundImage = `url(${image_src})`;
       
    })
    e.addEventListener('mouseleave', function(){
        fixed.style.display = "none";
   
    })
   })
}

fixedanimation();

function page5_animation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
      });
}

page5_animation()

function page4_animation(){
    let h1 = document.querySelectorAll('.left4_in h1')
    let right_img = document.querySelector('.page4_elem1 img')
     h1.forEach(function(e){
        e.addEventListener('mouseenter', function(){
            let src = e.getAttribute('data-image1')
            right_img.src = src; 
            right_img.style.transition = 'ease-in-out' 
        })
     })
}

page4_animation();

function menuanimation(){
    
let flag = 0;
let menu = document.querySelector('#menu, i')
let full_scr = document.querySelector('#full-scr')
let nav_img = document.querySelector('#nav img')
menu.addEventListener('click', function(){
    if(flag == 0){
    full_scr.style.top = '0'
    nav_img.style.opacity = 0;
    flag =1;
    }
    else{
        full_scr.style.top =  '-100%'
        nav_img.style.opacity = 1;
        flag = 0;
    }
})
}

menuanimation();

function loader_animation(){
    let loader = document.querySelector('#loader')
setTimeout(function(){
    loader.style.top = '-100%'
},4000)
}

loader_animation();