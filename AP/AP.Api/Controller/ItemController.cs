using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AP.Core.Dtos;
using AP.Core.Services;
using System.Collections.Generic;
using System.Collections;
using System.Runtime;
using System;

namespace AP.Api.Controller
{
    [Route("/item")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private IItemService _service;
        private IUserAuthenticationService _authentication;
        public ItemController(IItemService service, IUserAuthenticationService a)
        {
            _service = service;
            _authentication = a;
        }

        [HttpGet]
        public async Task<ActionResult<ICollection<ItemSummaryDto>>> GetAll([FromQuery] string catalogId)
        {
            var result = await _service.GetAll(catalogId);

            if (result == null) return NotFound();

            return Ok(result);
        }

        [ActionName("GetByIdAsync")]
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemDetailsDto>> GetByIdAsync(string id)
        {
            var result = await _service.GetByIdAsync(id);

            if (result == null) return NotFound();

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<ItemDetailsDto>> CreateAsync([FromBody] ItemNewDto newItem)
        {

            var result = await _service.CreateAsync(newItem);

            if (result == null) return NotFound();

            return CreatedAtAction(nameof(GetByIdAsync), new { id = result }, result); ;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(string id)
        {

            var result = await _service.DeleteAsync(id);

            if (!result) return NotFound();

            return NoContent();

        }
        [HttpPut("{id}")]
        public async Task<ActionResult<ItemDetailsDto>> UpdateByIdAsync(string id, [FromBody] ItemNewDto newItem)
        {

            var result = await _service.UpdateByIdAsync(id, newItem);

            if (result == null) return NotFound();

            return CreatedAtAction(nameof(GetByIdAsync), new { id = result }, result); ;

        }
    }
}