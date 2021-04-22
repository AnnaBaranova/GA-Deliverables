const skills = [
    {id: 111111, skill: 'HTML', level: "medium"},
    {id: 222222, skill: 'CSS', level: "beginner"},
    {id: 333333, skill: 'JS', level: "in progress"}
  ];
  
  
  function getAll() {
    return skills;
  };

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  };

  function create (skill) {
    skill.id = Date.now()%1000000;
    skill.level = "in progress";
    skills.push(skill);
  };

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  };

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };