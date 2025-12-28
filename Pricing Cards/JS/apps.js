const toggle = document.getElementById('price-toggle');
const amounts = document.querySelectorAll('.amount');

function setPricing(isYearly) {
  amounts.forEach(span => {
    const price = isYearly ? span.dataset.yr : span.dataset.mo;
    span.textContent = price;
    span.parentElement.classList.add('glow');
    setTimeout(() => span.parentElement.classList.remove('glow'), 300);
  });
}

toggle.addEventListener('change', () => setPricing(toggle.checked));

const saved = localStorage.getItem('pricingToggle');
if (saved === 'true') toggle.checked = true;
setPricing(toggle.checked);

const style = document.createElement('style');
style.textContent = `
  .price.glow {
    color: var(--featured);
    transition: color .3s;
  }
`;
document.head.appendChild(style);