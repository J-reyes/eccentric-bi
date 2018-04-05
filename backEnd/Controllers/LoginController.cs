using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using eccentricBi.Models;

namespace eccentricBi.Controllers
{
    [Route("api/logins")]
    public class LoginController : Controller
    {
        private EccentricContext _context;

        public LoginController(EccentricContext context)
        {
            _context = context;
        }

        // GET: api/values
        // [HttpGet]
        // public List<User> Get()
        // {
        //     return _context.User.ToList();
        // }

        // // GET api/values/5
        // [HttpGet("{id}")]
        // public User Get(int id)
        // {
        //     var b = _context.User.FirstOrDefault(x => x.Id == id);
        //     return b;

        // }

        // POST api/values
        [HttpPost]
        public bool Post([FromBody]User user)
        {
            var u = _context.User.FirstOrDefault(x => x.Username == user.Username);
            var pw = u.Password;
            bool pwValid;
            if ( user.Password == pw)
            {
                pwValid = true;
                Console.WriteLine("returned TRUE");
            }
            else
            {
                pwValid = false;
                Console.WriteLine("returned FALSE");
            }

            return pwValid;

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public User Put(int id, [FromBody]User newUser)
        {
            _context.Entry(newUser).State = EntityState.Modified;
            _context.SaveChanges();
            return newUser;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var b = _context.User.FirstOrDefault(x => x.Id == id);
            _context.User.Remove(b);
            _context.SaveChanges();
        }
    }
}

