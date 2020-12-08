using AutoMapper;

namespace Volo.Abp.LeptonTheme.Management.Blazor
{
    public class LeptonThemeManagementBlazorAutoMapperProfile : Profile
    {
        public LeptonThemeManagementBlazorAutoMapperProfile()
        {
            CreateMap<LeptonThemeSettingsDto, UpdateLeptonThemeSettingsDto>();
        }
    }
}