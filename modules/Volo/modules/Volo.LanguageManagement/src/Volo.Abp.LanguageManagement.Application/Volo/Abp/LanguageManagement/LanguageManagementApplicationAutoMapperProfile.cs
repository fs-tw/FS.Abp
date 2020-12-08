using AutoMapper;
using Volo.Abp.AutoMapper;
using Volo.Abp.LanguageManagement.Dto;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageManagementApplicationAutoMapperProfile : Profile
    {
        public LanguageManagementApplicationAutoMapperProfile()
        {
            CreateMap<Language, LanguageDto>()
                .MapExtraProperties()
                .Ignore(x => x.IsDefaultLanguage);
        }
    }
}