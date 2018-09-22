var right = 0;

// This hides the questions so they are not visible until the player starts the game
$("#questions").hide();
$("#resultsDiv").hide();

$("#start").on("click", function(){
  startup();      
});

// This shows the questions, hides the start button and starts the timer countdown
function startup() {
    $("#questions").toggle();
    $("#start").toggle();
    timer();
    var right = 0
};

// This resets everything to start over
function playagain () {
    $("#questions").toggle();
    $("#start").hide();
    $("#resultsDiv").toggle();
    stop();
    timer();

    // This resets the radio buttons when the game is re-started
    $('input[name="question1"]').prop('checked', false);
    $('input[name="question2"]').prop('checked', false);
    $('input[name="question3"]').prop('checked', false);
    $('input[name="question4"]').prop('checked', false);
    $('input[name="question5"]').prop('checked', false);
    $('input[name="question6"]').prop('checked', false);
    $('input[name="question7"]').prop('checked', false);
    $('input[name="question8"]').prop('checked', false);
}

// This re-starts the game by calling the playagain function
$("#again").on("click", function(){
    right = 0;
    playagain();    
});


// Clicking the "submit" button ends the game by calling endgame function
$("#submit").on("click", function(){
    endgame();
});

// The endgame function hides the questions and displays the results, and calculates the values from the radio buttons
function endgame () {    
$("#questions").hide();
$("#resultsDiv").toggle();

// This is checking the values submitted on the radio button answers. If the correct answer is selected, then the "right" variable is increased by one.
if ($("input[name='question1']:checked").val() === "Aubrey Graham") {
    right++
};

if ($("input[name='question2']:checked").val() === "Los Angeles") {
    right++
};

if ($("input[name='question3']:checked").val() === "Chicago") {
    right++
};

if ($("input[name='question4']:checked").val() === "Portia de Rossi") {
    right++
};

if ($("input[name='question5']:checked").val() === "1994") {
    right++
};

if ($("input[name='question6']:checked").val() === "Goldie Hawn") {
    right++
};

if ($("input[name='question7']:checked").val() === "Three") {
    right++
};

if ($("input[name='question8']:checked").val() === "UT Austin") {
    right++
};

$("#results").html("You answered " + right + " questions correctly (out of 8)!!");
console.log(right);
};

// this will be used to run the countdown timer
var intervalId
var timeLeft = 30;

function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement () {
    timeLeft--
    $("#timer").html("<h1> Time left: " + timeLeft + "</h1>");
    if (timeLeft === 0) {
        endgame();
        stop();
    }
};

function stop () {
    timeLeft = 30;
    clearInterval(intervalId);
};





// ===========THIS IS THE OLD CODE GRAVEYARD, BUT I'M KEEPING IT TO REFER BACK TO

// var data = {
//     zero: {
//         question: "Where does Texas rank in terms of populaton in the US?",
//         answers: ["First", "Second", "Third", "Fourth"],
//         correct: "First",
//     },

//     one: {
//         question: "What US state borders Texas to the west?",
//         answers: ["Arkansas", "Louisiana", "New Mexico", "Oklahoma"],
//         correct: "New Mexico",
//     }
// };

// these are the divs that will contain pieces of the game on the page
// var answer1 = $("<div class='row'><div class='col-6' id='answer1'>" + data.zero.answers[0]+ "</div></div>"); 
// var answer2 = $("<div class='row'><div class='col-6' id='answer2'>" + data.zero.answers[1]+ "</div></div>"); 
// var answer3 = $("<div class='row'><div class='col-6' id='answer3'>" + data.zero.answers[2]+ "</div></div>");
// var answer4 = $("<div class='row'><div class='col-6' id='answer4'>" + data.zero.answers[3]+ "</div></div>");  
// var timer = $("<div class='row'><div class='col-6' id='timer'>hello</div></div>");
// var question = $("<div class='row'><div class='col-6' id='question'>" + data.zero.question + "</div></div>");
// var choices = $("<div class='row'><div class='col-6' id='choices'>hello</div></div>");

// $("#start").on("click", function (){
//     startUp();
// });

// function startUp () {
//     $("#body").html(question);
//     $("#body").append(answer1);
//     $("#body").append(answer2);
//     $("#body").append(answer3);
//     $("#body").append(answer4);
// };

// if (data.zero.correct === )