var firstIndex = 0;

function automaticSlide() {
    setTimeout(automaticSlide, 5000);
    
    var slide;
    const box = document.querySelectorAll('.box');
    for (slide = 0; slide < box.length; slide++) {
        box[slide].style.display = "none";
    }
    firstIndex++;
    if (firstIndex >= box.length) {
        firstIndex = 0;
    }
    box[firstIndex].style.display = "flex";
}

automaticSlide();


let home = document.querySelector(".design");
let about = document.querySelector(".devops");
let contact = document.querySelector(".cyber");

let hometext = document.querySelector("#design");
let abouttext = document.querySelector("#devops");
let contacttext = document.querySelector("#cyber");

hometext.style.display = "flex";
hometext.style.width = "100%";

home.addEventListener('click' , function(){
    removeText();
    hometext.style.display = "flex";
    hometext.style.width = "100%";
})

about.addEventListener('click' , function(){
    removeText();
    abouttext.style.display = "flex";
    abouttext.style.width = "100%";
})

contact.addEventListener('click' , function(){
    removeText();
    contacttext.style.display = "flex";
    contacttext.style.width = "100%";
})

function removeText(){
    document.querySelectorAll(".h3").forEach(function(h3){
        h3.style.display = "none";
    })
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}