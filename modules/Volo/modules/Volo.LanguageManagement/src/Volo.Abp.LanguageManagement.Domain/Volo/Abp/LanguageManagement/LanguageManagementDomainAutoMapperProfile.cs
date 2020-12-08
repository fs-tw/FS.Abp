using AutoMapper;
using Volo.Abp.Localization;

namespace Volo.Abp.LanguageManagement
{
    public class LanguageManagementDomainAutoMapperProfile : Profile
    {
        public LanguageManagementDomainAutoMapperProfile()
        {
            CreateMap<Language, LanguageInfo>();
            CreateMap<Language, LanguageEto>();
            CreateMap<LanguageText, LanguageTextEto>();
        }
    }
}
