const students = [
    {name: "Steve B.", course:"SEI"},
    {name: "Anna C.", course:"SEI"},
    {name: "Nik D.", course:"SEI"},
  ];
  
  module.exports = {
    getAll: function() {
      return students;
    }
  };