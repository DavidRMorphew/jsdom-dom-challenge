const timer = document.getElementById('counter')
const likeTracker = {}
const ul = document.querySelector('ul.likes');
let paused = false;
const pauseButton = document.getElementById("pause");
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const submit = document.getElementById('submit')
const comments = document.querySelector(".comments")
const commentInput = document.getElementById("comment-input")
const submitButton = document.querySelector("#submit")

  function incrementTimer(){
    if (!paused) {
        let newTime = parseInt(timer.innerText)
        newTime += 1
        timer.innerText = newTime
    }
  }
  function automaticallyIncrement() {
      setInterval(function(){
        incrementTimer()
      }, 1000)
  }
  function manuallyIncrement() { 
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
      
      minus.addEventListener('click', decrementTimer);
    }
    function onHeartClick() {
      
      heart.addEventListener('click', likeNumber);
    }

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
        pauseButton.addEventListener('click', pause);
    }

    function pause() {
        paused = !paused;

        plus.disabled = !plus.disabled
        minus.disabled = !minus.disabled
        heart.disabled = !heart.disabled
        submit.disabled = !submit.disabled

        const pauseButtonValue = pauseButton.innerHTML === "resume" ? "pause" : "resume";
        pauseButton.innerHTML = pauseButtonValue;
    }
    
submitButton.addEventListener("click",function(event) {
      event.preventDefault()
      if (commentInput.value != "") {
        comments.innerHTML += `<li>${commentInput.value}</li>`
        commentInput.value = ""
      } else {
        alert("Comment was blank. Please try again.")
      }
})

const restartButton = document.createElement('button');
pauseButton.insertAdjacentElement('afterend', restartButton);
restartButton.innerHTML = "Restart"

restartButton.addEventListener('click', function() {
  pause();
  timer.innerText = "0"
  pause();
});

    automaticallyIncrement();
    onHeartClick();
    pauseClick();
    manuallyIncrement();
    manuallyDecrementTimer();