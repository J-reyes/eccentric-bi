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

            public User PatrickStarfish = new User(
                    firstName: "Patrick",
                    lastName: "Starfish",
                    username: "NoThisIsPatrick"
            );

        // if (_context.Users.Count() == 0)
        // {
        //     _context.Users.Add(PatrickStarfish);
        // }
        }


    // GET: api/users
        [HttpGet]
        public List<User> Get()
        {
            return _context.Users.ToList();
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            var u = _context.Users.FirstOrDefault(x => x.Id == id);
            return u;
        }

        // POST api/users
        [HttpPost]
        public User Post([FromBody]User newUser)
        {
            _context.Users.Add(newUser);
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
            var u = _context.Users.FirstOrDefault(x => x.Id == id);
            _context.Users.Remove(u);
            _context.SaveChanges();
        }
    }
}

