using AutoMapper;
using Volo.Abp.AutoMapper;

namespace Volo.Abp.Identity.Pro.Blazor
{
    public class AbpIdentityProBlazorAutoMapperProfile : Profile
    {
        public AbpIdentityProBlazorAutoMapperProfile()
        {
            CreateMap<IdentityUserDto, IdentityUserUpdateDto>()
                .MapExtraProperties()
                .Ignore(x => x.OrganizationUnitIds)
                .Ignore(x => x.RoleNames);

            CreateMap<IdentityRoleDto, IdentityRoleUpdateDto>()
                .MapExtraProperties();

            CreateMap<ClaimTypeDto, UpdateClaimTypeDto>()
                .MapExtraProperties();
        }
    }
}
