const students = [
    {id: 1, name: "Steve B.", course:"SEI"},
    {id: 2, name: "Anna C.", course:"SEI"},
    {id: 3, name: "Nik D.", course:"SEI"},
  ];
  
  module.exports = {
    getAll: function() {
      return students;
    }
  };