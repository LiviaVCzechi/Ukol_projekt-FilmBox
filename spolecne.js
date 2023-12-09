let menuButton = document.querySelector('#menu-tlacitko');
menuButton.addEventListener('click', function() {
    // Najděte prvek s id 'menu-polozky'
    let menuItems = document.querySelector('#menu-polozky');
    if (menuItems.classList.contains('show')) {
        menuItems.classList.remove('show');
    } else {
        menuItems.classList.add('show');
    }
});


