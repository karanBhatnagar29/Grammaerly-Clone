let textInput = document.getElementById("textBox");
let checkBtn = document.querySelector(".check");
let copyBtn = document.querySelector(".copy");
let totalChar = document.querySelector(".totalCount");
let remainingChar = document.querySelector(".remCount");

// Defining functions
// 1.) getting the count and updating the the total and remaining fields
let total = 0;
const updateCount = () => {
  total = textInput.value.length;
  totalChar.textContent = total;

  remainingChar.textContent = 150 - textInput.value.length;
};

// Copying text to the clipboard
const copyText = () => {
  textInput.select();
  textInput.setSelectionRange(0, 999);
  navigator.clipboard.writeText(textInput.value);
  alert("text copied");
};

// EventListeners
textInput.addEventListener("keyup", updateCount);
copyBtn.addEventListener("click", copyText);
