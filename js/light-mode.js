/* ============ SCRIPT LIGHT MODE ============ */

var switchMode = document.querySelector(".switch-mode");

switchMode.addEventListener('click', () => {

    document.body.classList.toggle('light');
    localStorage.setItem('theme',
        document.body.classList.contains('light') ? 'light' : 'dark');

});

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
}