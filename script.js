//  * Global selectors
const color = document.querySelector('span');
const button = document.getElementById('btn');
const copyBtn = document.getElementById('copy');

// add event listener to button click
button.addEventListener('click', (e) => {
  if (!e.target === 'BUTTON') return;
  //   console.log(e);

  //   randomNumber = Math.floor(Math.random() * colors.length);
  //   randomColor = colors[randomNumber];
  //   console.log(randomColor);

  randomColor = createRandomRBGColor();
  color.innerText = randomColor;
  document.body.style.backgroundColor = randomColor;
});

copyBtn.addEventListener('click', (e) => {
  if (!e.target === 'SPAN') return;

  let text = color.innerText;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
});

const createRandomRBGColor = () => {
  randomRGBArray = [];
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 256);
    randomRGBArray.push(randomNumber);
  }

  randomRGBString = `rgb(${randomRGBArray[0]},${randomRGBArray[1]},${randomRGBArray[2]})`;
  return randomRGBString;
};
