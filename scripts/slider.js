const sliderLeft = document.querySelector(".slider-left");
const sliderRight = document.querySelector(".slider-right");

sliderLeft.addEventListener("click", () => {
    setBg("left");
})

sliderRight.addEventListener("click", () => {
    setBg("right");
})

const picsAmount = 20;
let randomNum;

function setBg(direction) {
    
    switch(direction) {
        case "initial":
            randomNum = Math.round(Math.random()  * (picsAmount - 1) + 1);
            break;

        case "right":
            randomNum++;
            if (randomNum === 21) {
                randomNum = 1;
            }
            break;

        case "left":
            randomNum--;
            if (randomNum === 0) {
                randomNum = 20;
            }
            break;
    }

    let bgNum = randomNum.toString().padStart(2, "0");
    let gitPic = `https://github.com/LenaYork/rsschool-momentum-pics/blob/assets/images/${timeOfDay}/${bgNum}.jpg?raw=true`;
    const img = new Image();
    img.src = gitPic;
    img.onload = () => {      
        document.body.style.backgroundImage = `url(${gitPic})`;
        document.body.style.transition = '1s';
    }
}

setBg("initial");