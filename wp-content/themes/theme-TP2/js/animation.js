window.addEventListener('load', function () {

    console.log('passe')
    let elmTitre = document.querySelector('.site-branding .site-title')
    let elmDescription = document.querySelector('.site-branding .site-description')

    elmTitre.classList.add('anim1')
    elmDescription.classList.add('anim3')

    let menuBurger = document.getElementById("menu-burger");
    menuBurger.style.cursor = "pointer";
    if (window.innerWidth < 600) {
        menuBurger.innerHTML = `☰<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"></li>`;
    } else {
        menuBurger.innerHTML = `<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"><a href="http://127.0.0.1:8080/wp-veille/wordpress">Accueil</a></li>
<li id="menu-item-192" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-192"><a href="http://127.0.0.1:8080/wp-veille/wordpress/category/cours/">cours</a></li>`;
    }
    menuBurger.classList.add("animScreen");
    menuBurger.dataset.actif = false;

    menuBurger.onclick = function () {
        if (menuBurger.innerHTML == `☰<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"></li>` ){
            menuBurger.innerHTML = `<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"><a href="http://127.0.0.1:8080/wp-veille/wordpress">Accueil</a></li>
<li id="menu-item-192" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-192"><a href="http://127.0.0.1:8080/wp-veille/wordpress/category/cours/">cours</a></li>`;
            }
    }





    document.body.onresize = function () {
        if (window.innerWidth < 600) {
            menuBurger.innerHTML = `☰<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"></li>`;
        } else {
            menuBurger.innerHTML = `<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"><a href="http://127.0.0.1:8080/wp-veille/wordpress">Accueil</a></li>
<li id="menu-item-192" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-192"><a href="http://127.0.0.1:8080/wp-veille/wordpress/category/cours/">cours</a></li>`;
        }
    };
    
    
    


})
