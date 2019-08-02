using Microsoft.EntityFrameworkCore;
using System;
using TheContosoUniversity.Models;

namespace ContosoUniversity.Infrastructure
{
    public class ContosoUniversityContext : DbContext
    {
        public ContosoUniversityContext(DbContextOptions<ContosoUniversityContext> options):base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Course> Courses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // использование Fluent API
            
            base.OnModelCreating(modelBuilder);
        }
    }
}
