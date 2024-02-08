// Variables
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
// End of Variables

// Decimal to Binary converter function
function decimalToBinary(input) {

    /*   Simple solution but not efficiently
      const inputs = [];
      const quotients = [];
      const remainders = [];
  
      if (input === 0) {
          result.innerText = '0';
          return;
      };
  
      while (input > 0) {
  
          const quotient = Math.floor(input / 2);
          const remainder = input % 2;
  
          inputs.push(input);
          quotients.push(quotient);
          remainders.push(remainder);
  
          input = quotient;
      };
      console.log('Inputs: ', inputs);
      console.log('Quotients: ', quotients);
      console.log('Remainders: ', remainders);
  
      result.innerText = remainders.reverse().join(''); 
      */

    //New solution

    let binary = '';

    if (input === 0) {
        binary = '0'
    };

    while (input > 0) {
        binary = (input % 2) + binary;
        input = Math.floor(input / 2);
    };

    result.innerText = binary;
};

// End of Decimal to Binary converter function

// Check User Input
function checkUserInput() {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        alert('Please provide a decimal number.');
        return;
    };
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = '';
};
// End of Check User Input

//Event Listeners
convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkUserInput()
    };
});
//End of Event Listeners
