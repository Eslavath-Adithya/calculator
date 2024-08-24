document.addEventListener('DOMContentLoaded', () => {
    // Get the input box where the expression and result will be displayed
    const input = document.getElementById('inputBox');
    // Get all the buttons (numbers, operators, functions) on the calculator
    const buttons = document.querySelectorAll('button');

    // Initialize an empty string to hold the mathematical expression
    let expression = "";

    // Loop through each button and add a click event listener
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Get the text content (value) of the clicked button
            const value = e.target.innerText;

            if (value === '=') {
                // If the '=' button is pressed, evaluate the expression
                try {
                    // Use eval() to calculate the result of the expression
                    expression = eval(expression);
                    // Display the result in the input box
                    input.value = expression;
                } catch (error) {
                    // If there's an error during evaluation, display "Error"
                    input.value = 'Error';
                }
            } else if (value === 'AC') {
                // If the 'AC' button is pressed, clear the expression and input box
                expression = "";
                input.value = expression;
            } else if (value === 'DEL') {
                // If the 'DEL' button is pressed, remove the last character from the expression
                expression = expression.slice(0, -1);
                input.value = expression;
            } else {
                // For any other button, append the value to the expression
                expression += value;
                input.value = expression;
            }
        });
    });
});
