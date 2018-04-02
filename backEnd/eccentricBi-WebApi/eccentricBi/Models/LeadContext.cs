using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace eccentricBi.Models
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class LeadContext : DbContext
    {
        public LeadContext()
        {
            
        }

        public LeadContext(DbContextOptions<LeadContext> options) : base(options)
        {
            
        }

        public DbSet<BusinessLead> BusinessLeads { get; set; }


    }


}
