function convertToDecimal(event) {
  const target = event.target;
  const value = convertFromBinaryToDecimal(target.value);
  const element = selectOneElement(".decimal-input");

  element.value = value;
}

function convertToBinary(event) {
  const target = event.target;
  const value = target.value;
  const element = selectOneElement(".binary-input");

  element.value = value;
}

function showResult() {
  const binary = readInput();
  const decimal = convertFromBinaryToDecimal(binary);
  
  if (wasConverted(decimal)) showConvertedValue(decimal);
  else showInvalidInput();
}

function showConvertedValue(decimal) {
  const elementResult = selectOneElement("#result");
  
  elementResult.firstElementChild
    .innerHTML = decimal;

  elementResult.hidden = false;
}

function showInvalidInput() {
  alert("You can only input 0s and 1s");
}

function wasConverted(decimal) {
  return decimal !== null;
}

function convertFromBinaryToDecimal(binary) {
  let decimal = nullIfNullElseZero(binary);

  if (binary) decimal = convert(binary);

  return decimal;
}

function convert(binary) {
  let decimal = 0;
  const binaryLastIndex = binary.length - 1;

  for (let i=0; i<=binaryLastIndex ; i++) {
    decimal += binary[i] * Math.pow(2, binaryLastIndex - i);
  }

  return decimal;
}

function nullIfNullElseZero(value) {
  return value === null ? null : 0;
}

function readInput() {
  const input = selectOneElement(".binary-input");
  const value = validateInputValue(input);
  
  return value;
}

function validateInputValue(input) {
  let value = input.value;
  const valid = isBinary(value);

  return valueIfValidElseNull(value, valid);
}

function valueIfValidElseNull(value, valid) {
  return valid ? value : null;
}

function selectOneElement(description) {
  return document.querySelector(description);
}

function isBinary(value) {
  return value.match(new RegExp("^[0-1]+$")) ? true : false;
}