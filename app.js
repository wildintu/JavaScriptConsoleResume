var n = 'Name: '
var name = 'Lexi';
var c = 'Career: ';
var career = 'Coding / Marketing';
var am = 'About Me: '
var aboutMe = 'I am obsessed with my dog and sunsets'
var int = 'My Interests:'
var interests = ['coffee', 'tech', 'tigers', 'fitness'];
var mpe = 'My Previous Experience:'
var pastPositions = [
    {company: 'Ultaca', location: 'Pelham, AL', title: 'Marketing Manager', description: 'Assist with all marketing needs'},
    {company: 'Vestavia CC', location: 'Vestavia, AL', title: 'Merchandise Manager', description: 'Assist with merchandise needs'},
    {company: 'Southern Shirt', location: 'Tuscaloosa, AL', title: 'Marketing Manager', description: 'Assist with marketing needs'}
];
var sk = 'My Skills:'
var skills = ['BAM: Marketing', 'BAM: Photography', 'Email', 'Facebook Ads'];

console.log(n + name.toUpperCase() + "\n" + c + career + "\n" + am + aboutMe + "\n\n");
console.log(int);
for (i = 0; i < interests.length; i++) {
    console.log('* ' + interests[i]);
}
console.log("\n" + mpe);
for(x = 0; x < pastPositions.length; x++) {
    console.log('* ' + pastPositions[x].company + " in " + pastPositions[x].location + " as " + pastPositions[x].title + " to " + pastPositions[x].description);
}
console.log("\n" + sk);
for(y = 0; y < skills.length; y++) {
    console.log('* ' + skills[y]);
}