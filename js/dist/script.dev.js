"use strict";

/* ============ SCRIPT ============ */

/* -------- SKILLS BARS ------- */
// html collection of classes "skill__bar--inside"
var classSkills = document.querySelectorAll('.skill__bar--inside');
var skills = new Array(); // array id of skills 

for (var i = 0; i < classSkills.length; i++) {
  skills.push(classSkills[i].id);
} // set width in skill bars


skills.forEach(function (language) {
  var skill = document.getElementById(language);
  skill.style.width = skill.childNodes[0].textContent;
});
/* -------- PROGRESS BAR -------- */
// progress bar in scrolling

window.onload = function () {
  // Ecouteur d'évènement sur scroll
  window.addEventListener("scroll", function () {
    // Calcul de la hauteur "utile" du document
    var hauteur = document.documentElement.scrollHeight - window.innerHeight; // Récupération de la position verticale

    var position = window.scrollY; // Récupération de la largeur de la fenêtre

    var largeur = window.innerHeight; // Calcul de la largeur de la barre

    var barre = position / hauteur * largeur; // Modification du CSS de la barre

    document.getElementById("progress").style.height = barre + "px";
  });
};