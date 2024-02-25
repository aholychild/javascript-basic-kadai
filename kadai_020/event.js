const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
});

