import "./style.css";
// Form Validation using JS
// For Email, Country, Zip Code,
//  password and password confirmation (patch passwords)
// The labels can act as additional error containers
const email = document.querySelector('input[name="email"');
const emailLabel = document.querySelector('label[for="email"]');
const country = document.querySelector('input[name="country"]');
const countryLabel = document.querySelector('label[for="country"]');
const zipCode = document.querySelector('input[name="zipcode"]');
const zipCodeLabel = document.querySelector('label[for="zipcode"]');
const setPassword = document.querySelector('input[name="setpassword"]');
const setPasswordLabel = document.querySelector('label[for="setpassword"]');
const confirmPassword = document.querySelector('input[name="confirmpassword"]');
const confirmPasswordLabel = document.querySelector(
  'label[for="confirmpassword"]',
);
// Email Validation
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
email.addEventListener("input", () => {
  if (emailRegExp.test(email.value)) {
    emailLabel.innerHTML = "Email*";
    email.setCustomValidity("");
  } else {
    emailLabel.innerHTML =
      "Email* <span style='color:red'>(give a proper email)</span>";
    email.setCustomValidity("invalid");
  }
});
// Country Validation
country.addEventListener("input", () => {
  if (country.value.length >= 2) {
    countryLabel.innerHTML = "Country*";
    country.setCustomValidity("");
  } else {
    countryLabel.innerHTML =
      "Country* <span style='color:red'>(Is that a proper country?)</span>";
    country.setCustomValidity("invalid");
  }
});
// zip code validation
const zipCodeRegExp = /\d\d\d\d\d/;
zipCode.addEventListener("input", () => {
  if (zipCodeRegExp.test(zipCode.value)) {
    zipCodeLabel.innerHTML = "Zip Code*";
    zipCode.setCustomValidity("");
  } else {
    zipCodeLabel.innerHTML =
      "Zip Code* <span style='color:red'>(Zip Code must match XXXXX format)</span>";
    zipCode.setCustomValidity("invalid");
  }
});
// Password validation
const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
setPassword.addEventListener("input", () => {
  if (setPassword.value.length >= 8) {
    if (specialChars.test(setPassword.value)) {
      setPasswordLabel.innerHTML = "Password*";
      setPassword.setCustomValidity("");
    } else {
      // no special characters - set one
      setPasswordLabel.innerHTML =
        "Password* <span style='color:red'>(missing special character)</span>";
      setPassword.setCustomValidity("invalid");
    }
  } else {
    // less than 8
    setPasswordLabel.innerHTML =
      "Password* <span style='color:red'>(at least 8 characters)</span>";
    setPassword.setCustomValidity("invalid");
  }
});
// must match setPassword
confirmPassword.addEventListener("input", () => {
  if (setPassword.value === confirmPassword.value) {
    confirmPasswordLabel.innerHTML = "Confirm Password*";
    confirmPassword.setCustomValidity("");
  } else {
    confirmPasswordLabel.innerHTML =
      "Confirm Password* <span style='color:red'>(doesn't match)</span>";
    confirmPassword.setCustomValidity("invalid");
  }
});
