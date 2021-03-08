const game = {
    title: 'Guess the Number!',
    biggestNum: null,
    smallestNum: null,
    secretNum: null,
    gameOver: false,
    play: function () {
      this.getSmallestNum();
      this.getBiggestNum();
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
  
      while (this.gameOver === false) {
        this.getGuess();
        this.render();
  
      }
    },
    prevGuesses: [],
    getSmallestNum: function () {
      let success = false;
      while (success === false) {
        let enter = prompt(`Enter a minimum number:`);
        let enterMin = parseInt(enter);
        // console.log(getGuess1)
        if (isNaN(enterMin)) {
          alert("Input is not valid. Try again")
        } else {
          this.smallestNum = enterMin;
          success = true;
        }
      }
    },
    getBiggestNum: function () {
      let success = false;
      while (success === false) {
        let enter = prompt(`Enter a biggest number:`);
        let enterMax = parseInt(enter);
        // console.log(getGuess1)
        if (isNaN(enterMax) || enterMax <= this.smallestNum) {
          alert("Input is not valid. Try again")
        } else {
          this.biggestNum= enterMax;
          success = true;
        }
      }
    },
    getGuess: function () {
      let success = false;
      while (success === false) {
        let enterGuess = prompt(`Enter a guess between [${this.smallestNum}] and [${this.biggestNum}]:`);
        let getGuess1 = parseInt(enterGuess);
        // console.log(getGuess1)
        if (isNaN(getGuess1) || (getGuess1 < this.smallestNum || getGuess1 > this.biggestNum)) {
          alert("Input is not valid. Try again")
        } else {
          this.prevGuesses.push(getGuess1);
          success = true;
        }
      }
    },
    render: function () {
      if (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) {
        if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
          alert(`your guess is too high. Previous guesses: ${this.prevGuesses.join(",")} `)
        } else {
          alert(`your guess is too low. Previous guesses: ${this.prevGuesses.join(",")} `)
        }
      } else {
        alert(`Congrats! You guessed the number in [${this.prevGuesses.length}] guesses`)
        this.gameOver = true;
      }
    },
  };
  
  
  game.play();
  console.log(game)
  