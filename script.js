const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button"),
    authorName = document.querySelector(".author .name"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");


function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;

        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
    // console.log("clicked")
}

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}` );
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
})

quoteBtn.addEventListener("click", randomQuote);

// arr 1 2 3 2 4 9 11 1 7