using Volo.Abp.Application.Dtos;

namespace FS.CmsKitManagement.EntityBlogs.Dtos
{
    public partial class EntityBlogGetListDto : PagedAndSortedResultRequestDto
    {
        public string EntityType { get; set; }
        public string EntityId { get; set; }
    }

}
