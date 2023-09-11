let inputs = document.getElementById("inputs")
function afterClick(insert){
    inputs.value += insert
}

function eraceClick(){
    if (inputs.value.length > 0){
     inputs.value = inputs.value.slice(0,-1);
    }
}

function clearClick() {
    inputs.value = ""
}

function evaluateClick() {
    try {
        inputs.value= eval(inputs.value)
    }
    catch (error) {
        inputs.value = "Error";
    }
}

 /*function calculateResult() {
    try {
        inputs.value = eval(inputs.value);
    } catch (error) {
        inputs.value = "Error";
    }
} */

function conClusion() {
    let inputValue = inputs.value; // Copy the input value to a new variable
    let result;

    // Check if the input contains a percentage (%)
    if (inputValue.includes('%')) {
        let parts = inputValue.split('%'); // Split the input by %
        if (parts.length === 2) {
            let x = parseFloat(parts[0]);
            let y = parseFloat(parts[1]);
            if (!isNaN(x) && !isNaN(y)) {
                result = (x / 100) * y; // Calculate percentage
            } else {
                result = "Error"; // Handle invalid input
            }
        } else {
            result = "Error"; // Handle invalid input
        }
    } else {
        try {
            result = eval(inputValue); // Evaluate the expression
        } catch (error) {
            result = "Error"; // Handle evaluation error
        }
    }

    inputs.value = result; // Update input field with the result
}
