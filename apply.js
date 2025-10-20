function validateForm() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input, select, textarea');
    for (let input of inputs) {
      if (input.value.trim() === '') {
        alert('Please fill out all required fields.');
        return false;
      }
    }

    const dob = document.getElementById('dob');
    const dobPattern = /^\d{2}-\d{2}-\d{4}$/;
    if (!dobPattern.test(dob.value)) {
      alert('Please enter a valid Date of Birth (dd-mm-yyyy).');
      return false;
    }

    const phone = document.getElementById('phone');
    const phonePattern = /^\d{10,13}$/;
    if (!phonePattern.test(phone.value)) {
      alert('Please enter a valid phone number.');
      return false;
    }

    alert('Form submitted successfully!');
    return true;
}
  
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});