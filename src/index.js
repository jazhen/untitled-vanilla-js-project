import './styles/index.scss';
import Button from './js/button';
import fade from './js/transitions';

import Fighter from './js/fight';

let buttons = [];

export const canvas = document.querySelector('#canvas');
export const ctx = canvas.getContext('2d');

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function resizeGame() {
  const gameWindow = document.querySelector('#main');
  let cw = window.innerWidth;
  let ch = window.innerHeight;
  const goalAspectRatio = 4 / 3;
  const currentAspectRatio = cw / ch;

  // resize, taking into account screen orientation
  if (currentAspectRatio > goalAspectRatio) {
    cw = ch * goalAspectRatio;
    gameWindow.style.height = `${ch}px`;
    gameWindow.style.width = `${cw}px`;
  } else {
    ch = cw / goalAspectRatio;
    gameWindow.style.width = `${cw}px`;
    gameWindow.style.height = `${ch}px`;
  }

  // set margins to center canvas
  gameWindow.style.marginTop = `${-ch / 2}px`;
  gameWindow.style.marginLeft = `${-cw / 2}px`;

  // set new canvas size
  canvas.width = cw;
  canvas.height = ch;

  // scale all canvas elements to new size
  const scaleFactor = cw / 400;
  ctx.scale(scaleFactor, scaleFactor);

  buttons.forEach((button) => {
    button.setScale(scaleFactor);
  });
}

function play() {
  buttons = [];

  buttons.push(
    new Button('back', 30, 70, 80, 30, () => {
      fade();
      // eslint-disable-next-line no-use-before-define
      mainMenu();
    })
  );

  const character = new Fighter();

  function animate() {
    clear();
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillText(
      'playing game',
      canvas.width / 2,
      canvas.height / 4,
      canvas.width
    );

    buttons.forEach((button) => {
      button.draw();
    });

    character.draw();

    requestAnimationFrame(animate);
  }

  animate();
  // setInterval(animate, 1000 / 20);
}

function instructions() {
  buttons = [];

  buttons.push(
    new Button('back', 30, 70, 80, 30, () => {
      fade();
      // eslint-disable-next-line no-use-before-define
      mainMenu();
    })
  );

  function animate() {
    clear();
    ctx.fillStyle = 'aqua';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      'instructions go here',
      canvas.width / 4,
      canvas.height / 4,
      canvas.width
    );

    buttons.forEach((button) => {
      button.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

function mainMenu() {
  buttons = [];

  buttons.push(
    new Button('play', 30, 30, 80, 30, () => {
      fade();
      play();
    })
  );

  buttons.push(
    new Button('instructions', 30, 70, 80, 30, () => {
      fade();
      instructions();
    })
  );

  function animate() {
    clear();
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    buttons.forEach((button) => {
      button.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* event listeners */

window.addEventListener('load', () => {
  mainMenu();
  resizeGame();
});

window.addEventListener('resize', () => {
  resizeGame();
});

canvas.addEventListener('click', (e) => {
  const el = canvas.getBoundingClientRect();
  const pos = {
    x: e.clientX - el.left,
    y: e.clientY - el.top,
  };

  buttons.forEach((button) => button.mouseDown(pos));
});
