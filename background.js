const body = document.querySelector("body");

const IMG_NUMBER = 6 ;

const getRandom = () => {
    return Math.ceil(Math.random() * IMG_NUMBER);
}

const getImg = (num) => { 
    const img = new Image();
    img.src = `images/${num}.jpeg`;
    img.classList.add("bgImg");
    body.prepend(img);
}

const init_3 = () => {
    const paintImg = getRandom();
    getImg(paintImg);
}

init_3();