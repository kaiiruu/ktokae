onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('I know you like tulips :)').split('') //insert text here
        const titleElement = document.getElementById('title');
        let index = 0;

        function appendTitle() {
            if (index < titles.length) {
                titleElement.innerHTML += titles[index];
                index++;
                setTimeout(appendTitle, 150);
            }
        }

        appendTitle();

        clearTimeout(c);
    }, 1000);

    // ── Falling letters (k, a, e) ────────────────────────────────────
    (function spawnFallingLetters() {
        const container = document.getElementById('fallingLetters');
        if (!container) return;

        const letters = ['k', 'a', 'e'];
        // Fewer letters on small screens so it doesn't feel cluttered.
        const count = window.innerWidth < 600 ? 20 : 35;

        for (let i = 0; i < count; i++) {
            const el = document.createElement('span');
            el.className = 'falling-letter';
            el.textContent = letters[Math.floor(Math.random() * letters.length)];

            const left = Math.random() * 100;                  // vw
            const sizeScale = 0.7 + Math.random() * 1;          // multiplies the CSS clamp() size
            const duration = 8 + Math.random() * 10;            // seconds
            const delay = Math.random() * 8;                    // stagger start over 8s
            const drift = (Math.random() * 8 - 4).toFixed(2);   // -4vw to 4vw sideways sway

            el.style.left = `${left}vw`;
            el.style.setProperty('--size-scale', sizeScale.toFixed(2));
            el.style.animationDuration = `${duration}s`;
            el.style.animationDelay = `${delay}s`;
            el.style.setProperty('--drift', `${drift}vw`);

            container.appendChild(el);
        }
    })();
};