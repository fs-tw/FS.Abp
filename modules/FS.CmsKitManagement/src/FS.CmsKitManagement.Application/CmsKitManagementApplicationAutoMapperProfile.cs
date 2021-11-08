using AutoMapper;
using FS.CmsKitManagement.Blogs.Dtos;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.Pages;

namespace FS.CmsKitManagement
{
    public class CmsKitManagementApplicationAutoMapperProfile : Profile
    {
        public CmsKitManagementApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */
            CreateMap<PageTranslation, Volo.CmsKit.Public.Pages.PageDto>();
            CreateMap<BlogPostTranslation, Volo.CmsKit.Public.Blogs.BlogPostPublicDto>();
        }
    }
}