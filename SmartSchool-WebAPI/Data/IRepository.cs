using System.Threading.Tasks;
using SmartSchool_WebAPI.Models;

namespace SmartSchool_WebAPI.Data
{
    public interface IRepository
    {

        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        //STUDENT
        Task<Student[]> GetAllStudentsAsync(bool includeTeacher);        
        Task<Student[]> GetStudentAsyncByDisciplineId(int disciplineId, bool includeDiscipline);
        Task<Student> GetStudentAsyncById(int studentId, bool includeTeacher);
        
        //TEACHER
        Task<Teacher[]> GetAllTeachersAsync(bool includeStudent);
        Task<Teacher> GetTeacherAsyncById(int teacherId, bool includeTeacher);
        Task<Teacher[]> GetTeachersAsyncByStudentId(int studentId, bool includeDiscipline);
         
    }
}