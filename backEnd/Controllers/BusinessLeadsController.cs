using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using eccentricBi.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eccentricBi.Controllers
{
    [Route("api/leads")]
    public class LeadsController : Controller
    {
        private EccentricContext _context;

        public LeadsController(EccentricContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public List<BusinessLead> Get()
        {
            return _context.BusinessLead.Include(u => u.User).ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public BusinessLead Get(int id)
        {
            var b = _context.BusinessLead.Include(u => u.User).FirstOrDefault(x => x.Id == id);
            return b;

        }

        // POST api/values
        [HttpPost]
        public BusinessLead Post([FromBody]BusinessLead newLead)
        {
            _context.BusinessLead.Add(newLead);
            _context.SaveChanges();
            return newLead;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public BusinessLead Put(int id, [FromBody]BusinessLead newLead)
        {
            _context.Entry(newLead).State = EntityState.Modified;
            _context.SaveChanges();
            return newLead;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var b = _context.BusinessLead.FirstOrDefault(x => x.Id == id);
            _context.BusinessLead.Remove(b);
            _context.SaveChanges();
        }
    }
}



