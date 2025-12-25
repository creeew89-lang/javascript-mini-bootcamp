const valueEl   = document.getElementById('value');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn    = document.getElementById('reset');

let count = 0;

function setCounter(num) {
  count = num;
  valueEl.textContent = count;
  localStorage.setItem('counter', count);
  if (count > 0) valueEl.style.color = '#2ecc71';
  else if (count < 0) valueEl.style.color = '#e74c3c';
  else valueEl.style.color = '#102a42';
}

setCounter(Number(localStorage.getItem('counter')) || 0);

increaseBtn.addEventListener('click', () => setCounter(count + 1));
decreaseBtn.addEventListener('click', () => setCounter(count - 1));
resetBtn.addEventListener('click',   () => setCounter(0));