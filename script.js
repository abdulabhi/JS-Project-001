

function appendToDisplay(value) {
    document.getElementById('Display').value += value;
  }

  function calculate() {
    try {
      const result = eval(document.getElementById('Display').value);
      document.getElementById('Display').value = result;
    } catch (error) {
      document.getElementById('Display').value = 'Error';
    }
  }

  function clearDisplay() {
    document.getElementById('Display').value = '';
  }
  

// ... (existing code)

function clearDisplay() {
    document.getElementById('Display').value = '';
  }
  
  // New function for the Clear button
  function clearButton() {
    clearDisplay();
  }
  





const input = document.getElementById('Display');

input.addEventListener('focus', () => {
    input.placeholder = '';
});

input.addEventListener('blur', () => {
    if(input.value === ''){
        input.placeholder = 'Enter the Value For Calculate'
    }
})