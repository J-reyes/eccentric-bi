using System;
using System.Collections.Generic;


namespace eccentricBi.Models
{
    public class LoginResponse
    {
        public bool Success;
        public string Role;


        public LoginResponse()
        {
        }
        
        public LoginResponse(bool success, string role)
        {
            Success = success;
            Role = role;
        }

    }
}
