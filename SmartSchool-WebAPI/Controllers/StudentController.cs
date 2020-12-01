using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebAPI.Data;

namespace SmartSchool_WebAPI.Controllers
{
        
    [ApiController]
    [Route("api/[controller]")]

    public class StudentController : ControllerBase
    {

private readonly IRepository _repo;
        public StudentController(IRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> get(){
            try
            {
                var result = await _repo.GetAllStudentsAsync(true);
                return Ok(result);
                
            }
            catch (Exception ex)
            {
                
                return BadRequest($"Error:{ ex.Message}");
            }
        }

        [HttpGet("Student/{StudentId}")]
        public async Task<IActionResult> getStudentId(int studentId){
            try
            {
                var result = await _repo.GetStudentAsyncById(studentId, true);
                return Ok(result);
                
            }
            catch (Exception ex)
            {
                
                return BadRequest($"Error:{ ex.Message}");
            }
        }


        [HttpGet("Discipline/{DisciplineId}")]
        public async Task<IActionResult> GetByDisciplineId(int disciplineId){
            try
            {
                var result = await _repo.GetStudentAsyncByDisciplineId(disciplineId, true);
                return Ok(result);
                
            }
            catch (Exception ex)
            {
                
                return BadRequest($"Error:{ ex.Message}");
            }
        }
    }
}