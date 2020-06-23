/* ============ SCRIPT LIGHT MODE ============ */

var switchMode = document.querySelector(".switch-mode");

// light mode
var lightMode = document.getElementsByClassName("light");

switchMode.addEventListener('click', () => {

    var style = document.documentElement.style;

    if (lightMode.length == 0) {
        switchMode.classList.add('light');
        style.setProperty('--background-color', '#dddddd');
        style.setProperty('--primary-color', '#f5f5f5');
        style.setProperty('--accent-color', '#FF5711');
        style.setProperty('--attenuate-color', '#E52F6F');
        style.setProperty('--calendar-color', '#00a8ee');
        style.setProperty('--color-border', '#dadada');
        style.setProperty('--text-color', '#121212');
        style.setProperty('--shadow-color', '#b4b4b4');
    }
    else {
        switchMode.classList.remove('light');
        style.setProperty('--background-color', '');
        style.setProperty('--primary-color', '');
        style.setProperty('--accent-color', '');
        style.setProperty('--attenuate-color', '');
        style.setProperty('--calendar-color', '');
        style.setProperty('--color-border', '');
        style.setProperty('--text-color', '');
        style.setProperty('--shadow-color', '');       
    }
    
});