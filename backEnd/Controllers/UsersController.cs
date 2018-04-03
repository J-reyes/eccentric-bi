using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using eccentricBi.Models;

namespace eccentricBi
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        private EccentricContext _context;

        public UsersController(EccentricContext context)
        {
            _context = context;

            public User PatrickStarfish = new User(
                    firstName: "Patrick",
                    lastName: "Starfish",
                    username: "NoThisIsPatrick"
            );
        
        // public UsersController(EccentricContext context)
        // {
        //     _context = context;
        //     if (_context.User.Count() ==0)
        //     {
        //    }
        // }
        
        // GET: api/values
        [HttpGet]
        public List<User> Get()
        {
            return _context.User.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            var b = _context.User.FirstOrDefault(x => x.Id == id);
            return b;

        }

        // POST api/values
        [HttpPost]
        public User Post([FromBody]User newUser)
        {
            _context.User.Add(newUser);
            _context.SaveChanges();
            return newUser;
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

