const table = document.getElementById'data-table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');
const

headers.forEach((th, colIndex) => {
  th.addEventListener('click', () => {
    const type = th.dataset.type;
    const dir = th.dataset.dir === 'desc' ? 'asc' : 'desc';
    headers.forEach(h => delete h.dataset.dir);
    th.dataset.dir = dir;

    rows.sort((a, b) => {
      const a = a.children[colIndex].textContent.trim();
      const b = b.children[colIndex].textContent.trim();
      if (type === 'number') return dir === 'asc' ? +A - +B : +B - +A;
      return dir === 'asc' ? A.localeCompare(B) : B.localeCompare(A);
    });
  });
    });