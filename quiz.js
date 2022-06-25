const correctAnswer = ['D', 'C', 'B', 'A', 'D'];
const form = document.querySelector('form');
const result = document.querySelector('.popup-cont');
const close = document.querySelector('.close');

form.addEventListener('submit', e => {
    e.preventDefault();

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]

    let score = 0;
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 20;
        }
    });
    
    result.style.display = 'block';

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer)
        } else {
            output++;
        }
    }, 10);
});

close.addEventListener('click', () => {
    result.style.display = 'none';
});
