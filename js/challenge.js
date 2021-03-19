const timer = document.getElementById('counter')
const likeTracker = {}
const ul = document.querySelector('ul.likes');
let paused = false;

function incrementTimer(){
    if (!paused) {
        let newTime = parseInt(timer.innerText)
        newTime += 1
        timer.innerText = newTime
    }
    }
  function automaticallyIncrement() {
    //timer to call function every second
      setInterval(function(){
        incrementTimer()
      }, 1000)
  }
  function manuallyIncrement() {
    const plus = document.getElementById('plus')
    plus.addEventListener('click', incrementTimer);
  }
    function decrementTimer(){
        console.log("minus")
        if (!paused) {
            let newTime = parseInt(timer.innerText) 
            newTime -= 1
            timer.innerText = newTime
        }
    }
    function manuallyDecrementTimer() {
      const minus = document.getElementById('minus')
      minus.addEventListener('click', decrementTimer);
    }
    function onHeartClick() {
      let heart = document.getElementById('heart')
      heart.addEventListener('click', likeNumber);
    }

    manuallyIncrement();
    manuallyDecrementTimer();

    function likeNumber() {
        // create a list element that
        // has template literal with number liked
        // keep track of clicks with object with key of number liked and clicks as value
        // grab the number that is liked and add click count
        let numberCounter = timer.innerText;
        if (likeTracker[numberCounter]) {
            likeTracker[numberCounter]++
            const li = document.getElementById(numberCounter);
            li.innerText = `${numberCounter} has ${likeTracker[numberCounter]}`;
        } else {
            likeTracker[numberCounter] = 1;
            const li = document.createElement('li');
            li.innerText = `${numberCounter} has ${likeTracker[numberCounter]}`;
            li.setAttribute("id", `${numberCounter}`);
            ul.appendChild(li);
        }
    }

    function pauseClick() {
        const button = document.getElementById("pause");
        button.addEventListener('click', pause);
    }

    function pause() {
        console.log("paused!")
        // disable manual incr and decr with .disable on buttons
        // disable auto-counter
        paused = !paused;
       console.log(paused);

    }
    automaticallyIncrement();
    onHeartClick();
    pauseClick();