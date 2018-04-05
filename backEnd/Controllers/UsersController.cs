using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using eccentricBi.Models;

namespace eccentricBi.Controllers
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        private EccentricContext _context;

        public UsersController(EccentricContext context)
        {
            _context = context;
        }

        // GET: api/users
        [HttpGet]
        public List<User> Get()
        {
            return _context.User.ToList();
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            var b = _context.User.FirstOrDefault(x => x.Id == id);
            return b;

        }

        // GET api/users/find/<username>
        [HttpGet("find/{username}")]
        public User GetByUsername(string username)
        {
            var b = _context.User.FirstOrDefault(x => x.Username == username);
            return b;
        }

        // POST api/users/login
        [HttpPost("login")]
        public LoginResponse Login([FromBody] User user)
        {
            var lookUp = _context.User.FirstOrDefault(x => x.Username == user.Username);
            if (lookUp != null)
            {
                if (lookUp.Password == user.Password)
                {
                    Console.WriteLine("Successful Password Entry");
                    return new LoginResponse(true, lookUp.Role);
                }
                Console.WriteLine("Username Exists But Wrong Password");
                return new LoginResponse(false, null);
            }
            Console.WriteLine("Username Not Found");
            return new LoginResponse(false, null);
        }

        // POST api/users
        [HttpPost]
        public User Post([FromBody]User newUser)
        {
            _context.User.Add(newUser);
            _context.SaveChanges();
            return newUser;
        }



        // PUT api/users/5
        [HttpPut("{id}")]
        public User Put(int id, [FromBody]User newUser)
        {
            _context.Entry(newUser).State = EntityState.Modified;
            _context.SaveChanges();
            return newUser;
        }

        // PUT api/users/find/
        [HttpPut("find/{username}")]
        public User PutNewUser(string username, [FromBody]User newUser)
        {
            var oldUser = _context.User.FirstOrDefault(x => x.Username == username);
            if (oldUser != null)
            {
                oldUser.FirstName = newUser.FirstName;
                oldUser.LastName = newUser.LastName;
                oldUser.Email = newUser.Email;
                oldUser.Username = newUser.Username;
                oldUser.Role = newUser.Role;

                Console.WriteLine("USER PUT SUCCESS");
            }
            
            _context.SaveChanges();
            return newUser;
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var b = _context.User.FirstOrDefault(x => x.Id == id);
            _context.User.Remove(b);
            _context.SaveChanges();
        }

         // DELETE api/users/5
        [HttpDelete("find/{username}")]
        public void DeleteByUsername(string username)
        {
            var b = _context.User.FirstOrDefault(x => x.Username == username);
            _context.User.Remove(b);
            Console.WriteLine("USER DELETE SUCCESS");
            _context.SaveChanges();
        }
    }
}

