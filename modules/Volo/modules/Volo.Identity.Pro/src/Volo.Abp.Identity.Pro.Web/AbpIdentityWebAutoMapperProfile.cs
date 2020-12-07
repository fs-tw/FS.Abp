using AutoMapper;
using Volo.Abp.AutoMapper;
using Volo.Abp.Identity.Web.Pages.Identity.Users;
using UserClaimTypeEditModalModel = Volo.Abp.Identity.Web.Pages.Identity.Users.ClaimTypeEditModalModel;
using RoleClaimTypeEditModalModel = Volo.Abp.Identity.Web.Pages.Identity.Roles.ClaimTypeEditModalModel;
using CreateUserModalModel = Volo.Abp.Identity.Web.Pages.Identity.Users.CreateModalModel;
using EditUserModalModel = Volo.Abp.Identity.Web.Pages.Identity.Users.EditModalModel;
using EditClaimTypeModalModel = Volo.Abp.Identity.Web.Pages.Identity.ClaimTypes.EditModalModel;
using CreateClaimTypeModalModel = Volo.Abp.Identity.Web.Pages.Identity.ClaimTypes.CreateModalModel;
using EditModalModel = Volo.Abp.Identity.Web.Pages.Identity.Roles.EditModalModel;
using CreateOrganizationUnitModalModel = Volo.Abp.Identity.Web.Pages.Identity.OrganizationUnits.CreateModalModel;
using EditOrganizationUnitModalModel = Volo.Abp.Identity.Web.Pages.Identity.OrganizationUnits.EditModalModel;
using CreateRoleModalModel = Volo.Abp.Identity.Web.Pages.Identity.Roles.CreateModalModel;
using EditRoleModalModel = Volo.Abp.Identity.Web.Pages.Identity.Roles.EditModalModel;

namespace Volo.Abp.Identity.Web
{
    public class AbpIdentityWebAutoMapperProfile : Profile
    {
        public AbpIdentityWebAutoMapperProfile()
        {
            CreateUserMappings();
            CreateRoleMappings();
            CreateClaimTypeMappings();
            CreateOrganizationUnitMappings();
        }

        protected virtual void CreateUserMappings()
        {
            //List
            CreateMap<IdentityUserDto, EditUserModalModel.UserInfoViewModel>()
                .MapExtraProperties();

            //CreateModal
            CreateMap<CreateUserModalModel.UserInfoViewModel, IdentityUserCreateDto>()
                .MapExtraProperties()
                .Ignore(x => x.RoleNames)
                .Ignore(x => x.OrganizationUnitIds);

            CreateMap<IdentityRoleDto, CreateUserModalModel.AssignedRoleViewModel>()
                .Ignore(x => x.IsAssigned);

            CreateMap<OrganizationUnitWithDetailsDto, IdentityUserModalPageModel.AssignedOrganizationUnitViewModel>()
                .Ignore(x => x.IsAssigned);

            //EditModal
            CreateMap<EditUserModalModel.UserInfoViewModel, IdentityUserUpdateDto>()
                .MapExtraProperties()
                .Ignore(x => x.RoleNames)
                .Ignore(x => x.OrganizationUnitIds);

            CreateMap<IdentityRoleDto, EditUserModalModel.AssignedRoleViewModel>()
                .Ignore(x => x.IsAssigned)
                .Ignore(x => x.IsInheritedFromOu);

        }

        protected virtual void CreateClaimTypeMappings()
        {
            CreateMap<ClaimTypeDto, EditClaimTypeModalModel.ClaimTypeInfoModel>()
                .MapExtraProperties();

            CreateMap<ClaimTypeDto, UserClaimTypeEditModalModel.ClaimsViewModel>()
                .Ignore(x => x.Value);

            CreateMap<ClaimTypeDto, RoleClaimTypeEditModalModel.ClaimsViewModel>()
                .Ignore(x => x.Value);

            CreateMap<EditClaimTypeModalModel.ClaimTypeInfoModel, UpdateClaimTypeDto>()
                .MapExtraProperties();

            CreateMap<CreateClaimTypeModalModel.ClaimTypeInfoModel, CreateClaimTypeDto>()
                .MapExtraProperties();
        }

        protected virtual void CreateRoleMappings()
        {
            //List
            CreateMap<IdentityRoleDto, EditRoleModalModel.RoleInfoModel>()
                .MapExtraProperties();

            //CreateModal
            CreateMap<CreateRoleModalModel.RoleInfoModel, IdentityRoleCreateDto>()
                .MapExtraProperties();

            //EditModal
            CreateMap<EditModalModel.RoleInfoModel, IdentityRoleUpdateDto>()
                .MapExtraProperties();
        }

        protected virtual void CreateOrganizationUnitMappings()
        {
            //CreateModal
            CreateMap<CreateOrganizationUnitModalModel.OrganizationUnitInfoModel, OrganizationUnitCreateDto>()
                .MapExtraProperties();

            //EditModal
            CreateMap<OrganizationUnitWithDetailsDto, EditOrganizationUnitModalModel.OrganizationUnitInfoModel>();
            CreateMap<EditOrganizationUnitModalModel.OrganizationUnitInfoModel, OrganizationUnitUpdateDto>()
                .MapExtraProperties();
        }
    }
}
