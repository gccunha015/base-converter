function readInput() {
  const input = document.querySelector(".binary-input");
  const valid = input.value.match(new RegExp("^[0-1]+$")) ? true : false;
  const value = valid ? input.value : null;
  
  if (!valid) alert("You can only input 0s and 1s");
  
  return value;
}

function binaryToDecimal(binary) {
  let decimal = binary === null ? null : 0;

  if (binary) {
    const binaryLastIndex = binary.length - 1;
  
    for (let i=0; i <= binaryLastIndex; i++) {
      decimal += binary[i] * Math.pow(2, binaryLastIndex - i);
    }
  
  }

  return decimal;
};

function showResult() {
  const value = binaryToDecimal(readInput());
  
  if (value !== null) {
    const elementResult = document.querySelector("#result");
  
    elementResult.firstElementChild
      .innerHTML = value;
  
    elementResult.hidden = false;
  }
};

document.querySelector(".binary-convert").onclick = showResult;