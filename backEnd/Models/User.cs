using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace eccentricBi.Models
{
    public class User
    {
        public int Id { get; set; }
		public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role {get; set; }

        public ICollection<BusinessLead> BusinessLeads {get; set;}

        public User()
        {
        }
        
        public User(int iD, string firstName, string lastName, string email, string username, string password, string role)
        {
            Id = iD;
            FirstName = firstName;
            LastName = lastName;
            Username = username;
            Password = password;
            Role = role;
        }

    }
}
