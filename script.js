
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");
const heartsContainer = document.getElementById("hearts");

// Reveal the surprise message
surpriseBtn.addEventListener("click", () => {
    surpriseMessage.classList.toggle("hidden");

    if (!surpriseMessage.classList.contains("hidden")) {
        surpriseBtn.innerText = "I love you so much 💗";
        createHearts(25);
    } else {
        surpriseBtn.innerText = "Open your little surprise 💝";
    }
});

// Create floating hearts
function createHearts(count = 1) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const heartSymbols = ["💗", "💖", "💕", "💘", "❤️", "✨"];
        heart.innerText = heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}

// Hearts continuously floating
setInterval(() => {
    createHearts();
}, 700);
