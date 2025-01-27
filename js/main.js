const iframe = document.getElementById("chatbotIframe");
const open = document.getElementById("open");
const close = document.getElementById("close");
const start = document.getElementById("start");
const fixColor1 = document.getElementById("message-btn");
const fixColor2 = document.getElementById("start");

open.addEventListener("click", () => {
    iframe.style.display = "block";
    open.style.display = "none";
    close.style.display = "block";
    fixColor1.classList.add("red");
    fixColor2.classList.add("red");
    start.innerText = "ჩატის გამორთვა";
});

start.addEventListener("click", () => {
    if (iframe.style.display === "block") {
        iframe.style.display = "none";
        open.style.display = "block";
        close.style.display = "none";
        fixColor1.classList.remove("red");
        fixColor2.classList.remove("red");
        start.innerText = "ჩატის დაწყება";
    } else {
        iframe.style.display = "block";
        open.style.display = "none";
        close.style.display = "block";
        fixColor1.classList.add("red");
        fixColor2.classList.add("red");
        start.innerText = "ჩატის გამორთვა";
    }
});

close.addEventListener("click", ()=>{
    iframe.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
    fixColor1.classList.remove("red");
    fixColor2.classList.remove("red");
    start.innerText = "ჩატის დაწყება";
})