const clock = document.querySelector('.clock');
const mainClock = clock.querySelector('h1');

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    mainClock.innerText = `${hours<10?`0${hours}`:hours}:${minutes<10? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const init = () => {
    getTime();
    setInterval(getTime, 1000);
};

init();