let timer = document.querySelector("#counter");
let likedNums = [];

timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    timer.textContent++;
}

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");

plus.addEventListener("click", function() {
    updateTimer();
})

function minusTime() {
    timer.textContent--;
}

minus.addEventListener("click", function() {
    minusTime();
})

let heart = document.querySelector("#heart");

heart.addEventListener("click", function() {
    let currentCount = timer.textContent.trim();
    let element = document.querySelector(`#element${currentCount}`);
    let likeList = document.querySelector(".likes");

    if(element === null) {
        likedNums.push({number : currentCount, count : 1});
        let li = document.createElement("li");
        li.id = `element${currentCount}`;
        li.textContent = `${currentCount} has been liked 1 time!`
        likeList.appendChild(li);
    } else {
        let currentNum = likedNums.find(obj => obj.number == currentCount);
        currentNum.count++;
        element.textContent = `${currentCount} has been liked ${currentNum.count} times!`;
    }
})

let pause = document.querySelector("#pause");
let sub = document.querySelector("#submit");

pause.addEventListener("click", function() {
   
    if(pause.textContent.trim() === "pause") {
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        sub.disabled = true;
        pause.textContent = "resume";
        clearInterval(timerInterval);
    } else {
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        sub.disabled = false;
        pause.textContent = "pause";
        timerInterval = setInterval(updateTimer, 1000);
    }

})

let form = document.querySelector("#comment-form");
let commentList = document.querySelector("#list");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let comment = e.target.querySelector("input").value;
    let p = document.createElement("p");
    p.textContent = comment;
    commentList.appendChild(p);
})









