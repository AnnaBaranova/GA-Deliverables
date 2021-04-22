const skills = [
    {id: 111111, skill: 'HTML', new: false},
    {id: 222222, skill: 'CSS', new: false},
    {id: 333333, skill: 'JS', new: true}
  ];
  
  
  function getAll() {
    return skills;
  };

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  };

  function create (skill) {
    skill.id = Date.now()%1000000;
    skill.new = true;
    skills.push(skill);
  };

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  };

  function editSkill (id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills[idx].skill = skill.skill;
  }
  

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    editSkill,
  };