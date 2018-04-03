using System;
using System.Collections.Generic;


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
        public bool IsAdmin {get; set; }

        public List<BusinessLead> LeadsOwned { get; set; }

        public User()
        {
        }

        // public User(int id, string firstName, string lastName, string email, string username, string password)
        // {
        //     Id = id;
        //     FirstName = firstName;
        //     LastName = lastName;
        //     Email = email;
        //     Username = username;
        //     Password = password;
        // }

        public User (string firstName, string lastName, string username)
        {
        }
        
        public User(string firstName, string lastName, string email, string username, string password, bool isAdmin)
        {
            
            FirstName = firstName;
            LastName = lastName;
            Username = username;
            Password = password;
            IsAdmin = isAdmin;
        }

    }
}
