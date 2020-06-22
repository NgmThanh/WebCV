/* ============ SCRIPT SKILLS ============ */

// html collection of classes "skill__bar--inside, .language__bar--inside"
var classSkills = document.querySelectorAll('.skill__bar--inside, .language__bar--inside');
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