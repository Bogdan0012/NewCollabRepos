namespace PixabayBack.Models
{
    public class PixabayResponce
    {
        public int Total { get; set; }
        public int TotalHits { get; set; }
        public List<Hit> Hits { get; set; } = new ();
    }
}
