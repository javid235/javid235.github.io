// const menuIcon = document.getElementById('menu-icon');
// const mobileMenu = document.querySelector('.mobile-menu');

// menuIcon.addEventListener('click', () => {
//   mobileMenu.classList.toggle('active');
  
//   // Toggle body scroll
//   document.body.classList.toggle('no-scroll');
// });


// const menuIcon = document.getElementById('menu-icon');
// const mobileMenu = document.querySelector('.mobile-menu');

// menuIcon.addEventListener('click', () => {
//   mobileMenu.classList.toggle('active');
  
//   // Toggle body scroll
//   document.body.classList.toggle('no-scroll');
// });

// // Get all anchor tags inside the mobile menu
// const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

// // Add event listener to each anchor tag to close the mobile menu
// mobileMenuLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     mobileMenu.classList.remove('active');
//     document.body.classList.remove('no-scroll');
//   });
// });


// Function to close the mobile menu
function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

// Toggle mobile menu on menu icon click
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  // Toggle body scroll
  document.body.classList.toggle('no-scroll');
});

// Get all anchor tags inside the header and mobile menu
const headerLinks = document.querySelectorAll('#header a');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

// Add event listeners to header and mobile menu anchor tags
headerLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Get the href attribute of the clicked anchor tag
    const href = link.getAttribute('href');

    // Get the current document URL
    const currentUrl = window.location.href;

    // Check if the href attribute matches the current document URL
    if (href === currentUrl) {
      // Prevent the default behavior (following the link)
      event.preventDefault();
    }
  });
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Get the href attribute of the clicked anchor tag
    const href = link.getAttribute('href');

    // Get the current document URL
    const currentUrl = window.location.href;

    // Check if the href attribute matches the current document URL
    if (href === currentUrl) {
      // Prevent the default behavior (following the link)
      event.preventDefault();
    }

    // Close the mobile menu
    closeMobileMenu();
  });
});

