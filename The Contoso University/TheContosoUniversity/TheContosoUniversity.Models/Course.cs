using System;
using System.Collections.Generic;
using System.Text;

namespace TheContosoUniversity.Models
{
    public class Course
    {
        public int Id { get; set; }

        public int Credits { get; set; }

        public virtual ICollection<Enrollment> Enrollments { get; set; }

        public string Title { get; set; }

    }
}
