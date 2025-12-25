/* js/app.js – Reviews Carousel */
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    img: "https://images2.imgbox.com/e0/7e/sRzYWl1V_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia.",
    stars: 5
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "UI DESIGNER",
    img: "https://images2.imgbox.com/2e/7e/JodUYuEw_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle chambray crucifix. Synth sustainable yr hella biodiesel kickstarter disrupt.",
    stars: 4
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "INTERN",
    img: "https://images2.imgbox.com/56/88/ju5q162o_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    stars: 3
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "THE BOSS",
    img: "https://images2.imgbox.com/89/06/SwizKmFp_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo af.",
    stars: 5
  }
];

const imgEl   = document.getElementById('person-img');
const authorEl= document.getElementById('author');
const jobEl   = document.getElementById('job');
const infoEl  = document.getElementById('info');
const starsEl = document.getElementById('stars');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const randBtn = document.getElementById('random');

let current = 0;

function showPerson(idx) {
  const item = reviews[idx];
  imgEl.src = item.img;
  authorEl.textContent = item.name;
  jobEl.textContent = item.job;
  infoEl.textContent = item.text;
  starsEl.textContent = '★'.repeat(item.stars) + '☆'.repeat(5 - item.stars);
  localStorage.setItem('lastReview', idx);
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + reviews.length) % reviews.length;
  showPerson(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % reviews.length;
  showPerson(current);
});

randBtn.addEventListener('click', () => {
  current = Math.floor(Math.random() * reviews.length);
  showPerson(current);
});

/* load last or start at 0 */
current = Number(localStorage.getItem('lastReview')) || 0;
showPerson(current);