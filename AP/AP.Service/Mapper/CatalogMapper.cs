using AP.Core.Dtos;
using AP.Core.Mapper;
using AP.Domain.Models;
using System.Collections.Generic;

namespace AP.Service.Mapper
{
    public class CatalogMapper : ICatalogMapper
    {
        private IItemMapper _itemMapper;

        public CatalogMapper(IItemMapper itemMapper) => _itemMapper = itemMapper;
        public Catalog UpdateElement(CatalogNewDto newItem, Catalog entity)
        {
            entity.Id = newItem.Id;
            entity.Name = newItem.Name != null ? newItem.Name : entity.Name;
            entity.FatherId = newItem.FatherId != null ? newItem.FatherId : entity.FatherId;
            return entity;
        }

        public CatalogDetailsDto GetDetails(Catalog e)
        {
            List<CatalogSummaryDto> catalogs = new List<CatalogSummaryDto>();
            foreach (var catalog in e.InnerCatalogs)
            {
                catalogs.Add(GetSummary(catalog));
            }
            List<ItemSummaryDto> items = new List<ItemSummaryDto>();
            foreach (var item in e.Items)
            {
                items.Add(_itemMapper.GetSummary(item));
            }
            return new CatalogDetailsDto()
            {
                Id = e.Id,
                Name = e.Name,
                InnerCatalogs = catalogs,
                Father = e.Father == null ? new CatalogSummaryDto() { Id = "null", Name = "Root" } : GetSummary(e.Father),
                Items = items
            };
        }

        public CatalogSummaryDto GetSummary(Catalog e) => new CatalogSummaryDto()
        {
            Id = e.Id,
            Name = e.Name
        };

        public Catalog NewElement(CatalogNewDto dto) => new Catalog()
        {
            Id = dto.Id,
            Name = dto.Name,
            FatherId = dto.FatherId
        };
    }
}