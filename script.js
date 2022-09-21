function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        return undefined;
    }
    return num1 / num2;
}

function operate(operator, operand1, operand2) {
    let result;
    switch(operator) {
        case "+":
            result = add(operand1, operand2);
            return result;
        case "-":
            result = subtract(operand1, operand2);
            return result;
        case "*":
            result = multiply(operand1, operand2);
            return result;
        case "/":
            result = divide(operand1, operand2);
            return result;
    }
}

document.querySelectorAll(".digits").forEach(digit => {
    digit.addEventListener("click", function(event){
        document.querySelector(".screen").textContent += event.target.textContent;
    })
})

let num1, operatorString;
document.querySelectorAll(".operators").forEach(operator => {
    let result;
    if (operator.textContent === "=") {
        operator.addEventListener("click", function() {
            const displayString = document.querySelector(".screen").textContent;
            if (!displayString) {
                alert("Please enter numbers first");
                return;
            }
            else if (!displayString.includes(" ")) {
                alert("Please enter operator first");
                return;
            }
            else {
                const num2 = Number(displayString.slice(displayString.lastIndexOf(" ") + 1));
                result = operate(operatorString, num1, num2);
                document.querySelector(".screen").textContent = `${result}`;
            }
            })
            return;
        }
    operator.addEventListener("click", function(event){
        if (!document.querySelector(".screen").textContent) {
            alert("Please enter number first");
            return;
        }
        const string = document.querySelector(".screen").textContent;
        if (string.includes(" ")) {
            const num2 = Number(string.slice(string.lastIndexOf(" ") + 1));
            result = operate(operatorString, num1, num2);
            num1 = result;
            operatorString = event.target.textContent;
            document.querySelector(".screen").textContent = `${result} ${event.target.textContent} `;
        }
        else {
            num1 = Number(string);
            operatorString = event.target.textContent;
            document.querySelector(".screen").textContent += ` ${operatorString} `;
        }
    })
})

