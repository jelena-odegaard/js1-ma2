//question 1

const myFunctionExpression = function(){
    console.log("Jelena");
}

myFunctionExpression()

//question 2

const button = document.querySelector(".btn");

function respondToClick() {
  console.log ("I was clicked");
};

button.addEventListener("click", respondToClick);

//question 3

const textInput = document.querySelector("#firstName");

function callWhenKeyIsPressed(event){
    console.dir (event.key);
    console.log ("A key is pressed");
};

textInput.addEventListener("keydown", callWhenKeyIsPressed);

//question 4

const button = document.querySelector("button");

function respondToHover(event){
    event.target.classList.add("hover");
}

button.addEventListener ("mouseover", respondToHover);

//questin 5

const button = document.querySelector("[data-animal ='dog']");

function respondToHover(event) {
    event.target.classList.remove("hover");
}

button.addEventListener("mouseout", callWhenMouseMovesOffTheElement);

//question 6

const animalsList = document.querySelectorAll("li");

for(let i = 0; i < animalsList.length; i++) {
    animalsList[i].addEventListener("mouseover", list);
}

function respondToHover(event) {
    console.log(event.target);
}


//question 7

const animal = "cow";

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}

//question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach (function(sheep){
    console.log (sheep);
});

//question 9

function logWord() {
    console.log ("Hello"());

if(counter === 5) {
    clearInterval(intervalId);
}

counter++;
}

let counter = 0;

const intervalId = setInterval(logWord, 500);

//question 10

const placeholderText = document.querrySelector("div.container");

function textUpdate(){
    placeholderText.innerText = "Text updated";
}

setTimeout(textUpdate, 2000);
