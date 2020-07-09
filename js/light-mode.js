/* ============ SCRIPT LIGHT MODE ============ */

var switchMode = document.querySelector(".switch-mode");
// download file by theme
var download = document.getElementById('download-button');

switchMode.addEventListener('click', () => {

    document.body.classList.toggle('light');
    localStorage.setItem('theme',
        document.body.classList.contains('light') ? 'light' : 'dark');

    // change file in downlaod button
    if (document.body.classList.contains('light')) {
        download.href = "Thanh-CV-light.pdf";
        download.download = "Thanh-CV-light";
    } else {
        download.href = "Thanh-CV-dark.pdf";
        download.download = "Thanh-CV-dark";
    }
});


if (localStorage.getItem('theme') === 'light') {
    // change page theme
    document.body.classList.add('light');
}