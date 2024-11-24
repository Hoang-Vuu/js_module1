document.addEventListener("DOMContentLoaded", () => {
    // Select input fields, dropdown, button, and result display
    const num1Field = document.getElementById("num1");
    const num2Field = document.getElementById("num2");
    const operationField = document.getElementById("operation");
    const startButton = document.getElementById("start");
    const resultDisplay = document.getElementById("result");

    startButton.addEventListener("click", () => {
        const num1 = parseInt(num1Field.value, 10);
        const num2 = parseInt(num2Field.value, 10);
        const operation = operationField.value;

        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.textContent = "Please enter valid integers.";
            return;
        }
        let result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "sub":
                result = num1 - num2;
                break;
            case "multi":
                result = num1 * num2;
                break;
            case "div":
                if (num2 === 0) {
                    result = "Cannot divide by zero.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operation.";
        }
        resultDisplay.textContent = `Result: ${result}`;
    });
});
