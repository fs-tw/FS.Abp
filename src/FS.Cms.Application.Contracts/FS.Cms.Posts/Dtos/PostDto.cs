using System.Linq;

namespace FS.Cms.Posts.Dtos
{
    public partial class PostWithDetailsDto
    {
        public string BlogDisplayName { get; set; }
        public PostImageDto CoverImage
        {
            get
            {
                var images = PostImages.ToList();
                if (images.Count == 0) return null;
                if (images.Where(x => x.IsCover == true).FirstOrDefault() != null)
                {
                    return images.Where(x => x.IsCover == true).First();
                }
                else
                {
                    return images.First();
                }
            }
        }
    }
}
