// Elements
const loginRegisterBtn = document.getElementById('login-register-btn');
const loginRegisterSection = document.getElementById('login-register-section');
const welcomeSection = document.getElementById('welcome-section');
const startBookingBtn = document.getElementById('start-booking-btn');
const bookingSection = document.getElementById('booking-section');
const emailPhoneInput = document.getElementById('email-phone');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const genderSelect = document.getElementById('gender');

// Show welcome section after login/register
loginRegisterBtn.addEventListener('click', function() {
  const emailPhone = emailPhoneInput.value;
  const password = passwordInput.value;
  const age = ageInput.value;
  const gender = genderSelect.value;

  if (emailPhone && password && age && gender) {
    loginRegisterSection.style.display = 'none';
    welcomeSection.style.display = 'block';
  } else {
    alert('Please fill all the fields correctly!');
  }
});

// Show booking section when the user clicks "Start Booking"
startBookingBtn.addEventListener('click', function() {
  welcomeSection.style.display = 'none';
  bookingSection.style.display = 'block';
});

// Booking functionality
const bookingTypeSelect = document.getElementById('booking-type');
const vehicleTypeOptions = document.getElementById('vehicle-type-options');
const pickupDropOptions = document.getElementById('pickup-drop-options');
const confirmationOptions = document.getElementById('confirmation-options');

bookingTypeSelect.addEventListener('change', function() {
  const bookingType = bookingTypeSelect.value;
  if (bookingType) {
    vehicleTypeOptions.style.display = 'block';
  } else {
    vehicleTypeOptions.style.display = 'none';
    pickupDropOptions.style.display = 'none';
    confirmationOptions.style.display = 'none';
  }
});

const vehicleTypeSelect = document.getElementById('vehicle-type');
vehicleTypeSelect.addEventListener('change', function() {
  const vehicleType = vehicleTypeSelect.value;
  if (vehicleType) {
    pickupDropOptions.style.display = 'block';
  } else {
    pickupDropOptions.style.display = 'none';
    confirmationOptions.style.display = 'none';
  }
});

// Show Rider Details and Live Tracking after Booking Confirmation
const confirmBookingBtn = document.getElementById('confirm-booking-btn');
confirmBookingBtn.addEventListener('click', function() {
  // Hide confirmation options
  confirmationOptions.style.display = 'none';

  // Show live tracking and rider details
  const trackingContainer = document.getElementById('tracking-container');
  const riderDetails = document.getElementById('rider-details');
  
  trackingContainer.style.display = 'block';
  riderDetails.style.display = 'block';

  // Example tracking details (you can replace these with actual dynamic data)
  document.getElementById('tracking-status').textContent = 'Vehicle is on the way...';
  document.getElementById('tracking-location').textContent = 'Street ABC';
  document.getElementById('tracking-eta').textContent = '10 minutes';

  document.getElementById('rider-name').textContent = 'Name: John Doe';
  document.getElementById('rider-phone').textContent = 'Phone: 123-456-7890';
  document.getElementById('rider-vehicle').textContent = 'Vehicle: Car';

  // Show Booking Confirmation Popup
  document.getElementById('popup-message').textContent = 'Booking Confirmed!';
  document.getElementById('popup').style.display = 'flex';
});

// Close popup
const closePopupBtn = document.getElementById('close-popup-btn');
closePopupBtn.addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});
