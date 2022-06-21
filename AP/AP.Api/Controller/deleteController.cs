using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AP.Core.Dtos;
using AP.Core.Services;
using System;
using AP.Persistence.Contexts;
using AP.Domain.Models;
using System.Collections.Generic;

namespace AP.Api.Controllers
{
    [Route("/populate")]
    [ApiController]
    public class PopulateController : ControllerBase
    {
        APContext _context;
        public PopulateController(APContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<bool>> Populate()
        {
                foreach (var item in this.Entitys())
                {
                    await _context.AddAsync(item);
                }
                await _context.SaveChangesAsync();
       

            return true;
        }

        private ICollection<object> Entitys() =>  new List<object>()
            {
                Catalog("null1",null),
                Catalog("null2",null),
                Catalog("null3",null),
                Catalog("a2","2"),
                Catalog("a3","3"),
                Catalog("b2","2"),
                Catalog("a5","5"),
                Item("ia2",new DateTime(1,1,1),"habana",new DateTime(1,1,1),"prueba","2"),
                Item("ib2",new DateTime(1,1,1),"habana",new DateTime(1,1,1),"prueba","2"),
                Item("ia3",new DateTime(1,1,1),"habana",new DateTime(1,1,1),"prueba","3"),
                Item("ib3",new DateTime(1,1,1),"habana",new DateTime(1,1,1),"prueba","3"),
                Item("ia5",new DateTime(1,1,1),"habana",new DateTime(1,1,1),"prueba","5"),
                Item("ib5",new DateTime(1,1,1),"habana",new DateTime(1,1,1),"prueba","5")
            };
    
        private Catalog Catalog(string names, string idfather) => new Catalog(){Name = names, FatherId = idfather};
        private Item Item(string names, DateTime findingDate,string findingPlace,DateTime originDate,string description,string catalogId) => new Item()
        {
            Name = names,
            FindingDate = findingDate,
            FindingPlace = findingPlace,
            OriginDate = originDate,
            Description = description,
            CatalogId = catalogId
        };


    }
}
