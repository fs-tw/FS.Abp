using AutoMapper;
using FS.CmsKit.Pages;
using FS.CmsKitManagement.Blogs.Dtos;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement
{
    public class CmsKitManagementApplicationAutoMapperProfile : Profile
    {
        public CmsKitManagementApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */

            CreateMap<Blog, BlogDto>();
            CreateMap<BlogPost, BlogPostDto>();
            CreateMap<BlogPostDto, BlogPost>();

            CreateMap<PageTranslation, Volo.CmsKit.Public.Pages.PageDto>();
        }
    }
}