using System;


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

        public User()
        {
        }

        public User(string firstName, string lastName, string email, string username, string password)
        {
            
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Username = username;
            Password = password;
            IsAdmin = isAdmin;
        }

    }
}
