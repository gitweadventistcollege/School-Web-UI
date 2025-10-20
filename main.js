

// FAQ Section
         const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = button.classList.contains('active');

      // Close all
      faqQuestions.forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.style.maxHeight = null;
        btn.nextElementSibling.style.paddingBottom = 0;
      });

      // Open selected
      if (!isOpen) {
        button.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingBottom = "15px";
      }
    });
  });

  // Dynamic copyright in footer
document.getElementById("copy-year").textContent = new Date().getFullYear();

// Form validation
    const form = document.getElementById('contactForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', function(e) {
      let isValid = true;

      // Reset error messages
      nameError.style.display = 'none';
      emailError.style.display = 'none';
      messageError.style.display = 'none';

      // Check if name is empty
      if (nameField.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
      }

      // Check if email is empty or invalid
      if (emailField.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailField.value)) {
        emailError.style.display = 'block';
        isValid = false;
      }

      // Check if message is empty
      if (messageField.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
      }

      // If any validation fails, prevent form submission
      if (!isValid) {
        e.preventDefault();
      } else {
        alert('Message sent successfully!');
        form.reset();
      }
    });

    const backToTopButton = document.getElementById('back-to-top');

// Show the button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function animateValue(id, start, end, duration, suffix = "") {
      const obj = document.getElementById(id);
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }


 // Toggle menu for mobile
    function toggleMenu() {
      const nav = document.getElementById('navMenu');
      nav.classList.toggle('show');
}
    function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function (event) {
    const dropdown = document.getElementById('ourSchoolDropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

    // Change header background on scroll
    window.addEventListener('scroll', () => {
      const header = document.getElementById('mainHeader');
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


// database
fetch('get_updates.php')
  .then(response => response.json())
  .then(data => {
    const section = document.querySelector('.news-section');
    section.innerHTML = ''; // Clear existing static items

    data.forEach((item, index) => {
      const html = `
        <div class="news-item">
          <div class="image-container">
            <img src="${item.image_path}" alt="News Image ${index + 1}" class="news-image">
          </div>
          <div class="text-container">
            <h2>${item.title}</h2>
            <p class="news-text" id="news${index}-text">
              ${item.summary}
              <span class="dots">...</span>
              <span class="more-text">${item.full_text}</span>
            </p>
            <button class="read-more-btn" onclick="toggleText('news${index}')">Read More</button>
          </div>
        </div>`;
      section.innerHTML += html;
    });
  });

  // Add this to your existing main.js

// Updates page specific functionality
function initializeUpdatesPage() {
  // Check if we're on the updates page
  if (!document.getElementById('updatesGrid')) return;
  
  // Back to top button for updates page
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
      window.addEventListener('scroll', () => {
          if (window.pageYOffset > 300) {
              backToTopButton.style.display = 'block';
          } else {
              backToTopButton.style.display = 'none';
          }
      });
  }
}

// Call this function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeUpdatesPage();
});
