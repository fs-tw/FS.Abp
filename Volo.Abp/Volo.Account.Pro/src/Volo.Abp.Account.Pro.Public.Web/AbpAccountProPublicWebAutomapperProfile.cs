using AutoMapper;
using Volo.Abp.Account.Public.Web.Pages.Account.Components.ProfileManagementGroup.PersonalInfo;
using Volo.Abp.Identity;

namespace Volo.Abp.Account.Public.Web
{
    public class AbpAccountProPublicWebAutomapperProfile : Profile
    {
        public AbpAccountProPublicWebAutomapperProfile()
        {
            CreateMap<ProfileDto, AccountProfilePersonalInfoManagementGroupViewComponent.PersonalInfoModel>();
        }
    }
}
