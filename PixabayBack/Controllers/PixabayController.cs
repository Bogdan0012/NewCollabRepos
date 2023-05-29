using Microsoft.AspNetCore.Mvc;
using PixabayBack.Helpers;
using System;
using ConfigurationManager = PixabayBack.Helpers.ConfigurationManager;

namespace PixabayBack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PixabayController : ControllerBase
    {

        [HttpGet]
        [Route("getImages")]
        public async Task<ActionResult<string>> GetJson([FromQuery(Name = "promt")] string promt)
        {
            HttpClient client = new HttpClient();

            string url = $"https://pixabay.com/api/?key={ConfigurationManager.AppSettings["PixabayApiKey"]}&q={promt}&image_type=photo&per_page=3";

            string response = await client.GetStringAsync(url);

            return response;
        }
    }
}
