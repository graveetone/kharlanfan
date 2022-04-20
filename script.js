let menu_button = document.getElementsByClassName("menu-button")[0];
let menu = document.getElementsByClassName("flex-container")[0].getElementsByTagName("li");

function displayLi(switcher) {
    for (const li of document.querySelectorAll('.flex-container li')) {
        li.style.display = switcher ? 'flex' : 'none';
    }
    // arrow_icon.classList.add("fa-arrow-turn-right");
    // arrow_icon.classList.remove("fa-arrow-turn-down");
}
menu_button.addEventListener('click', () => { displayLi(true) });
document.querySelector(".logo").addEventListener('click', () => { displayLi(false) });