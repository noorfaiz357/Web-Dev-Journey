const generateBtn = document.querySelector("#generate-btn");
const paletteContaienr = document.querySelector(".palette-container");
generateBtn.addEventListener("click", generatePalette);

paletteContaienr.addEventListener("click", (e) => {
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess(e.target))
      .catch((err) => console.log(err)); //copied to clipboard
  } else if (e.target.classList.contains("color")) {
    const hexValue =
      e.target.nextElementSibling.querySelector(".hex-value").textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() =>
        showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn"))
      )
      .catch((err) => console.log(err)); //copied to clipboard
  }
});

function generatePalette() {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }

  updatePaletteDisplay(colors);
}
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updatePaletteDisplay(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");
  colorBoxes.forEach((colorBox, index) => {
    const color = colors[index];
    const colorDiv = colorBox.querySelector(".color");
    const hexValue = colorBox.querySelector(".hex-value");

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}

function showCopySuccess(btn) {
  btn.textContent = "copied";
  btn.style.color = "#48bb77";

  setTimeout(() => {
    btn.textContent = "copy";
    btn.style.color = "";
  }, 1500);
}
generatePalette();
