const iframe = document.getElementById("chatbotIframe");
const mainDiv = document.getElementById("message-btn");
const open = document.getElementById("open");
const close = document.getElementById("close");
const start = document.getElementById("start");

// ფუნქცია რომ ავირიდოთ კოდის დუბლიკაცია
function change(){
    if (iframe.style.display === "block") {
        iframe.style.display = "none";
        open.style.display = "block";
        close.style.display = "none";
        start.innerText = "ჩატის დაწყება";
    } else {
        iframe.style.display = "block";
        open.style.display = "none";
        close.style.display = "block";
        start.innerText = "ჩატის გამორთვა";
    }
}

mainDiv.addEventListener("click", change);
start.addEventListener("click", change);