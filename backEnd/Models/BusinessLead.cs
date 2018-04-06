using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eccentricBi.Models
{
    public class BusinessLead
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Description { get; set; } 
        public DateTime TimeOfContact { get; set; } 
        public bool IsComplete { get; set; }

        
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }

        public BusinessLead()
        {
        }

        public BusinessLead(int id, string name, string email, string phone, string description, DateTime timeofcontact, string owner, bool isComplete)
        {
            Id = id;
            Name = name;
            Email = email;
            Phone = phone;
            Description = description;
            TimeOfContact = timeofcontact;
            IsComplete = isComplete;
        }
    }
}
