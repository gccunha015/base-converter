function convert(event) {
  const target = event.target;
  const binaryInput = selectOneElement(".binary-input");
  const decimalInput = selectOneElement(".decimal-input");
  const output = selectOutputElement(target, binaryInput, decimalInput);

  output.innerHTML = convertInput(target, binaryInput, decimalInput);
}

function convertInput(target, binaryInput, decimalInput) {
  const value = target.innerHTML;
  let convertedValue;

  if (target === binaryInput && isBinary(value)) convertedValue = convertToDecimal(value);
  else if (target === decimalInput && isDecimal(value)) convertedValue = convertToBinary(value);
  else if (value == "") convertedValue = "";
  else convertedValue = "Invalid input!";

  return convertedValue;
}

function selectOutputElement(target, binaryInput, decimalInput) {
  return target === binaryInput ? decimalInput : binaryInput;
}

function convertToBinary(decimal) {
  let binary = "";
  let aux = decimal;

  if (aux == 0) return 0;

  while (aux > 0) {
    binary = binary.concat(aux%2);
    aux = Math.floor(aux/2);
  }

  return reverseString(binary);
}

function reverseString(value) {
  return value.split("").reverse().join("");
}

function convertToDecimal(binary) {
  let decimal = 0;
  const binaryLastIndex = binary.length - 1;

  for (let i=0; i<=binaryLastIndex ; i++) {
    decimal += binary[i] * Math.pow(2, binaryLastIndex - i);
  }

  return decimal;
}

function selectOneElement(description) {
  return document.querySelector(description);
}

function isDecimal(value) {
  return value.match(new RegExp("^[0-9]+$")) ? true : false;
}

function isBinary(value) {
  return value.match(new RegExp("^[0-1]+$")) ? true : false;
}