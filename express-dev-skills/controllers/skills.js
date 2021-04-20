const Skill = require("../models/skill");


function allSkills (req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      skillNum: Skill.getAll().findIndex(skill=> skill.id === parseInt(req.params.id)) + 1
    });
  }

  module.exports = {
      index: allSkills,
      show,
  }
