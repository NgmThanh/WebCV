/* ============ SCRIPT ============ */

/* -------- SKILLS BARS ------- */

// html collection of classes "skill__bar--inside"
var classSkills = document.querySelectorAll('.skill__bar--inside');
var skills = new Array();

// array id of skills 
for (var i = 0; i < classSkills.length; i++) {
    skills.push(classSkills[i].id);
}

// set width in skill bars
skills.forEach(language => {
    var skill = document.getElementById(language);
    skill.style.width = skill.childNodes[0].textContent;
});

/* -------- PROGRESS BAR -------- */

// progress bar in scrolling
window.onload = () => {
    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () => {
        // Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight
        // Récupération de la position verticale
        let position = window.scrollY
        // Récupération de la largeur de la fenêtre
        let largeur = window.innerHeight
        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur
        // Modification du CSS de la barre
        document.getElementById("progress").style.height = barre+"px"
    });
};