const mainMenu = document.querySelector('.main-list');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const menu_items = document.querySelectorAll('nav .main-list li a');

const service_menu = document.getElementById("service_menu");

function click_services(){
    service_menu.classList.toggle("mega-menu");
    
}


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

