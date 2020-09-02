using AutoMapper;
using FS.Cms.Posts.Dtos;

namespace FS.Cms
{
    public class CmsApplicationAutoMapperProfile : Profile
    {
        public CmsApplicationAutoMapperProfile()
        {

            CreateMap<Posts.Post, PostWithDetailsNoContentDto>();
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */
        }
    }
}