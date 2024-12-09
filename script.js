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
