function startGame(button) {
  const gameContainer = button.closest(".game-container");
  gameContainer.dataset.state = "playing";
  animateTarget(gameContainer.querySelector(".target"));
}

function setDifficulty(button, difficulty) {
  const gameContainer = button.closest(".game-container");
  gameContainer.dataset.difficulty = difficulty;

  // Highlight active button
  const buttons = button.parentNode.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("bg-blue-500", "text-white"));
  buttons.forEach((btn) => btn.classList.add("bg-gray-700"));

  button.classList.remove("bg-gray-700");
  button.classList.add("bg-blue-500", "text-white");
}

function increaseScore(target) {
  const scoreElement = target
    .closest(".game-container")
    .querySelector(".score span");
  scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
}

function animateTarget(target) {
  const gameContainer = target.closest(".game-container");
  const difficulty = gameContainer.dataset.difficulty;
  let speed;

  switch (difficulty) {
    case "easy":
      speed = 4;
      break;
    case "medium":
      speed = 2;
      break;
    case "hard":
      speed = 1;
      break;
  }

  target.style.animation = `move ${speed}s infinite`;
}

// Keyframes animation via JavaScript
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes move {
  0%, 20% {
    top: 20%;
    left: 20%;
  }
  20.01%, 40% {
    top: 70%;
    left: 60%;
  }
  40.01%, 60% {
    top: 30%;
    left: 80%;
  }
  60.01%, 80% {
    top: 60%;
    left: 30%;
  }
  80.01%, 100% {
    top: 40%;
    left: 50%;
  }
}`;
document.head.appendChild(styleSheet);

document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("toggle");
  const dropdownContent = document.getElementById("dropdown-content");
  const currentLang = document.getElementById("current-lang");
  const radioInputs = document.querySelectorAll(
    "input[type=radio][name=language]"
  );
  const arrowIcon = document.querySelector('label[for="toggle"] svg');

  toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
      dropdownContent.classList.remove("hidden");
    } else {
      dropdownContent.classList.add("hidden");
    }
  });

  radioInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.id === "en") {
        currentLang.textContent = "English (US)";
      } else if (input.id === "id") {
        currentLang.textContent = "Bahasa Indonesia";
      }
      toggleCheckbox.checked = false;
      dropdownContent.classList.add("hidden");
      arrowIcon.classList.add("rotate-180");
    });
  });
});

// Ambil elemen hamburger dan menu
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

// Tambahkan event listener untuk ikon menu
menuIcon.addEventListener("click", () => {
  // Toggle visibilitas menu
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden"); // Tampilkan menu
    menu.style.maxHeight = menu.scrollHeight + "px"; // Set tinggi sesuai konten
  } else {
    menu.style.maxHeight = "0"; // Sembunyikan menu
    setTimeout(() => menu.classList.add("hidden"), 500); // Tambahkan kembali 'hidden' setelah transisi selesai
  }
});

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const faculty = document.getElementById("faculty").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();

    let isValid = true;
    let errorMessage = "";

    if (!fullName) {
      errorMessage += "Full Name is required\n";
      isValid = false;
    }

    if (!studentId) {
      errorMessage += "Student ID is required\n";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errorMessage += "Please enter a valid email address\n";
      isValid = false;
    }

    if (!faculty) {
      errorMessage += "Please select a Faculty/Major\n";
      isValid = false;
    }

    if (!dob) {
      errorMessage += "Date of Birth is required\n";
      isValid = false;
    }

    if (!gender) {
      errorMessage += "Please select a Gender\n";
      isValid = false;
    }

    if (!address) {
      errorMessage += "Address is required\n";
      isValid = false;
    }

    const phoneRegex = /^\d{10,}$/;
    if (!phone || !phoneRegex.test(phone)) {
      errorMessage += "Please enter a valid phone number (minimum 10 digits)\n";
      isValid = false;
    }

    if (!isValid) {
      alert(errorMessage);
      return;
    }

    alert("Registration successful!");
    this.reset();
  });

document.getElementById("phone").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^\d]/g, "");
});
