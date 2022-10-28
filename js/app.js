document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
})

function iniciarApp() {
    barraNavegacion();
}

function barraNavegacion() {
    const menuOpen = document.querySelector('.header__menu-open');
    const menuClose = document.querySelector('.header__menu-close');
    const headerNavegacion = document.querySelector('.header__navegacion');
    

    menuOpen.addEventListener('click', (e) => {
        headerNavegacion.classList.toggle('header__navegacion--abrir');
        document.body.classList.toggle('opacity');
        
        if(headerNavegacion.classList.contains('header__navegacion--abrir')){
            menuClose.addEventListener('click', () => {
                headerNavegacion.classList.remove('header__navegacion--abrir');
                document.body.classList.remove('opacity');
            })
        }
    })
}


