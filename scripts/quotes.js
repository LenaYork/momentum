const textArea = document.querySelector("#quote-text");
const authorArea = document.querySelector("#quote-author");
const refreshButton = document.querySelector(".reload-quote-icon");

getRandomQuote();

refreshButton.addEventListener("click", () => getRandomQuote())

function getRandomQuote() {
    fetch("https://type.fit/api/quotes")
        .then(resp => resp.json())
        .then(arr =>  {
            let randomItem = Math.ceil(Math.random() * arr.length-1 ); 
            textArea.innerHTML = `"${arr[randomItem].text}"`;
            authorArea.innerHTML = (arr[randomItem].author === "type.fit") 
                ? "unknown" 
                : arr[randomItem].author.replace(", type.fit", "");
        })
}