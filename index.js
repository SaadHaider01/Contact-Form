document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
  
    radioButtons.forEach(radio => {
      radio.addEventListener('change', function () {
        // Remove the 'selected' class from all fieldsets
        document.querySelectorAll('.qt').forEach(fieldset => {
          fieldset.classList.remove('selected');
        });
  
        // Add the 'selected' class to the parent fieldset of the checked radio button
        if (this.checked) {
          this.closest('.qt').classList.add('selected');
        }
      });
    });
  
    document.getElementById('form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Show the success message
      const successMessage = document.getElementById('success-message');
      successMessage.classList.remove('hidden');
  
      // Hide the form
      const form = document.getElementById('form');
      form.style.display = 'none';
    });
  });
  