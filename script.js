const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is the same as its reverse
  return cleaned === cleaned.split("").reverse().join("");
}

function checkPalindrome() {
  const inputValue = textInput.value.trim();

  // Check if input is empty
  if (inputValue === "") {
    alert("Please input a value");
    return;
  }

  // Check if it's a palindrome
  const palindromeCheck = isPalindrome(inputValue);

  // Display result
  if (palindromeCheck) {
    result.textContent = `${inputValue} is a palindrome.`;
    result.className = "result-animation palindrome-result";
  } else {
    result.textContent = `${inputValue} is not a palindrome.`;
    result.className = "result-animation not-palindrome-result";
  }
}

// Event listeners
checkBtn.addEventListener("click", checkPalindrome);

textInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkPalindrome();
  }
});

// Clear result when user starts typing
textInput.addEventListener("input", function () {
  result.textContent = "";
  result.className = "";
});
