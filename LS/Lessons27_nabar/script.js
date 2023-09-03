let dropdown = document.querySelector(".dropdown");

const handlerToggle = () => {
        let menu = document.querySelector(".navbar-menu");

        // menu.classList.toggle("navbar-menu__mobile");

        if(menu.classList.contains("navbar-menu__mobile")){
            menu.classList.remove("navbar-menu__mobile")
        }else{
            menu.classList.add("navbar-menu__mobile")
        }
}

dropdown.addEventListener("click", handlerToggle)