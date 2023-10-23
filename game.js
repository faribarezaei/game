document.addEventListener("DOMContentLoaded", () => {
    generateStars(100);
});

function generateStars(numberOfStars) {
    const sky = document.getElementById("sky");

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random position
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        // Random size
        const size = Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        sky.appendChild(star);
    }
}
function applyWindEffect() {
    const stars = document.querySelectorAll('.star');
    const moon = document.getElementById('moon');

    // Apply wind effect to stars
    stars.forEach(star => {
        const x = (Math.random() - 0.5) * 10; // Random shift in the range of -5 to 5
        const y = (Math.random() - 0.5) * 10; // Random shift in the range of -5 to 5
        star.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Apply wind effect to the moon (a bit subtler than stars)
    const moonX = (Math.random() - 0.5) * 5;
    const moonY = (Math.random() - 0.5) * 5;
    moon.style.transform = `translate(${moonX}px, ${moonY}px)`;
}

// Intermittent wind effect
setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance to activate wind effect every 5 seconds
        applyWindEffect();
    }
}, 5000);
function triggerShootingStar() {
    const shootingStarElement = document.getElementById('shootingStar');
    shootingStarElement.style.animation = 'none'; // Reset the animation
    setTimeout(() => {
        shootingStarElement.style.animation = 'shootingStarEffect 2s linear';
    }, 50); // Slight delay to ensure the animation restarts
}

// Intermittent shooting star effect
setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance to activate shooting star effect every 10 seconds
        triggerShootingStar();
    }
}, 10000);

function checkWord() {
    const word = [
        document.getElementById('letter1').value,
        document.getElementById('letter2').value,
        document.getElementById('letter3').value,
        document.getElementById('letter4').value,
        document.getElementById('letter5').value,
        document.getElementById('letter6').value,
    ].join('');

    if (word.toUpperCase() === 'NEWTON') {
        document.getElementById('message').textContent = "THAT'S CORRECT!";
    } else {
        document.getElementById('message').textContent = "TRY AGAIN!";
    }
}