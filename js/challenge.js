document.addEventListener ("DOMContentLoaded", ()=> {
    const counter = document.getElementById('counter');
    let count = parseInt(counter.innerText);
    const incrementCounter = () => counter.innerText = ++count;
    let intervalID = setInterval(incrementCounter, 1000);

    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', () => counter.innerText = ++count);
    minusButton.addEventListener('click', () => counter.innerText = --count);

    const likes = {};
    const likesList = document.querySelector('.likes');
    document.getElementById('heart').addEventListener('click', () => {
    likes[count] = (likes[count] || 0) + 1;
    const message = `${count} has been liked ${likes[count]} time(s).`;
    
    let li = document.querySelector(`[data-number="${count}"]`);
    if (!li) {
        li = document.createElement('li');
        li.setAttribute('data-number', count);
        likesList.appendChild(li);
    }
    li.innerText = message;
});

    
    const pauseButton = document.getElementById('pause');
    const button = document.querySelectorAll('button');
    const togglePause = () => {
        if (pauseButton.innerText === "pause") {
            clearInterval(intervalID);
            buttons.forEach(btn => {
                if (btn.id !== 'pause') btn.disabled = true;
            });
            pauseButton.innerText = "resume";
        } else {
            intervalID = setInterval(incrementCounter, 1000);
            buttons.forEach(btn => btn.disabled = false);
            pauseButton.innerText = "pause";
        }
    };
    pauseButton.addEventListener('click', togglePause);

    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');

    commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newComment = document.createElement('p');
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentForm.reset();
});




})