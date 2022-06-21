using System;

namespace AP.Core.Dtos
{
    public class ItemDetailsDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int FindingDateY { get; set; }
        public int FindingDateM { get; set; }
        public int FindingDateD { get; set; }
        public string FindingPlace { get; set; }
        public int OriginDateY { get; set; }
        public int OriginDateM { get; set; }
        public int OriginDateD { get; set; }
        public string Description { get; set; }

        public string Image { get; set; }

        public string CatalogId { get; set; }
    }
}