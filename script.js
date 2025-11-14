const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsSection = document.getElementById("buttons");

// Create one audio element per sound
sounds.forEach(sound => {
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.id = sound;
    document.body.appendChild(audio);

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => playSound(sound));

    buttonsSection.appendChild(btn);
});

// STOP BUTTON
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopSound);
buttonsSection.appendChild(stopBtn);

function playSound(sound) {
    stopSound();
    document.getElementById(sound).play();
}

function stopSound() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}

