let menu_button = document.getElementById("menu-button");
let menu = document.getElementsByClassName("flex-container")[0];
menu_button.addEventListener('click', () => {
    // alert();
menu.style.display =  (menu.style.display === 'none') ? 'flex' : 'none';
});