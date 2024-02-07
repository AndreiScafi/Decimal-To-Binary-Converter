// Variables
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
// End of Variables

// Check User Input
function checkUserInput() {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        alert('Please provide a decimal number.');
        return;
    };
    console.log(numberInput.value);
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