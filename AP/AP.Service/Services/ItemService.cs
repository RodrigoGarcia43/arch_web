using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AP.Core.Dtos;
using AP.Core.Services;
using AP.Persistence.Contexts;
using AP.Domain.Models;
using System.Collections;
using System.Collections.Generic;
using AP.Core.Mapper;
using System.Linq;

namespace AP.Service
{
    public class ItemService : IItemService
    {
        APContext _context;
        IItemMapper _mapper;

        public ItemService(APContext context, IItemMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<string> CreateAsync(ItemNewDto newItem)
        {
            var entity = _mapper.NewElement(newItem);
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();

            return entity.Id;
        }

        public async Task<bool> DeleteAsync(string id)
        {
            var result = await _context.Items.FindAsync(id);

            if (result == null) return false;

            _context.Remove(result);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<ICollection<ItemSummaryDto>> GetAll(string catalogId)
        {
            var list = await _context.Items.Where(i => i.CatalogId == catalogId)
                                           .AsNoTracking()
                                           .ToListAsync();
            return list.ConvertAll(i => _mapper.GetSummary(i));
        }

        public async Task<ItemDetailsDto> GetByIdAsync(string id)
        {
            var entity = await _context.Items.FindAsync(id);
            if (entity == null) return null;

            return _mapper.GetDetails(entity);
        }

        public async Task<string> UpdateByIdAsync(string id, ItemNewDto newItem)
        {
            var entity = await _context.Items.FindAsync(id);
            if (entity == null) return null;
            _context.Update(_mapper.UpdateElement(newItem, entity));
            await _context.SaveChangesAsync();

            return entity.Id;
        }
    }
}