using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "IsAdmin")]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        public GenresController(ILogger<GenresController> logger, ApplicationDbContext context, IMapper mapper)
        {

            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] // api/genres
        [AllowAnonymous]
        public async Task<ActionResult<List<GenreDTO>>> Get()
        {

            logger.LogInformation("Getting all the genres");
            var genres = await context.Genres.OrderBy(genre => genre.Name).ToListAsync();

            return mapper.Map<List<GenreDTO>>(genres);


        }

        [HttpGet("{Id:int}")] // api/genres/example with default value
        public async Task<ActionResult<GenreDTO>> Get(int Id)
        {

            var genre = await context.Genres.FirstOrDefaultAsync(genre => genre.Id == Id);

            if (genre == null)
            {
                return NotFound();
            }

            return mapper.Map<GenreDTO>(genre);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO)
        {
            var genre = mapper.Map<Genre>(genreCreationDTO);
            context.Add(genre);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{Id:int}")]
        public async Task<ActionResult> Put(int Id, [FromBody] GenreCreationDTO genreCreationDTO)
        {

            var genre = mapper.Map<Genre>(genreCreationDTO);
            genre.Id = Id;
            context.Entry(genre).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();

        }

        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var genre = await context.Genres.FirstOrDefaultAsync(genre => genre.Id == Id);

            if (genre == null)
            {
                return NotFound();
            }

            context.Remove(genre);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
