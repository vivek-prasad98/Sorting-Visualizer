console.log("Hello this is a Responsive Design!");
const parentNode = document.querySelector('.wrapper');
const nav = document.querySelector('.nav');
const menuItems = document.querySelectorAll('.nav div');
const menuSpan = document.querySelector('#menu span');
const menuLS = document.querySelector('#menuItem');
let action = false;

// const MediaQuery = window.matchMedia('(min-width : 768px)');

function handleScreenChange(e) {
    const menu = document.querySelector('#menu');
    console.log(this.innerWidth);
    if(e < 1100) {
        min = 10;
        max = 200;
        console.log(e);
        menu.style.display="block";
        nav.after(menu);
        console.log(menuItems[0].children);
    }
    else{
        menuItems[0].after(menu);
        menu.style.display="inline-block";
    }
}

menuSpan.addEventListener('click',()=>{
    console.log(menuLS);
    if(!action)
    menuLS.style.height="auto";
    else
    menuLS.style.height="0";
    action = !action;
});

window.addEventListener('resize',(e)=>{
    handleScreenChange(e.target.innerWidth);
});

