const wrapper = document.querySelector('.wrapper');
const wrapper2 = document.querySelector('.wrapper2');
const submit = document.querySelector('.submit');
const selection = document.querySelector('#selected');
const rating1 = document.querySelector('#rating1');
const rating2 = document.querySelector('#rating2');
const rating3 = document.querySelector('#rating3');
const rating4 = document.querySelector('#rating4');
const rating5 = document.querySelector('#rating5');

submit.addEventListener('click', () => {
wrapper2.classList.toggle('active');
});

rating1.addEventListener('click', () => {
    selection.innerText = 'You selected 1 out of 5!';
});

rating2.addEventListener('click', () => {
    selection.innerText = 'You selected 2 out of 5!';
});

rating3.addEventListener('click', () => {
    selection.innerText = 'You selected 3 out of 5!';
});

rating4.addEventListener('click', () => {
    selection.innerText = 'You selected 4 out of 5!';
});

rating5.addEventListener('click', () => {
    selection.innerText = 'You selected 5 out of 5!';
});




