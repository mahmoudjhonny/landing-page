/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

// find the top button by id (top)
const topBtn = document.getElementById("top"),
    // find the array of collection of sections from html documentation
    section = Array.from(document.querySelectorAll('section')),
    // find an unordered list by id (navbar__list)
    menu = document.getElementById('navbar__list');

// this function use to create a list of sections
function create_list() {
    // clear the lest before any process
    menu.innerHTML = '';

    // loop on section parts to get the data-nav and id of each section
    section.forEach(sec => {
        nameOfSection = sec.getAttribute('data-nav');
        idOfSection = sec.getAttribute('id');

        //create element is called list (li) inside the unordered list by the property (appendChild)
        let list = document.createElement('li');
        list.insertAdjacentHTML("beforeend", `<a class='menu__link' href='#${idOfSection}'>${nameOfSection}</a>`);
        menu.appendChild(list);
    });
}

//call the function create list to build the navbar
create_list();

function sectioView(sec) {
    //the getBoundingClientRect() function providing information about the size of a section and its position relative to the viewport
    const sectionPosition = sec.getBoundingClientRect().top;
    return Math.floor(sectionPosition < 150 && sectionPosition >= -150);
}

// this function to add or remove your-active-class to the section in html page
function section_appearance() {
    section.forEach(sec => {
        sec.classList.remove('your-active-class');

        if (sectioView(sec)) {
            sec.classList.add('your-active-class')
        }
    });
}

//  when scroll the window check if the page of y axis is greater than 20 the active class will added to the button and it will appear
//  if if the page of y axis is greater than 20 the active class will added to the button and it will disappear
window.addEventListener("scroll", () => {
    if (this.window.pageYOffset > 20) {
        topBtn.classList.add("active");
        topBtn.onclick = function() {
            document.scrollingElement.scrollTop = 0;
        }
    } else {
        topBtn.classList.remove("active");
    }
});

// call the section_appearance function
window.addEventListener('scroll', section_appearance);