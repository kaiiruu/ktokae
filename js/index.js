const title = document.querySelector('.title')
const text = 'virtual flowers for now' .split('') //insert text here
for (let index = 0; index < text.length; index++) {
    if (text[index] !== ' ') {
        title.innerHTML += `<span>${text[index]}<span/>`
    } else {
        title.innerHTML += `<span style='margin-right: 20px;'><span/>`
    }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
    const randomDelay = Math.random() * 2;
    element.style.animationDelay = `${randomDelay}s`;
});

