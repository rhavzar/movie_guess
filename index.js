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



document.getElementById("header").innerHTML=(film_list[filmNum - 1]);
document.getElementById("frame").src=(filePrefix + "" + filmNum + "" + fileMidfix + "1" + filePostfix);

function buttonFunctionality(button_name)
{
    document.getElementById("frame").src=(filePrefix + "" + filmNum + "" + fileMidfix + button_name + filePostfix);
}

function submitButton()
{
    guesses = guesses + 1;
    if (guesses >= 7)
        {
            // add end game functionality
            document.getElementById("guess-count").innerHTML=("Popup Needed");
            exit();
        }
    let guess = document.getElementById('textbox').value;
    if (guess == film_list[filmNum - 1])
    {
        document.getElementById("guess-count").innerHTML=("Popup Needed");
        exit();
    }

    document.getElementById('frame_select').innerHTML=(document.getElementById('frame_select').innerHTML + "\n<button onclick=\"buttonFunctionality(" + guesses + ");\">" + guesses + "</button>")
    document.getElementById("frame").src=(filePrefix + "" + filmNum + "" + fileMidfix + guesses + filePostfix);
    document.getElementById('textbox').value="";
    document.getElementById("guess-count").innerHTML=((7 - guesses) + " guesses remain");
}