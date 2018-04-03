using System;
namespace eccentricBi.Models
{
    public class BusinessLead
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }
        public string Description { get; set; } 
        public DateTime TimeOfContact { get; set; } 
        public string Owner { get; set; } 
        public bool IsComplete { get; set; }

        public BusinessLead()
        {
        }

        public BusinessLead(string name, string email, int phone, string description, int timeofcontact, string owner, bool iscompltet)
        {

        }
    }
}
