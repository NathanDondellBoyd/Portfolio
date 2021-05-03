//Nav Bar and Burger Aninmation
const navSlider= ()=> {
    const burger= document.querySelector(".burger");
    const nav= document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');
    
    burger.addEventListener("click", () => {
     
    //Toggle Nav
     nav.classList.toggle("nav-active");
    
     //Animate links
    navLinks.forEach((links,index) => {
        if (links.style.animation){
            links.style.animation=''
        }
        else {
        links.style.animation= `navLinksFade 0.5s ease forwards ${index/7+0.5}s`
        }
    });
    
    //Burger Aninmation
    burger.classList.toggle('xmove');
    });
    
    
    
    
    
    
    }
    navSlider();
    