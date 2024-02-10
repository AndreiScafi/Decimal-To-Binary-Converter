// Variables
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

//Animation

const animationContainer = document.getElementById('animation-container');

const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000,
        msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
        showMsgDelay: 15000,
        removeElDelay: 20000,
    },
    {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500,
        msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 10000,
        removeElDelay: 15000,
    },
    {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000,
        msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 5000,
        removeElDelay: 10000,
    },
];
//End of Animation
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

// Animation Function
const showAnimation = () => {
    result.innerText = 'Call Stack Animation';

    animationData.forEach((obj) => {
        setTimeout(() => {
            animationContainer.innerHTML += ` <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">decimalToBinary(${obj.inputVal})</p>`;

        }, obj.addElDelay);

        setTimeout(() => {
            document.getElementById(obj.inputVal).textContent = obj.msg;
        }, obj.showMsgDelay);

        setTimeout(() => {
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);
    });

    setTimeout(() => {
        result.textContent = decimalToBinary(5);
    }, 20000);
};
// End of Animation Function

// Check User Input
function checkUserInput() {
    const inputInt = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(inputInt)) {
        alert('Please provide a decimal number.');
        return;
    };

    //Animation
    if (inputInt === 5) {
        showAnimation();
        return;
    };
    //End of Animation

    result.textContent = decimalToBinary(inputInt);
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
