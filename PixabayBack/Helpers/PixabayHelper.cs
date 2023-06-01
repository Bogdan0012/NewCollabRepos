using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using PixabayBack.Models;

namespace PixabayBack.Helpers
{
    public class PixabayHelper
    {
        private readonly HttpClient _httpClient;
        private readonly string _key;
        private readonly string _urlHead;
        private readonly string _promtType;
        private readonly string _perPage;
        public PixabayHelper()
        {
            _httpClient = new HttpClient();
            _urlHead = "https://pixabay.com/api/";
            _key = ConfigurationManager.AppSettings["PixabayApiKey"];
            _promtType = "photo";
            _perPage = "5";
        }

        /// <summary>
        /// </summary>
        /// <param name="promt">Keyword for getting data</param>
        /// <exception cref="NullReferenceException">Responce from API is null or empty</exception>
        /// <exception cref="NullReferenceException">Method cannot convert string to PixabayResponce</exception>
        public async Task<PixabayResponce> GetImagesByPromt(string promt)
        {
            string url = $"{_urlHead}?key={_key}&q={promt}&image_type={_promtType}&per_page={_perPage}";

            string response = await _httpClient.GetStringAsync(url);
            if (string.IsNullOrEmpty(response))
                throw new NullReferenceException("Content from api is null or empty");

            PixabayResponce obj = JsonConvert.DeserializeObject<PixabayResponce>(response);

            return obj ?? throw new NullReferenceException($"Cannot deserialize string to type {typeof(PixabayResponce)}");
        }

        public async Task<PixabayResponce> GetImagesByNamePageAndPerPage(string promt, int page, int perPage)
        {
            string url = $"{_urlHead}?key={_key}&q={promt}&image_type={_promtType}&per_page={perPage}&page={page}";

            string response = await _httpClient.GetStringAsync(url);
            if (string.IsNullOrEmpty(response))
                throw new NullReferenceException("Content from api is null or empty");

            PixabayResponce obj = JsonConvert.DeserializeObject<PixabayResponce>(response);

            return obj ?? throw new NullReferenceException($"Cannot deserialize string to type {typeof(PixabayResponce)}");
        }
    }
}
