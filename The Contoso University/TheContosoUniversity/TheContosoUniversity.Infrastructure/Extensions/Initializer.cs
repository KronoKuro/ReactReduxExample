using ContosoUniversity.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TheContosoUniversity.Models;

namespace TheContosoUniversity.Infrastructure.Extensions
{
    public static class Initializer
    {
        public static void Seed(ContosoUniversityContext context)
        {
            if (!context.Students.Any())
            {
                var students = new List<Student>
            {
                new Student { FirstName = "Carson",   LastName = "Alexander", EnrollmentDate = DateTime.Parse("2005-09-01") },
                new Student { FirstName = "Meredith", LastName = "Alonso",    EnrollmentDate = DateTime.Parse("2002-09-01") },
                new Student { FirstName = "Arturo",   LastName = "Anand",     EnrollmentDate = DateTime.Parse("2003-09-01") },
                new Student { FirstName = "Gytis",    LastName = "Barzdukas", EnrollmentDate = DateTime.Parse("2002-09-01") },
                new Student { FirstName = "Yan",      LastName = "Li",        EnrollmentDate = DateTime.Parse("2002-09-01") },
                new Student { FirstName = "Peggy",    LastName = "Justice",   EnrollmentDate = DateTime.Parse("2001-09-01") },
                new Student { FirstName = "Laura",    LastName = "Norman",    EnrollmentDate = DateTime.Parse("2003-09-01") },
                new Student { FirstName = "Nino",     LastName = "Olivetto",  EnrollmentDate = DateTime.Parse("2005-09-01") }
            };
                students.ForEach(s => context.Students.Add(s));
                context.SaveChanges();
            }

            if (!context.Courses.Any())
            {
                var courses = new List<Course>
            {
                new Course { Title = "Chemistry",      Credits = 3, },
                new Course { Title = "Microeconomics", Credits = 3, },
                new Course { Title = "Macroeconomics", Credits = 3, },
                new Course { Title = "Calculus",       Credits = 4, },
                new Course { Title = "Trigonometry",   Credits = 4, },
                new Course { Title = "Composition",    Credits = 3, },
                new Course { Title = "Literature",     Credits = 4, }
            };
                courses.ForEach(s => context.Courses.Add(s));
                context.SaveChanges();
            }


            if (!context.Enrollments.Any())
            {
                var enrollments = new List<Enrollment>
            {
                new Enrollment { Id = 1, CourseId = 1, Grade = 1 },
                new Enrollment { Id = 1, CourseId = 2, Grade = 3 },
                new Enrollment { Id = 1, CourseId = 3, Grade = 1 },
                new Enrollment { Id = 2, CourseId = 4, Grade = 2 },
                new Enrollment { Id = 2, CourseId = 5, Grade = 4 },
                new Enrollment { Id = 2, CourseId = 6, Grade = 4 },
                new Enrollment { Id = 3, CourseId = 1            },
                new Enrollment { Id = 4, CourseId = 1,           },
                new Enrollment { Id = 4, CourseId = 2, Grade = 4 },
                new Enrollment { Id = 5, CourseId = 3, Grade = 3 },
                new Enrollment { Id = 6, CourseId = 4            },
                new Enrollment { Id = 7, CourseId = 5, Grade = 2 },
            };
                enrollments.ForEach(s => context.Enrollments.Add(s));
                context.SaveChanges();
            }
        }
    }
}