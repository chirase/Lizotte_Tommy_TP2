window.addEventListener('load', function () {

    console.log('passe')
    let elmTitre = document.querySelector('.site-branding .site-title')
    let elmDescription = document.querySelector('.site-branding .site-description')

    elmTitre.classList.add('anim1')
    elmDescription.classList.add('anim3')
  let menuBurger = document.getElementById("menu-burger");
    window.menu = menuBurger.innerHTML;
    menuBurger.style.cursor = "pointer";
    if (window.innerWidth < 600) {
        menuBurger.innerHTML = `☰` + window.menu;
    } else {
        menuBurger.innerHTML = window.menu;
    }
    menuBurger.classList.add("animScreen");
    menuBurger.dataset.actif = false;

    menuBurger.onclick = function () {
        if (menuBurger.innerHTML == `☰` + window.menu ){
            menuBurger.innerHTML = window.menu;
            }
    }
    document.body.onresize = function () {
        if (window.innerWidth < 600) {
            menuBurger.innerHTML = `☰` + window.menu;
        } else {
            menuBurger.innerHTML = window.menu;
        }
        
    };
    
    
    


})
