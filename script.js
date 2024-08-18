var target = document.querySelector("#target");
var page = document.querySelector(".Bubble-page");
var score = 0;
var timer = 60;
var rn2 = Math.floor(Math.random() * 10);

function makeBubbles() {
    var clutter = "";
    var bubbleSize = Math.min(page.clientWidth / 8, page.clientHeight / 8);
    var bubblesPerRow = Math.floor(page.clientWidth / bubbleSize);
    var bubblesPerColumn = Math.floor(page.clientHeight / bubbleSize);
    var totalBubbles = bubblesPerRow * bubblesPerColumn;

    for (var i = 1; i <= totalBubbles; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubbles" style="width: ${bubbleSize}px; height: ${bubbleSize}px;">${rn}</div>`;
    }
    page.innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeBar").textContent = timer;
        } else {
            clearInterval(timerint);
            rn2 = 0;
            target.textContent = rn2;
            page.innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function targetNum() {
    target.textContent = rn2;
}

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector(".Bubble-page").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === rn2 && timer > 0) {
        increaseScore();
        rn2 = Math.floor(Math.random() * 10);
        targetNum();
        makeBubbles();
    }
});

window.addEventListener('resize', makeBubbles);

makeBubbles();
runTimer();
targetNum();
