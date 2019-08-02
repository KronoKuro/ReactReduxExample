using System;
using System.Collections.Generic;
using System.Text;

namespace TheContosoUniversity.Models
{
    public class Enrollment
    {
        public int Id { get; set; }

        public decimal? Grade { get; set; }

        public int StudentId { get; set; }
        public virtual Student Student { get; set; }

        public int CourseId { get; set; }

        public virtual Course Course { get; set;}
        
    }
}
