function skillsMember() {
  var skills = ['html', 'css', 'javascript', 'react', 'nodejs'];
  var member = {
    name: 'Diana',
    age: 23,
    skills: skills
  };
  // Write code here
  var newSkills = member.skills;
  newSkills.push('firebase');
  console.log(newSkills);
  // Don’t change the code below
  return member;
}