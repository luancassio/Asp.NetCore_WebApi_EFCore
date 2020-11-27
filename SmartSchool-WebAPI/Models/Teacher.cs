using System.Collections.Generic;

namespace SmartSchool_WebAPI.Models
{
    public class Teacher
    {
        public Teacher() { }
        public Teacher(int id, string name, string surname)
        {
            this.Id = id;
            this.Name = name;
            this.Surname = surname;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

        public IEnumerable<Discipline> Disciplines { get; set; }
    }

}