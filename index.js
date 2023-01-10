console.log("Hello");
const filePrefix = "film";
const filePostfix = ".jpeg"
const fileMidfix = "/";

let film_list = [
    "Come and See",
    "House",
    "Fantastic Planet",
    "Titanic",
    "Se7en",
    "Full Metal Jacket",
    "Pan's Labyrinth",
    "Mad Max: Fury Road",
    "Bird Box",
    "The Exorcist",
    "Spirited Away",
    "American Psycho",
    "Whiplash",
    "Big Hero 6",
    "Joker"
]

let guesses = 1;
let filmNum = Math.floor(Math.random() * 15 + 1);


document.getElementById("frame").src=(filePrefix + "" + filmNum + "" + fileMidfix + "1" + filePostfix);

function buttonFunctionality(button_name)
{
    document.getElementById("frame").src=(filePrefix + "" + filmNum + "" + fileMidfix + button_name + filePostfix);
}

function submitButton()
{
    guesses = guesses + 1;
    let guess = document.getElementById('textbox').value;
    if (guess == film_list[filmNum - 1])
    {
        gameEndW();
        exit();
    }
    if (guesses >= 7)
    {
            // add end game functionality
            gameEndL();
            exit();
    }

    document.getElementById('frame_select').innerHTML=(document.getElementById('frame_select').innerHTML + "\n<button onclick=\"buttonFunctionality(" + guesses + ");\">" + guesses + "</button>")
    document.getElementById("frame").src=(filePrefix + "" + filmNum + "" + fileMidfix + guesses + filePostfix);
    document.getElementById('textbox').value="";
    if (7 - guesses == 1)
        document.getElementById("guess-count").innerHTML=((7 - guesses) + " guess remains");
    else
        document.getElementById("guess-count").innerHTML=((7 - guesses) + " guesses remain");
}

function gameEndL() {
    document.getElementById("pregame").innerHTML=("");
    document.getElementById("endgame").innerHTML=(""
        + "\t<p id=\"endgame-m\">" + film_list[filmNum - 1] + "</p>\n"
        + "\t<div class=\"compbox\">\n"
        + "\t\t<span class=\"gb\" id=\"red\"></span>\n"
        + "\t\t<span class=\"gb\" id=\"red\"></span>\n"
        + "\t\t<span class=\"gb\" id=\"red\"></span>\n"
        + "\t\t<span class=\"gb\" id=\"red\"></span>\n"
        + "\t\t<span class=\"gb\" id=\"red\"></span>\n"
        + "\t\t<span class=\"gb\" id=\"red\"></span>\n"
        + "\t</div>\n"
        + "\t<div class=\"play-again\" onclick=\"window.location.reload(true);\">Play Again</div>\n"
        +  "\t<div class=\"save\"><a href=\"#\">Save Stats</a></div>\n"
    );
}

function gameEndW() {
    for (let i = guesses; i < 7; i++)
    {
        document.getElementById('frame_select').innerHTML=(document.getElementById('frame_select').innerHTML + "\n<button onclick=\"buttonFunctionality(" + i + ");\">" + i + "</button>")
    }
    document.getElementById("frame").src=(filePrefix + "" + filmNum + "" + fileMidfix + 6 + filePostfix);
    document.getElementById("pregame").innerHTML=("");

    let buttons = "";
    let j = 0;
    for (let i = guesses; i > 2; i--)
    {
        buttons += "\t\t<span class=\"gb\" id=\"red\"></span>\n";
        j++;
    }
    buttons += "\t\t<span class=\"gb\" id=\"green\"></span>\n";
    for ( ; j < 5; j++)
    {
        buttons += "\t\t<span class=\"gb\"></span>\n";
    }

    document.getElementById("endgame").innerHTML=(""
    + "\t<p id=\"endgame-m\">Got It!</p>\n"
    + "\t<div class=\"compbox\">\n"
    + buttons
    + "\t</div>\n"
    + "\t<div class=\"play-again\" onclick=\"window.location.reload(true);\">Play Again</div>\n"
    +  "\t<div class=\"save\"><a href=\"#\">Save Stats</a></div>\n");
    console.log(document.getElementById("endgame").innerHTML);
}