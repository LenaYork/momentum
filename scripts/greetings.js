const timeTag = document.querySelector(".time");
const dateTag = document.querySelector(".date");
const welcomeTag = document.querySelector(".welcome-text");
const userNameInput = document.querySelector(".userName-input");
let timeOfDay;

showCurrentTime();

function showCurrentTime() {
    let now = new Date();
    timeTag.innerHTML = now.toLocaleTimeString();

    function showGreetings() {
        let greeting;
        let hours = now.getHours();
        if  (hours > 6 && hours < 12) {
            greeting = "Good morning";
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 18) { 
                greeting = "Good afternoon";
                timeOfDay = "afternoon";
            } else if (hours >= 18 && hours <= 23) {
                    greeting = "Good evening";
                    timeOfDay = "evening";
                } else {
                    greeting = "Good night";
                    timeOfDay = "night";
                    } 
            welcomeTag.innerHTML = greeting;
    }

    showGreetings();
}

setInterval(showCurrentTime, 1000);

let today = new Date();
const dayNamesEng = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNamesEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dayName;
let monthName;
let dateNumber = today.getDate(); 

function getFullDate() {
    dayName = dayNamesEng[today.getDay()];
    monthName = monthNamesEng[today.getMonth()];
    dateTag.innerHTML = `${dayName}, ${monthName} ${dateNumber}`;
}

getFullDate();
let userName = localStorage.getItem("userName") ?? "";
userNameInput.value = userName;

userNameInput.addEventListener("input", () => {
    userName = userNameInput.value;
    localStorage.setItem("userName", userName);
})
