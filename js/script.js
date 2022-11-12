let btnRock = document.querySelector("#rockbtn");
let btnPaper = document.querySelector("#paperbtn");
let btnScissors = document.querySelector("#scissorsbtn");
let image1 = document.getElementById("symbol1");
let image2 = document.getElementById("symbol2");
let answer1 = "0";
let answer2 = "0";
tscore1 = 0;
tscore2 = 0;
rscore1 = 0;
rscore2 = 0;

btnRock.addEventListener("click", rockChoice);
btnPaper.addEventListener("click", paperChoice);
btnScissors.addEventListener("click", scissorsChoice);

function rockChoice() {

    let answer1 = "Rock";
    let answer2 = Math.ceil(Math.random()*3);

    if (answer2 == "1") {

        image1.src = "../images/therock.jpg";
        image2.src = "../images/rock.png";

        document.querySelector("#resultdisplay").innerHTML = answer1 + " vs Rock" + " - It's a draw!";
    }

    else if (answer2 == "2") {

        image1.src = "../images/therock.jpg";
        image2.src = "../images/paper.png";

        document.querySelector("#resultdisplay").innerHTML = answer1 + " vs Paper" + " - Computer wins!";

        rscore2 = rscore2 + 1;
        document.querySelector("#score2").innerHTML = rscore2;
    }

    else if (answer2 == "3") {

        image1.src = "../images/therock.jpg";
        image2.src = "../images/scissors.png";

        document.querySelector("#resultdisplay").innerHTML = answer1 + " vs Scissors" + " - you win!";

        rscore1 = rscore1 + 1;
        document.querySelector("#score1").innerHTML = rscore1;
    }

    let newValue1 = rscore1.value;
    rscore1.default = newValue1;

    let newValue2 = rscore2.value;
    rscore2.default = newValue2;

}

function paperChoice() {

    let answer1 = "Paper";
    let answer2 = Math.ceil(Math.random()*3);

    if (answer2 == "1") {

        image1.src = "../images/paper.png";
        image2.src = "../images/rock.png";

        document.querySelector("#resultdisplay").innerHTML = answer1 + " vs Rock" + " - you win!";

        rscore1 = rscore1 + 1;
        document.querySelector("#score1").innerHTML = rscore1;
    }

    else if (answer2 == "2") {

        image1.src = "../images/paper.png";
        image2.src = "../images/paper.png";

        document.querySelector("#resultdisplay").innerHTML = answer1 + " vs Paper" + " - It's a draw!";
    }

    else if (answer2 == "3") {

        image1.src = "../images/paper.png";
        image2.src = "../images/scissors.png";

        document.querySelector("#resultdisplay").innerHTML = answer1 + " vs Scissors" + " - Computer wins!";

        rscore2 = rscore2 + 1;
        document.querySelector("#score2").innerHTML = rscore2;
    }

    let newValue1 = rscore1.value;
    rscore1.default = newValue1;

    let newValue2 = rscore2.value;
    rscore2.default = newValue2;

}

function scissorsChoice() {

    let answer1 = "Scissors";
    let answer2 = Math.ceil(Math.random()*3);

    if (answer2 == "1") {

        image1.src = "../images/scissors.png";
        image2.src = "../images/rock.png";

        document.querySelector("#resultdisplay").innerHTML = answer1 + " vs Rock" + " - Computer wins!";

        rscore2 = rscore2 + 1;
        document.querySelector("#score2").innerHTML = rscore2;
    }

    else if (answer2 == "2") {

        image1.src = "../images/scissors.png";
        image2.src = "../images/paper.png";

        document.querySelector("#resultdisplay").innerHTML = answer1 + " vs Paper" + " - you win!";

        rscore1 = rscore1 + 1;
        document.querySelector("#score1").innerHTML = rscore1;
    }

    else if (answer2 == "3") {

        image1.src = "../images/scissors.png";
        image2.src = "../images/scissors.png";

        document.querySelector("#resultdisplay").innerHTML = answer1 + " vs Scissors" + " - It's a draw!";
    }

    let newValue1 = rscore1.value;
    rscore1.default = newValue1;

    let newValue2 = rscore2.value;
    rscore2.default = newValue2;

}