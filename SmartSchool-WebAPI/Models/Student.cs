using System.Collections.Generic;

namespace SmartSchool_WebAPI.Models
{
    public class Student
    {
        public Student() { }
        public Student(int id, string name, string surname, string telephone)
        {
            this.Id = id;
            this.Nome = name;
            this.Sobrenome = surname;
            this.Telefone = telephone;
        }
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Telefone { get; set; }
        public IEnumerable<StudentDiscipline> StudentsDisciplines { get; set; }
    }
}