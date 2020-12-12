using AutoMapper;
//using FS.Abp.CodingManagement.CodeSetting.Models;
//using FS.Abp.CodingManagement.Coding;
using FS.Cms.Tags;
using FS.Cms.Posts;
using FS.Cms.Posts.Dtos;

namespace FS.Cms
{
    public class CmsApplicationAutoMapperProfile : Profile
    {
        public CmsApplicationAutoMapperProfile()
        {
            //CreateMap<Codes, TagDto>()
            //    .ForMember(x => x.Name, y => y.MapFrom(z => z.DisplayName));

            //CreateMap<TagGroupForCreateDto, CreateCodesModel>()              
            //    .ForMember(x=>x.No,y=>y.MapFrom(z=>z.TagGroupName))
            //    .ForMember(x => x.DisplayName, y => y.MapFrom(z => z.TagGroupName));

           
            //-------------

            //CreateMap<TagDto, TagForUpdateDto>();
            CreateMap<PostTagMap, PostTagMapDto>();
            CreateMap<PostDto, PostWithTagsDto>();
            
        }
    }
}