let menu_elems = document.querySelector(".menu-elems img");
let nav = document.querySelector('nav');
let IsMenuOpened = false;
let animations = ["left-right-slider", "right-left-slider", "top-bottom-slider"];

function RandomChoise(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function display() {
    IsMenuOpened = !IsMenuOpened; // show if closed, close if shown
    // show all menu items
    for (const li of document.querySelectorAll('.flex-container li')) {
        li.style.display = IsMenuOpened ? 'flex' : 'none';
    }

    nav.style = `animation: 0.5s ease-out ${RandomChoise(animations)};`;
    let isvisible = IsMenuOpened ? "hidden" : 'visible';
    document.querySelector(".menu-elems h4").style = `visibility: ${isvisible}`;
    document.querySelector(".menu-elems").style.width = IsMenuOpened ? '40px' : "65%";
}


menu_elems.addEventListener('click', () => { display() });