let numOfGrid = 32;
const container = document.querySelector('#container');
const resetButton = document.querySelector('.reset-button button');

const createGrid = (numOfGrid) => {
  const tempDiv = document.createElement('div');
  tempDiv.classList.add('temp-div');

  for (let i = 0; i < numOfGrid; i++) {
    const rowDivs = document.createElement('div');
    rowDivs.classList.add('grid-row');

    for (let j = 0; j < numOfGrid; j++) {
      const witdhAndHeight = 960 / numOfGrid;
      const boxDivs = document.createElement('div');
      boxDivs.classList.add('grid-box');
      boxDivs.style.width = `${witdhAndHeight}px`;
      boxDivs.style.height = `${witdhAndHeight}px`;
      boxDivs.addEventListener('mouseenter', () => {
        boxDivs.style.backgroundColor = randomRGB();
      })
      rowDivs.appendChild(boxDivs);
    }
    tempDiv.appendChild(rowDivs);
  }
  container.appendChild(tempDiv);
}

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

resetButton.addEventListener('click', () => {
  let inputNumber = +prompt("Enter number of grids (max 100)","");
  while (inputNumber >= 100) {
    inputNumber = +prompt("Enter a number smaller or equal to 100", "");
  }
  const tempDiv = document.querySelector('.temp-div');

  tempDiv.remove();

  createGrid(inputNumber);
})

createGrid(numOfGrid);
