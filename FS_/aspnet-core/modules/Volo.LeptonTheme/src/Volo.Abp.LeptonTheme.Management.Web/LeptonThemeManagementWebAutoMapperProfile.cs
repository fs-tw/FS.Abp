using AutoMapper;
using Volo.Abp.LeptonTheme.Management.Areas.LeptonThemeManagement.Models;

namespace Volo.Abp.LeptonTheme.Management
{
    public class LeptonThemeManagementWebAutoMapperProfile : Profile
    {
        public LeptonThemeManagementWebAutoMapperProfile()
        {
            CreateMap<LeptonThemeSettingsDto, LeptonThemeSettingsViewModel>();
        }
    }
}