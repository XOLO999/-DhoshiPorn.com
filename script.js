// Function to handle refresh messages
window.onload = function () {
  const hackerScreen = document.getElementById("hacker-screen");
  const mainContent = document.getElementById("main-content");
  const hackerText = document.getElementById("hacker-text");

  // Track refresh count
  let refreshCount = localStorage.getItem("refreshCount") || 0;

  if (refreshCount == 0) {
    hackerText.textContent = "HA BHAI KOI DIKKAT HAI KYA TEREKO";
  } else if (refreshCount == 1) {
    hackerText.textContent = "KHELEGA FREE FIRE";
  }

  // Show hacker screen for 5 seconds
  setTimeout(() => {
    hackerScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }, 5000);

  refreshCount++;
  localStorage.setItem("refreshCount", refreshCount % 2);
};

function showAlert() {
  alert("Arrey bhai, yaha sirf fun hai! Aur kuch nahi 😄");
}
