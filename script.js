const gradientPreview = document.querySelector(".gradient-preview");
const directionSelect = document.querySelector("#direction");
const colorInputs = document.querySelectorAll("input[type='color']");
const cssOutput = document.querySelector("#css-output");
const refreshButton = document.querySelector("#refresh");
const copyButton = document.querySelector("#copy");

// Generate a random hex color
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`;

// Update the gradient preview and CSS output
const updateGradient = () => {
  const direction = directionSelect.value;
  const color1 = colorInputs[0].value;
  const color2 = colorInputs[1].value;
  const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
  gradientPreview.style.background = gradient;
  cssOutput.value = `background: ${gradient};`;
};

// Generate random colors and update the gradient
const randomizeColors = () => {
  colorInputs[0].value = getRandomColor();
  colorInputs[1].value = getRandomColor();
  updateGradient();
};

// Copy CSS code to the clipboard
const copyToClipboard = () => {
  navigator.clipboard.writeText(cssOutput.value);
  copyButton.textContent = "Copied!";
  setTimeout(() => (copyButton.textContent = "Copy Code"), 1500);
};

// Event listeners
colorInputs.forEach((input) => input.addEventListener("input", updateGradient));
directionSelect.addEventListener("change", updateGradient);
refreshButton.addEventListener("click", randomizeColors);
copyButton.addEventListener("click", copyToClipboard);

// Initialize the gradient
updateGradient();
