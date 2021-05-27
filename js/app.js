const hr = document.querySelector('hr');
const lists = [...document.querySelectorAll('#menuItem li')]
hr.setAttribute('style', `left:${lists[0].offsetLeft + (lists[0].offsetWidth) / 3}px`);
let currentIndex = 0;

const changeStyle = function (e) {
    if (e.target === lists[currentIndex])
        return;
    hr.setAttribute('style', `left:${e.target.offsetLeft + (e.target.offsetWidth) / 3}px`);
    lists[currentIndex].classList.remove('active');
    currentIndex = lists.findIndex((list) => list === e.target);
    lists[currentIndex].classList.add('active');
    menuSpan.innerText = e.target.innerText;
    if (window.innerWidth < 1100) {
        menuLS.style.height = "0";
        action = !action;
    }
}

for (let element of lists) {
    element.addEventListener('click', changeStyle);
}