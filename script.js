


// Select the h2 prices
const basic = document.querySelector('.js-basic-price');
const professional = document.querySelector('.js-professional-price');
const master = document.querySelector('.js-master-price');


// Select the toggle button
const checkboxSwitch = document.getElementById('toggle-button');


let check = checkboxSwitch;

// add click listener to the checkbox button
checkboxSwitch.addEventListener('click', function () {

  // when the checkbox is checked
  if (check.checked) {
    console.log('Toggle checked');
    basic.innerText = '19.99';
    professional.innerText = '24.99';
    master.innerText = '39.99';
    
    // otherwise
  } else {
    console.log('toggle unchecked');
    basic.innerText = '199.99';
    professional.innerText = '249.99';
    master.innerText = '399.99';
  }

})
