// mobile navigation
const mainContainer = document.querySelector('.main-container')
const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visiblity = nav.getAttribute('data-visible');
    if(visiblity === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        }
})

// Dropdown menu
const dropdown = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".dropdown-menu");

// Toggle dropdown menu on click
dropdown.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent click from bubbling to document
    dropDownMenu.classList.toggle("show");

    // Ensure contact menu is hidden when opening dropdown
    contactMenu.classList.remove("appear");
});

// Hide dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target) && !dropDownMenu.contains(event.target)) {
        dropDownMenu.classList.remove("show");
    }
});

// Contact menu
const contactBox = document.querySelector(".contact-box");
const contactMenu = document.querySelector(".contact-menu");

// Toggle contact menu on contact box click
contactBox.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
    contactMenu.classList.toggle("appear");

    // Ensure dropdown menu is hidden when opening contact menu
    dropDownMenu.classList.remove("show");
});

// Prevent hiding the contact menu when clicking inside it
contactMenu.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the document click listener from hiding the menu
});

// Function to hide the contact menu when clicking outside
document.addEventListener("click", function(event) {
    if (!contactMenu.contains(event.target) && !contactBox.contains(event.target)) {
        contactMenu.classList.remove("appear");
    }
});
