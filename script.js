// Variables
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
// End of Variables

// Recursion lesson
// Stack example - Last In First Out - LIFO
const callStack = [
    'a(): returns "freeCodeCamp " + b()', // Will be executed last
    'b(): returns "is " + c()', // Will be executed second
    'c(): returns "awesome!"' // Will be executed first - LIFO
];

const a = () => {
    return "freeCodeCamp" + b();
};

const b = () => {
    return "is " + c();
};

const c = () => {
    return "awesome!";
};
// End of Stack example
// Recusion example

function countdown(number) {
    console.log(number);
    if (number === 0) {
        return
    } else {
        countdown(number - 1);
    }
};

//countdown(3);

function countDownAndUp(number) {
    console.log(number);
    if (number === 0) {
        console.log('Reached base case');
        return
    } else {
        countDownAndUp(number - 1);
        console.log(number);
    }
};

//countDownAndUp(3);
// End of Recusion example
// End of Recursion lesson

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

    /*  Better solution 
      let binary = '';
  
      if (input === 0) {
          binary = '0'
      };
  
      while (input > 0) {
          binary = (input % 2) + binary;
          input = Math.floor(input / 2);
      };
  
      result.innerText = binary;  
      */

    //Solution with recursion

    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

// End of Decimal to Binary converter function

// Check User Input
function checkUserInput() {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        alert('Please provide a decimal number.');
        return;
    };
    result.textContent = decimalToBinary(parseInt(numberInput.value));
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
