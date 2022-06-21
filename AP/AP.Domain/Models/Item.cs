using System;

namespace AP.Domain.Models
{
    public class Item
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime FindingDate { get; set; }
        public string FindingPlace { get; set; }
        public DateTime OriginDate { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public string CatalogId { get; set; }

        public Catalog Catalog { get; set; }
    }
}