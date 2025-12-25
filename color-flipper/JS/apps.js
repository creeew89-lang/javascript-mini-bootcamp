const hexE1 = document.getElementById('hex');
const flipBtn = document.getElementById('flip');
const copyBtn = document.getElementById('copy');

function randomHexColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}

function setColor(hex){
    document.body.style.backgroundColor = hex;
    hexE1.innerText = hex;
    localStorage.setItem('bg-color', hex);
}
flipBtn.addEventListener('click', () => setColor(randomHexColor()));

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(hexE1.textContent);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy Hex', 1200);
});
const saved = localStorage.getItem('lastColor');
setColor(saved || randomHexColor());