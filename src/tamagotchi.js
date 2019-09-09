export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.happiness = 10;
    this.sleep = 10;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 10000);
  }

  checkHunger() {
    if (this.hunger > 0) {
      return true;
    } else {
      return false;
    }
  }

  feed() {
    this.hunger = 10;
  };

  setHappiness() {
    setInterval(() => {
      this.happiness--;
    }, 10000);
  };

  play() {
    this.happiness += 10;
  }

  checkHappiness() {
    if (this.happiness > 0) {
      return true;
    } else {
      return false;
    };
  };

  setSleep() {
    setInterval(() => {
      this.sleep--;
    }, 10000);
  };

  sleep() {
    this.sleep += 10;
  };

  checkSleep() {
    if (this.sleep >0) {
      return true;
    } else {
      return false;
    };
  };
}
