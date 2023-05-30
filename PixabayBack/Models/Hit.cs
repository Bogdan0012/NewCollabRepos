namespace PixabayBack.Models
{
    public class Hit
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string PreviewURL { get; set; }
        public string WebformatURL { get; set; }
        public int Views { get; set; }
        public int Downloads { get; set; }
        public int Likes { get; set; }
        public string User { get; set; }
    }
}
