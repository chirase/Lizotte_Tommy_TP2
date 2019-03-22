window.addEventListener('load', function () {

    console.log('passe')
    let elmTitre = document.querySelector('.site-branding .site-title')
    let elmDescription = document.querySelector('.site-branding .site-description')

    elmTitre.classList.add('anim1')
    elmDescription.classList.add('anim3')

  let menuBurger = document.getElementById("menu-burger");
    menuBurger.style.cursor = "pointer";
    if (window.innerWidth < 600) {
        menuBurger.innerHTML = `☰<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"></li>
<li id="menu-item-192" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-192"></li>
<li id="menu-item-258" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-258"></li>
<li id="menu-item-259" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-259"></li>
<li id="menu-item-260" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-260"></li>`;
    } else {
        menuBurger.innerHTML = `<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"><a href="http://127.0.0.1:8080/wp-veille/wordpress">Accueil</a></li>
<li id="menu-item-192" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-192"><a href="http://127.0.0.1:8080/wp-veille/wordpress/category/cours/">cours</a></li>
<li id="menu-item-258" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-258"><a href="http://127.0.0.1:8080/wp-veille/wordpress/2011/11/01/description-du-cours-tim-121-2/">TIM-121 Animation</a></li>
<li id="menu-item-259" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-259"><a href="http://127.0.0.1:8080/wp-veille/wordpress/2011/11/01/tim-629/">TIM-629 Création vidéo 2</a></li>
<li id="menu-item-260" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-260"><a href="http://127.0.0.1:8080/wp-veille/wordpress/2011/11/01/tim-554/">TIM-554 Production Web</a></li>`;
    }
    menuBurger.classList.add("animScreen");
    menuBurger.dataset.actif = false;

    menuBurger.onclick = function () {
        if (menuBurger.innerHTML == `☰<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"></li>
<li id="menu-item-192" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-192"></li>
<li id="menu-item-258" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-258"></li>
<li id="menu-item-259" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-259"></li>
<li id="menu-item-260" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-260"></li>` ){
            menuBurger.innerHTML = `<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"><a href="http://127.0.0.1:8080/wp-veille/wordpress">Accueil</a></li>
<li id="menu-item-192" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-192"><a href="http://127.0.0.1:8080/wp-veille/wordpress/category/cours/">cours</a></li>
<li id="menu-item-258" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-258"><a href="http://127.0.0.1:8080/wp-veille/wordpress/2011/11/01/description-du-cours-tim-121-2/">TIM-121 Animation</a></li>
<li id="menu-item-259" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-259"><a href="http://127.0.0.1:8080/wp-veille/wordpress/2011/11/01/tim-629/">TIM-629 Création vidéo 2</a></li>
<li id="menu-item-260" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-260"><a href="http://127.0.0.1:8080/wp-veille/wordpress/2011/11/01/tim-554/">TIM-554 Production Web</a></li>`;
            }
    }


    document.body.onresize = function () {
        if (window.innerWidth < 600) {
            menuBurger.innerHTML = `☰<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"></li>
<li id="menu-item-192" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-192"></li>
<li id="menu-item-258" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-258"></li>
<li id="menu-item-259" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-259"></li>
<li id="menu-item-260" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-260"></li>`;
        } else {
            menuBurger.innerHTML = `<li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-191"><a href="http://127.0.0.1:8080/wp-veille/wordpress">Accueil</a></li>
<li id="menu-item-192" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-192"><a href="http://127.0.0.1:8080/wp-veille/wordpress/category/cours/">cours</a></li>
<li id="menu-item-258" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-258"><a href="http://127.0.0.1:8080/wp-veille/wordpress/2011/11/01/description-du-cours-tim-121-2/">TIM-121 Animation</a></li>
<li id="menu-item-259" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-259"><a href="http://127.0.0.1:8080/wp-veille/wordpress/2011/11/01/tim-629/">TIM-629 Création vidéo 2</a></li>
<li id="menu-item-260" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-260"><a href="http://127.0.0.1:8080/wp-veille/wordpress/2011/11/01/tim-554/">TIM-554 Production Web</a></li>`;
        }
        
    };
    
    
    


})
