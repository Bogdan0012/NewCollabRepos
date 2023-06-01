using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PixabayBack.Helpers;
using PixabayBack.Models;
using System;
using System.Text.Json.Serialization;
using ConfigurationManager = PixabayBack.Helpers.ConfigurationManager;

namespace PixabayBack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PixabayController : ControllerBase
    {

        private readonly PixabayHelper _pixabayHelper;
        public PixabayController(PixabayHelper helper) 
        { 
            _pixabayHelper = helper;
        }

        [HttpGet]
        [Route("getImages")]
        public async Task<ActionResult<PixabayResponce>> GetImages([FromQuery(Name = "promt")] string promt)
        {
            try
            {
                PixabayResponce responce = await _pixabayHelper.GetImagesByPromt(promt);
                return Ok(responce);
            }
            catch (Exception)
            {
                return NotFound();
            }
            
        }

        [HttpGet]
        [Route("getImageByNamePageAndPerPage")]
        public async Task<ActionResult<PixabayResponce>> GetImagesByPromtPageAndPerPage(string promt, int page, int perPage)
        {
            try
            {
                PixabayResponce responce = await _pixabayHelper.GetImagesByPromtPageAndPerPage(promt, page, perPage);
                return Ok(responce);
            }
            catch (Exception)
            {
                return NotFound();
            }

        }

        [HttpGet]
        [Route("getImageByUser")]
        public async Task<ActionResult<PixabayResponce>> GetImageByUser(string userName)
        {
            try
            {
                PixabayResponce responce = await _pixabayHelper.GetImagesByUser(userName);
                return Ok(responce.Hits);
            }
            catch (Exception)
            {
                return NotFound();
            }

        }
    }
}
    