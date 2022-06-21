using AP.Core.Dtos;
using AP.Core.Mapper;
using AP.Domain.Models;

namespace AP.Service.Mapper
{
    public class ItemMapper : IItemMapper
    {
        public ItemDetailsDto GetDetails(Item e) => new ItemDetailsDto()
        {
            Id = e.Id,
            Name = e.Name,
            FindingDateY = e.FindingDate.Year,
            FindingDateM = e.FindingDate.Month,
            FindingDateD = e.FindingDate.Day,
            FindingPlace = e.FindingPlace,
            OriginDateY = e.OriginDate.Year,
            OriginDateM = e.OriginDate.Month,
            OriginDateD = e.OriginDate.Day,
            Description = e.Description,
            CatalogId = e.CatalogId,
            Image = e.Image,
        };

        public ItemSummaryDto GetSummary(Item e) => new ItemSummaryDto()
        {
            Id = e.Id,
            Name = e.Name,
        };

        public Item NewElement(ItemNewDto dto) => new Item()
        {
            Name = dto.Name,
            FindingDate = new System.DateTime(dto.FindingDateY, dto.FindingDateM, dto.FindingDateD),
            FindingPlace = dto.FindingPlace,
            OriginDate = new System.DateTime(dto.OriginDateY, dto.OriginDateM, dto.OriginDateD),
            Description = dto.Description,
            CatalogId = dto.CatalogId,
            Image = dto.Image,
            Id = dto.Id,
        };

        public Item UpdateElement(ItemNewDto newItem, Item entity)
        {
            entity.Name = newItem.Name != null ? newItem.Name : entity.Name;
            entity.FindingDate = newItem.FindingDateD != 0 ? new System.DateTime(newItem.FindingDateY, newItem.FindingDateM, newItem.FindingDateD) : entity.FindingDate;
            entity.FindingPlace = newItem.FindingPlace != null ? newItem.FindingPlace : entity.FindingPlace;
            entity.OriginDate = newItem.OriginDateD != 0 ? new System.DateTime(newItem.OriginDateY, newItem.OriginDateM, newItem.OriginDateD) : entity.FindingDate;
            entity.Description = newItem.Description != null ? newItem.Description : entity.Description;
            entity.CatalogId = newItem.CatalogId != null ? newItem.CatalogId : entity.CatalogId;
            entity.Image = newItem.Image != null ? newItem.Image : entity.Image;
            return entity;
        }
    }
}