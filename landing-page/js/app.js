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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables* 
 * 
*/
const sections = Array.from(document.querySelectorAll("section"));
const docFrag = document.createDocumentFragment();


/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the navbar
function listCreate() {
    for (let i = 0; i < sections.length; i++) {
        let sectionDataNav = sections[i].getAttribute("data-nav");
        let sectionID = sections[i].getAttribute("id");

        listItem = document.createElement("li");
        // Adding a class(for styling) and a dataset (for anchor scrolling) to the list items 
        listItem.innerHTML = `<a class="menu__link" data-nav="${sectionID}" href="#${sectionID}">${sectionDataNav}</a>`;

        //Adding list items to the document fragment
        docFrag.appendChild(listItem);
    }
    //Adding the document fragment to the navbar unordered list
    document.querySelector("#navbar__list").appendChild(docFrag);
}

// Add class 'active' to section when near top of viewport

function updateActiveClass() {
    for (let j = 0; j < sections.length; j++) {
        // Check if the section is within 200 pixels of the viewport top
        let sectionTop = sections[j].getBoundingClientRect().top;
        if (sectionTop >= -100 && sectionTop <= 200) {

            sections[j].classList.add("your-active-class");          
        }
        else sections[j].classList.remove("your-active-class");
    }
}

// Scroll to anchor ID using scrollToSection
function smoothScroll(){
document.getElementById("navbar__list").addEventListener("click", (scrollToSection) =>{
    // Prevent jumping to the sections
    scrollToSection.preventDefault();
    const navElement = document.getElementById(scrollToSection.target.dataset.nav);
    if (scrollToSection.target.dataset.nav){
        navElement.scrollIntoView({ behavior: "smooth" });        
    }
});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
listCreate();

// Scroll to section on link click
smoothScroll();

// Set sections as active
document.addEventListener("scroll", updateActiveClass);
