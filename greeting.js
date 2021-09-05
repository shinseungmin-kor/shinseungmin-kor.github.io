const form = document.querySelector("#form");
const input = form.querySelector("input");
const greeting = document.querySelector("h2");

const USER = "currentUser";
const SHOWING = "hidden";

const saveName = (text) => {
    localStorage.setItem(USER, text);
}

const handleSubmit = (event) => {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

const askForName = () => {
    form.addEventListener("submit", handleSubmit);
}


const paintGreeting = (text) => {
    form.classList.add(SHOWING);
    greeting.classList.remove(SHOWING);
    const date = new Date();
    const hours = date.getHours();
    let mention = 'Hello';
    if(0 <= hours && hours <= 4 || 20 < hours){
        mention = 'Good night';
    } else if (hours < 12){
        mention = 'Good morning';
    } else{
        mention = 'Good afternoon';
    }
    greeting.innerText = `${mention}, ${text}.`;
}

const loadName = () => {
    const currentUser = localStorage.getItem(USER);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

loadName();
