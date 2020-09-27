using System.Linq;

namespace FS.Cms.Posts.Dtos
{

    public partial class PostWithDetailsDto : PostDto
    {
        public string BlogDisplayName { get; set; }
        //public FS.Cms.Core.Dtos.CmsImageFieldDto CoverImage => Images.Where(x => x.IsCover == true).FirstOrDefault();
        public FS.Cms.Core.Dtos.CmsImageFieldDto CoverImage
        {
            get {
                if (Images.Count == 0) return null;
                if (Images.Where(x => x.IsCover == true).FirstOrDefault() != null)
                {
                    return Images.Where(x => x.IsCover == true).First();
                }
                else {
                    return Images.First();
                }
                

            } 
        }
    }
}
