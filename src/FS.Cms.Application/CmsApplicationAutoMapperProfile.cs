using AutoMapper;
using FS.Abp.CodingManagement.CodeSetting.Models;
using FS.Abp.CodingManagement.Coding;
using FS.Cms.Definitions;
using FS.Cms.Posts;
using FS.Cms.Posts.Dtos;

namespace FS.Cms
{
    public class CmsApplicationAutoMapperProfile : Profile
    {
        public CmsApplicationAutoMapperProfile()
        {

            CreateMap<TagForCreateDto, CreateCodesModel>()
                .ForMember(x => x.Children, y => y.MapFrom(z => z.Tags))
                .ForMember(x=>x.No,y=>y.MapFrom(z=>z.DisplayName));

            CreateMap<TagForUpdateDto, Codes>()
                .ForMember(x => x.No, y => y.MapFrom(z => z.DisplayName))
                .ForMember(x => x.Id, y => y.Ignore());

            CreateMap<Codes, TagDto>()
            .ForMember(x => x.Tags, y => y.MapFrom(z => z.Children));

            CreateMap<TagDto, TagForUpdateDto>();
            CreateMap<PostTagMap, PostTagMapDto>();
            CreateMap<PostDto, PostWithTagsDto>();
            
        }
    }
}