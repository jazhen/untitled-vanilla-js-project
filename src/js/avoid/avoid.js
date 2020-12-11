import AvoidEnemy from './avoid_enemy';
import AvoidSelf from './avoid_self';

class Avoid {
  constructor(canvas, door, loseTransition) {
    this.canvas = canvas;
    this.door = door;
    this.loseTransition = loseTransition;

    this.transitionText = 'avoid';
    this.fps = 24;
    this.timeLeft = 5;
    this.stopTimer = false;

    this.self = null;
    this.enemies = [];

    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }

  countDown() {
    this.countDownCounter += 1;

    if (this.countDownCounter > this.fps && !this.stopTimer) {
      this.timeLeft -= 1;
      this.countDownCounter = 0;
    }

    this.canvas.drawText(
      `${this.timeLeft}`,
      370 * this.canvas.scaleFactor,
      30 * this.canvas.scaleFactor,
      24
    );

    if (!this.timeLeft) {
      this.win();
    }
  }

  keyDownHandler(e) {
    if (e.key === 'w') {
      this.self.up = true;
    } else if (e.key === 'a') {
      this.self.left = true;
    } else if (e.key === 's') {
      this.self.down = true;
    } else if (e.key === 'd') {
      this.self.right = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === 'w') {
      this.self.up = false;
    } else if (e.key === 'a') {
      this.self.left = false;
    } else if (e.key === 's') {
      this.self.down = false;
    } else if (e.key === 'd') {
      this.self.right = false;
    }
  }

  removeEventHandlers() {
    document.addEventListener('keydown', this.keyDownHandler, false);
    document.addEventListener('keyup', this.keyUpHandler, false);
  }

  lose() {
    cancelAnimationFrame(window.requestAnimationFrameId);
    this.stopTimer = true;
    this.removeEventHandlers();

    setTimeout(() => {
      this.loseTransition.animate();
    }, 3000);
  }

  win() {
    this.stopTimer = true;
    this.removeEventHandlers();
    cancelAnimationFrame(window.requestAnimationFrameId);

    setTimeout(() => {
      this.door.animate();
    }, 3000);
  }

  checkCollisions() {
    const collide = (obj1, obj2) => {
      const centerDist = Math.sqrt(
        (obj1.x - obj2.x) ** 2 + (obj1.y - obj2.y) ** 2
      );

      return centerDist < obj1.radius + obj2.radius;
    };

    this.enemies.forEach((enemy) => {
      if (collide(this.self, enemy)) {
        this.lose();
      }
    });

    for (let i = 0; i < this.enemies.length; i++) {
      for (let j = 0; j < this.enemies.length; j++) {
        const obj1 = this.enemies[i];
        const obj2 = this.enemies[j];

        if (obj1 !== obj2 && collide(obj1, obj2)) {
          console.log('enemy collision detected');
        }
      }
    }
  }

  reset() {
    // set up on screen elements
    this.self = new AvoidSelf(this.canvas);
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));
    this.enemies.push(new AvoidEnemy(this.canvas));

    // timer
    this.stopTimer = false;
    this.timeLeft = 5;
    this.countDownCounter = 0;

    // add movement eventlisteners
    document.addEventListener('keydown', this.keyDownHandler, false);
    document.addEventListener('keyup', this.keyUpHandler, false);
  }

  play() {
    let lastDrawTime = performance.now();
    const fpsInterval = 1000 / this.fps;

    const animate = () => {
      window.requestAnimationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const timeSinceLastDraw = currentTime - lastDrawTime;

      if (timeSinceLastDraw > fpsInterval) {
        lastDrawTime = currentTime - (timeSinceLastDraw % fpsInterval);

        this.canvas.clear();

        this.enemies.forEach((enemy) => {
          enemy.draw();
          enemy.update();
        });

        this.self.draw();
        this.self.update();
        this.checkCollisions();
        this.countDown();
      }
    };

    this.reset();
    animate();
  }
}

export default Avoid;
