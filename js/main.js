const inputText = document.getElementById("inputText");

function countVowels() {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  for (let char of inputText.value) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  document.getElementById("result").innerText = `Number of vowels: ${count}`;
  inputText.value = "";
  document.getElementById("result").classList.add("par");
}
