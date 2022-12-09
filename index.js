// Your code here
// Your code here
// **************************************************TEST 1**************************************************
// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//         const leftNumbers = dodger.style.left.replace("px", "");
//         const left = parseInt(leftNumbers, 10);

//         dodger.style.left = `${left - 1}px`;
//     }
// });

// **************************************************TEST 2**************************************************

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(left);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(left);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}


document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});


