const container = document.getElementById('container');

const btn = document.createElement('button');
btn.classList.add('btn')
btn.textContent = "Custom grid size";
document.body.insertBefore(btn, container);

function getRandomColor(color) {
    color = `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
    return `rgb(${color})`;
}

function makeGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = getRandomColor();
        });
        container.appendChild(box);
    }
};

makeGrid(16);

btn.addEventListener("click", () => {
    let newSize = prompt("Enter column x rows size");
    newSize = parseInt(newSize);

    if (newSize > 0 && newSize <= 100) {
        makeGrid(newSize);
    } else {
        alert("Please input a number between 1 and 100");
    }
    
});