using AutoMapper;
using Volo.Abp.LanguageManagement.Dto;

namespace Volo.Abp.LanguageManagement.Blazor
{
    public class LanguageManagementBlazorAutoMapperProfile : Profile
    {
        public LanguageManagementBlazorAutoMapperProfile() 
        {
            CreateMap<LanguageDto, UpdateLanguageDto>()
                .MapExtraProperties();
        }
    }
}