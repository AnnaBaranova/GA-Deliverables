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
  }

  module.exports = {
    getAll,
    getOne,
  };