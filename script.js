//your JS code here. If required.
const changeBtn = document.getElementById('change_button');
const resetBtn = document.getElementById('Reset');
const blockIdInput = document.getElementById('block_id');
const colourIdInput = document.getElementById('colour_id');
const gridItems = document.querySelectorAll('.grid-item');

function resetGrid() {
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });
}

changeBtn.addEventListener('click', () => {
  const targetId = blockIdInput.value.trim();
  const color = colourIdInput.value.trim();

  // Reset all grid items to transparent before applying the new color
  resetGrid();

  const targetElement = document.getElementById(targetId);
  if (targetElement && targetElement.classList.contains('grid-item')) {
    targetElement.style.backgroundColor = color;
  }
});

resetBtn.addEventListener('click', () => {
  resetGrid();
  blockIdInput.value = '';
  colourIdInput.value = '';
});