
var data = {
    zero: {
        question: "Where does Texas rank in terms of populaton in the US?",
        answers: ["First", "Second", "Third", "Fourth"],
        correct: "First",
    },

    one: {
        question: "What US state borders Texas to the west?",
        answers: ["Arkansas", "Louisiana", "New Mexico", "Oklahoma"],
        correct: "New Mexico",
    }
};

$("#go").on("click", test());


// these are the divs that will contain pieces of the game on the page
var answer = $("<div class='row'><div class='col-6' id='answer'>hello</div></div>"); 
var timer = $("<div class='row'><div class='col-6' id='timer'>hello</div></div>");
var question = $("<div class='row'><div class='col-6' id='question'>hello</div></div>");
var choices = $("<div class='row'><div class='col-6' id='choices'>hello</div></div>");

function test(){
    console.log("hello world");
};

