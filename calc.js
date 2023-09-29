// Get Age
const d = new Date();
let currentYear = d.getFullYear();

const age = function (birthYear) {
  return currentYear - birthYear;
};

//Run confetti

const confettiAction = function () {
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1010 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

// Get generation

const generation = function (birthYear) {
  if (birthYear >= 1901 && birthYear <= 1924) {
    myGen.innerHTML = "you belong to the Greatest Generation";
    setTimeout(() => {
      memeClip.classList.toggle("--on");
      memeClip.innerHTML = `<iframe
      src="https://giphy.com/embed/JErAGpPtUV8ze"
      width="380"
      height="580"
      frameborder="0"
      class="giphy-embed"
      allowfullscreen
    ></iframe>
    <p>
      <a href="https://giphy.com/gifs/old-lady-JErAGpPtUV8ze"
        >via GIPHY</a
      >
    </p>`;
      confettiAction();
    }, 4000);
    setTimeout(() => {
      memeClip.classList.remove("--on");
    }, 16000);
  }
  if (birthYear >= 1925 && birthYear <= 1945) {
    myGen.innerHTML = "you belong to the Silent Generation";
    setTimeout(() => {
      memeClip.classList.toggle("--on");
      memeClip.innerHTML = `<iframe
      src="https://giphy.com/embed/JErAGpPtUV8ze"
      width="380"
      height="580"
      frameborder="0"
      class="giphy-embed"
      allowfullscreen
    ></iframe>
    <p>
      <a href="https://giphy.com/gifs/old-lady-JErAGpPtUV8ze"
        >via GIPHY</a
      >
    </p>`;
      confettiAction();
    }, 4000);
    setTimeout(() => {
      memeClip.classList.remove("--on");
    }, 16000);
  }
  if (birthYear >= 1946 && birthYear <= 1964) {
    myGen.innerHTML = "you belong to the Baby Boomer Generation";
    setTimeout(() => {
      memeClip.classList.toggle("--on");
      memeClip.innerHTML = `<iframe
      src="https://giphy.com/embed/3rgXBQIDHkFNniTNRu"
      width="380"
      height="580"
      frameborder="0"
      class="giphy-embed"
      allowfullscreen
    ></iframe>
    <p>
      <a
        href="https://giphy.com/gifs/dancing-grandma-grandmas-3rgXBQIDHkFNniTNRu"
        >via GIPHY</a
      >
    </p>`;
      confettiAction();
    }, 4000);
    setTimeout(() => {
      memeClip.classList.remove("--on");
    }, 16000);
  }
  if (birthYear >= 1965 && birthYear <= 1979) {
    myGen.innerHTML = "you belong to Generation X";
    setTimeout(() => {
      memeClip.classList.toggle("--on");
      memeClip.innerHTML = `<iframe
      src="https://giphy.com/embed/ZtMkorgeyRu5q"
      width="352"
      height="480"
      frameborder="0"
      class="giphy-embed"
      allowfullscreen
    ></iframe>
    <p>
      <a href="https://giphy.com/gifs/dancing-dance-woo-ZtMkorgeyRu5q"
        >via GIPHY</a
      >
    </p>`;
      confettiAction();
    }, 4000);
    setTimeout(() => {
      memeClip.classList.remove("--on");
    }, 16000);
  }
  if (birthYear >= 1980 && birthYear <= 1994) {
    myGen.innerHTML = "you belong to the Millennial Generation";
    setTimeout(() => {
      memeClip.classList.toggle("--on");
      memeClip.innerHTML = `<iframe
      src="https://giphy.com/embed/b6GKNxT8xJm1HOaAtA"
      width="384"
      height="480"
      frameborder="0"
      class="giphy-embed"
      allowfullscreen
    ></iframe>
    <p>
      <a
        href="https://giphy.com/gifs/Fantastic-Snacks-yup-fantasticsnacks-yuptothecup-b6GKNxT8xJm1HOaAtA"
        >via GIPHY</a
      >
    </p>`;
      confettiAction();
    }, 4000);
    setTimeout(() => {
      memeClip.classList.remove("--on");
    }, 16000);
  }
  if (birthYear >= 1995 && birthYear <= 2012) {
    myGen.innerHTML = "you belong to the Generation Z";
    setTimeout(() => {
      memeClip.classList.toggle("--on");
      memeClip.innerHTML = `<iframe src="https://giphy.com/embed/3o7qE2VAxuXWeyvJIY" width="314" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/3o7qE2VAxuXWeyvJIY">via GIPHY</a></p>`;
      confettiAction();
    }, 4000);
    setTimeout(() => {
      memeClip.classList.remove("--on");
    }, 16000);
  }
  if (birthYear >= 2013 && birthYear <= 2025) {
    myGen.innerHTML = "you belong to the Generation Alpha";
    setTimeout(() => {
      memeClip.classList.toggle("--on");
      memeClip.innerHTML = `<iframe src="https://giphy.com/embed/l2GsSPkKjx6ZW" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dancing-baby-adorable-l2GsSPkKjx6ZW">via GIPHY</a></p>`;
      confettiAction();
    }, 4000);
    setTimeout(() => {
      memeClip.classList.remove("--on");
    }, 16000);
  }
};

////////////////////////////////////////

const input = document.getElementById("myInputValue");
const answer = document.getElementById("resultText");
const myGen = document.getElementById("resultTextGen");
const memeClip = document.querySelector(".memecontainer");

//
const whatIsMyAge = function () {
  answer.innerHTML = ` ${age(input.value)} years old.`;
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
