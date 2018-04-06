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
    public class EccentricContext : DbContext
    {

        public EccentricContext()
        {

        }

        public EccentricContext(DbContextOptions<EccentricContext> options) : base(options)
        {

        }

        public DbSet<BusinessLead> BusinessLead { get; set; }
        public DbSet<User> User { get; set; }

    }


}
