//  * Global selectors
const color = document.querySelector('span');
const button = document.getElementById('btn');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// add event listener to button click
button.addEventListener('click', (e) => {
  if (!e.target === 'BUTTON') return;

  randomColor = createRandomRBGColor();
  color.innerText = randomColor;
  document.body.style.backgroundColor = randomColor;
});

const createRandomRBGColor = () => {
  randomRGBArray = [];
  for (let i = 0; i < 7; i++) {
    let randomHexValue = Math.floor(Math.random() * hex.length);
    randomRGBArray.push(hex[randomHexValue]);
  }

  let randomRGBString = `#${randomRGBArray[0]}${randomRGBArray[1]}${randomRGBArray[2]}${randomRGBArray[3]}${randomRGBArray[4]}${randomRGBArray[5]}`;

  return randomRGBString;
};
