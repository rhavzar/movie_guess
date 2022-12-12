console.log("Hello");
const filePrefix = "film";
const filePostfix = ".jpeg"
const fileMidfix = "/";


let filmNum = Math.floor(Math.random() * 15 + 1);
document.getElementById("header").innerHTML=(filmNum);
document.getElementById("frame").src=(filePrefix + "" + filmNum + "" + fileMidfix + "1" + filePostfix);

function buttonFunctionality(button_name)
{
    document.getElementById("frame").src=(filePrefix + "" + filmNum + "" + fileMidfix + button_name + filePostfix);
}