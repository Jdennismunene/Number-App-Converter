let history = [];

function convertNumber() {
  let inputNumber = document.getElementById('inputNumber').value;
  let inputSystem = document.getElementById('inputSystem').value;
  let outputSystem = document.getElementById('outputSystem').value;
  let outputElement = document.getElementById('output');

  if (!inputNumber) {
    outputElement.textContent = 'Please enter a number.';
    return;
  }

  let decimalValue;

  // Convert input number to decimal
  try {
    switch (inputSystem) {
      case 'binary':
        decimalValue = parseInt(inputNumber, 2);
        break;
      case 'octal':
        decimalValue = parseInt(inputNumber, 8);
        break;
      case 'decimal':
        decimalValue = parseInt(inputNumber, 10);
        break;
      case 'hexadecimal':
        decimalValue = parseInt(inputNumber, 16);
        break;
      default:
        decimalValue = NaN;
    }

    if (isNaN(decimalValue)) {
      outputElement.textContent = 'Invalid input number.';
      return;
    }

    // Convert decimal value to output system
    let result;
    switch (outputSystem) {
      case 'binary':
        result = decimalValue.toString(2);
        break;
      case 'octal':
        result = decimalValue.toString(8);
        break;
      case 'decimal':
        result = decimalValue.toString(10);
        break;
      case 'hexadecimal':
        result = decimalValue.toString(16).toUpperCase();
        break;
      default:
        result = '';
    }

    outputElement.textContent = `Result: ${result}`;
    addToHistory(inputNumber, inputSystem, result, outputSystem);
  } catch (error) {
    outputElement.textContent = 'Error in conversion.';
  }
}

function addToHistory(inputNumber, inputSystem, result, outputSystem) {
  const conversion = `${inputNumber} (${inputSystem}) → ${result} (${outputSystem})`;
  history.push(conversion);
  displayHistory();
}

function displayHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = '';

  history.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    historyList.appendChild(listItem);
  });
}

function resetConverter() {
  document.getElementById('inputNumber').value = '';
  document.getElementById('output').textContent = '';
}

function clearHistory() {
  history = [];
  displayHistory();
}


























































// document.getElementById('bin-con').addEventListener('click', function() {
//     let decimalInput = document.getElementById('decimal').value;
//     let binaryResult = Number(decimalInput).toString(2);
//     document.getElementById('binary').value = binaryResult;
// });

// document.getElementById('oct-con').addEventListener('click', function() {
//     let binaryInput = document.getElementById('binary').value;
//     let decimalFromBinary = parseInt(binaryInput, 2);
//     const octalResult = decimalFromBinary.toString(8);
//     document.getElementById('octalNo').value = octalResult;
// });

// document.getElementById('dec-con').addEventListener('click', function() {
//     const octalInput = document.getElementById('octalNo').value;
//     const decimalResult = parseInt(octalInput, 8);
//     document.getElementById('decNo').value = decimalResult;
// });

// document.getElementById('hex-con').addEventListener('click', function() {
//     const decimalInput = document.getElementById('decNo').value;
//     const hexResult = Number(decimalInput).toString(16).toUpperCase();
//     document.getElementById('hexNo').value = hexResult;
// });

// function reset() {
//     document.getElementById('decimal').value = '';
//     document.getElementById('binary').value = '';
//     document.getElementById('octalNo').value = '';
//     document.getElementById('decNo').value = '';
//     document.getElementById('hexNo').value = '';
// }