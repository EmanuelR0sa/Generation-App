// Get Age
const d = new Date();
let currentYear = d.getFullYear();

const age = function (birthYear) {
  return currentYear - birthYear;
};

// Get generation

const generation = function (birthYear) {
  if (birthYear >= 1901 && birthYear <= 1924) {
    myGen.innerHTML = "you belong to the Greatest Generation";
    memeClip.classList.toggle("memecontainer--on");
  }
  if (birthYear >= 1925 && birthYear <= 1945) {
    myGen.innerHTML = "you belong to the Silent Generation";
  }
  if (birthYear >= 1946 && birthYear <= 1964) {
    myGen.innerHTML = "you belong to the Baby Boomer Generation";
  }
  if (birthYear >= 1965 && birthYear <= 1979) {
    myGen.innerHTML = "you belong to Generation X";
  }
  if (birthYear >= 1980 && birthYear <= 1994) {
    myGen.innerHTML = "you belong to the Millennial Generation";
  }
  if (birthYear >= 1995 && birthYear <= 2012) {
    myGen.innerHTML = "you belong to the Generation Z";
  }
  if (birthYear >= 2013 && birthYear <= 2025) {
    myGen.innerHTML = "you belong to the Generation Alpha";
  }
};

////////////////////////////////////////

const input = document.getElementById("myInputValue");
const answer = document.getElementById("resultText");
const myGen = document.getElementById("resultTextGen");
const memeClip = document.querySelector(".memecontainer");

const whatIsMyAge = function () {
  answer.innerHTML = ` you have ${age(input.value)} years old.`;
  generation(input.value);
};

//listen to the input
const btn = document
  .getElementById("myBtn")
  .addEventListener("click", whatIsMyAge);
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
