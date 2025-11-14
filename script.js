const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const sound = btn.getAttribute('data-sound');
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
    });
});
