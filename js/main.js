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
};