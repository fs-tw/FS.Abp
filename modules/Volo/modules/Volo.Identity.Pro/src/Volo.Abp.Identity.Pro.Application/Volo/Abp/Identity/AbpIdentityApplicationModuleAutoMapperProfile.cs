using AutoMapper;
using System.Linq;
using Volo.Abp.AutoMapper;

namespace Volo.Abp.Identity
{
    public class AbpIdentityApplicationModuleAutoMapperProfile : Profile
    {
        public AbpIdentityApplicationModuleAutoMapperProfile()
        {
            CreateMap<IdentityUser, IdentityUserDto>()
                .MapExtraProperties()
                .Ignore(x => x.IsLockedOut)
                .Ignore(x => x.SupportTwoFactor);

            CreateMap<IdentityRole, IdentityRoleDto>()
                .MapExtraProperties();

            CreateMap<IdentityClaimType, ClaimTypeDto>()
                .MapExtraProperties()
                .Ignore(x => x.ValueTypeAsString);

            CreateMap<IdentityUserClaim, IdentityUserClaimDto>();

            CreateMap<IdentityUserClaimDto, IdentityUserClaim>()
                .Ignore(x => x.TenantId)
                .Ignore(x => x.Id);

            CreateMap<IdentityRoleClaim, IdentityRoleClaimDto>();

            CreateMap<IdentityRoleClaimDto, IdentityRoleClaim>()
                .Ignore(x => x.TenantId)
                .Ignore(x => x.Id);

            CreateMap<CreateClaimTypeDto, IdentityClaimType>()
                .MapExtraProperties()
                .Ignore(x => x.IsStatic)
                .Ignore(x => x.Id);

            CreateMap<UpdateClaimTypeDto, IdentityClaimType>()
                .MapExtraProperties()
                .Ignore(x => x.IsStatic)
                .Ignore(x => x.Id);

            CreateMap<IdentityUser, ProfileDto>()
                .ForMember(dest => dest.HasPassword,
                    op => op.MapFrom(src => src.PasswordHash != null))
                .MapExtraProperties();

            CreateMap<OrganizationUnit, OrganizationUnitDto>()
                .MapExtraProperties();

            CreateMap<OrganizationUnitRole, OrganizationUnitRoleDto>();

            CreateMap<OrganizationUnit, OrganizationUnitWithDetailsDto>()
                .MapExtraProperties()
                .Ignore(x => x.Roles);

            CreateMap<IdentityRole, OrganizationUnitRoleDto>()
                .ForMember(dest => dest.RoleId, src => src.MapFrom(r => r.Id));

            CreateMap<IdentitySecurityLog, IdentitySecurityLogDto>();
        }
    }
}
