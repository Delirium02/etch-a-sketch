const container = document.getElementById("container");

const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Custom grid size";
document.body.insertBefore(btn, container);

const resetBtn = document.createElement("button");
resetBtn.classList.add("resetBtn");
resetBtn.textContent = "Reset grid";
container.after(resetBtn);

// Generate a random RGB color
function getRandomColor() {
  return `${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}`;
}

// Create the grid based on user input size
function makeGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.dataset.opacity = 0.2;

    const baseColor = getRandomColor();

    box.addEventListener("mouseover", () => {
      let currentOpacity = parseFloat(box.dataset.opacity);

      if (currentOpacity < 1) {
        currentOpacity = Math.min(1, (currentOpacity += 0.1));
        box.style.backgroundColor = `rgba(${baseColor}, ${currentOpacity})`;
        box.dataset.opacity = currentOpacity;
      }
    });

    container.appendChild(box);
  }
}

makeGrid(16);

// Event listeners for buttons
btn.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter column x rows size"));

  if (newSize > 0 && newSize <= 100) {
    makeGrid(newSize);
  } else {
    alert("Please input a number between 1 and 100");
  }
});

// Reset grid to default size
resetBtn.addEventListener("click", () => {
  makeGrid(16);
});
