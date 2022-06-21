using System.Threading.Tasks;
using AP.Core.Dtos;
using System.Collections.Generic;

namespace AP.Core.Services
{
    public interface IItemService
    {
        Task<ItemDetailsDto> GetByIdAsync(string id);
        Task<string> CreateAsync(ItemNewDto newItem);
        Task<bool> DeleteAsync(string id);
        Task<ICollection<ItemSummaryDto>> GetAll(string catalogId);
        Task<string> UpdateByIdAsync(string id, ItemNewDto newItem);
    }
}