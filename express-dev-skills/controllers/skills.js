const Skill = require("../models/skill");


function allSkills (req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      todo: Skill.getOne(req.params.id)
    });
  }

  module.exports = {
      index: allSkills,
      show,
  }
  