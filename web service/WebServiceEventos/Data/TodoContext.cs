using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebServiceEventos.Data
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base (options)
        {
            
        }
        // todos es el nombre de la tabla de la base de datos

        public DbSet<Todo> Todos { get; set; }

    }
}
