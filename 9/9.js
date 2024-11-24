document.addEventListener("DOMContentLoaded", () => {
    // Select the input field, button, and result display
    const calculationField = document.getElementById("calculation");
    const startButton = document.getElementById("start");
    const resultDisplay = document.getElementById("result");

    // Add click event listener to the button
    startButton.addEventListener("click", () => {
        // Get the input value
        const calculation = calculationField.value.trim();

        // Initialize variables
        let operator;
        let operands;

        // Determine the operator and split the input string
        if (calculation.includes("+")) {
            operator = "+";
            operands = calculation.split("+");
        } else if (calculation.includes("-")) {
            operator = "-";
            operands = calculation.split("-");
        } else if (calculation.includes("*")) {
            operator = "*";
            operands = calculation.split("*");
        } else if (calculation.includes("/")) {
            operator = "/";
            operands = calculation.split("/");
        } else {
            resultDisplay.textContent = "Invalid calculation. Use +, -, *, or /.";
            return;
        }

        // Parse operands to integers
        const num1 = parseInt(operands[0], 10);
        const num2 = parseInt(operands[1], 10);

        // Validate operands
        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.textContent = "Invalid numbers. Please enter integers.";
            return;
        }

        // Perform the calculation
        let result;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    result = "Cannot divide by zero.";
                } else {
                    result = Math.floor(num1 / num2); // Integer division
                }
                break;
            default:
                result = "Unknown error.";
        }

        // Display the result
        resultDisplay.textContent = `Result: ${result}`;
    });
});
