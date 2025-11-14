//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
let currentSound = null;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const soundName = btn.getAttribute("data-sound");

        if (soundName === null) {
            stopSound();
            return;
        }

        playSound(soundName);
    });
});

function playSound(name) {
    stopSound(); // Stop previously running sound

    currentSound = new Audio(`sounds/${name}.mp3`);
    currentSound.play();
}

function stopSound() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
}
