function displayPosition(cName, jobTitle, jDescription) {
    console.log(jobTitle + " at " + cName + " to " + jDescription)
}

function displaySkill() {
    for (i = 0; i < skills.length; i++) {
        if (skills[i].isCool) {
            console.log("BAM: " + skills[i].skill)
        } else {
            console.log(skills[i].skill)
        }
    }
}
var sk = 'My Skills:'
var skills = [
    { skill: 'Marketing', isCool: true },
    { skill: 'Photography', isCool: true },
    { skill: 'Email', isCool: false },
    { skill: 'Facebook Ads', isCool: false }
];

displaySkill()