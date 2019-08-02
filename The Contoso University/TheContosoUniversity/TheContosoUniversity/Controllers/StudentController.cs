using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContosoUniversity.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheContosoUniversity.Models;

namespace ContosoUniversity.Controllers
{
    [Route("api/[controller]")]
    public class StudentController : Controller
    {
        private readonly IHostingEnvironment env;
        private readonly ContosoUniversityContext context;
        public StudentController(IHostingEnvironment _env, ContosoUniversityContext _context)
        {
            env = _env;
            context = _context;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var students = await context.Students.ToListAsync();
            return Ok(students);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetId(int id)
        {
            if (id == null)
                return BadRequest();
            var student = await context.Students
                .Include(x => x.Enrollments)
                .Select(x => new {
                    Id = x.Id,
                    LastName = x.LastName,
                    FirstName = x.FirstName,
                    EnrollmentDate = x.EnrollmentDate,
                    Enrolments = x.Enrollments.Select(c => c.Course)
                })
                .FirstOrDefaultAsync(x => x.Id == id);
            return Ok(student);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Student model)
        {   
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            context.Students.Add(model);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Edit([FromBody]Student model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            context.Entry(model).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute]int id)
        {
            if (id == null)
                return BadRequest();
            var student = await context.Students.FirstOrDefaultAsync(x => x.Id == id);
            if (student == null)
                return NotFound();
            context.Students.Remove(student);
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}