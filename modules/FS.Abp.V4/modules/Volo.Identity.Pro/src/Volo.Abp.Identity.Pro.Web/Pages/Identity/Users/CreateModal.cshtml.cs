using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Auditing;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.Identity.Web.Pages.Identity.Users
{
    public class CreateModalModel : IdentityUserModalPageModel
    {
        [BindProperty] public UserInfoViewModel UserInfo { get; set; }

        [BindProperty] public AssignedRoleViewModel[] Roles { get; set; }

        protected IIdentityUserAppService IdentityUserAppService { get; }

        public CreateModalModel(
            IIdentityUserAppService identityUserAppService)
        {
            IdentityUserAppService = identityUserAppService;
        }

        public virtual async Task OnGetAsync()
        {
            UserInfo = new UserInfoViewModel();

            var roleDtoList = (await IdentityUserAppService.GetAssignableRolesAsync()).Items;

            Roles = ObjectMapper.Map<IReadOnlyList<IdentityRoleDto>, AssignedRoleViewModel[]>(roleDtoList);

            OrganizationUnits =
                ObjectMapper.Map<IReadOnlyList<OrganizationUnitWithDetailsDto>, AssignedOrganizationUnitViewModel[]>(
                    (await IdentityUserAppService.GetAvailableOrganizationUnitsAsync()).Items
                );

            foreach (var role in Roles)
            {
                role.IsAssigned = role.IsDefault;
            }

            OrganizationUnitTreeRootNode = CreateOrganizationTree(new OrganizationTreeNode()
            {
                Id = null,
                Children = new List<OrganizationTreeNode>(),
                Index = -1
            });
        }

        public virtual async Task<NoContentResult> OnPostAsync()
        {
            ValidateModel();

            var input = ObjectMapper.Map<UserInfoViewModel, IdentityUserCreateDto>(UserInfo);
            input.RoleNames = Roles.Where(r => r.IsAssigned).Select(r => r.Name).ToArray();
            input.OrganizationUnitIds = OrganizationUnits.Where(ou => ou.IsAssigned).Select(ou => ou.Id).ToArray();

            await IdentityUserAppService.CreateAsync(input);

            return NoContent();
        }

        public class UserInfoViewModel : ExtensibleObject
        {
            [Required]
            [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxUserNameLength))]
            public string UserName { get; set; }

            [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxNameLength))]
            public string Name { get; set; }

            [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxSurnameLength))]
            public string Surname { get; set; }

            [Required]
            [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxPasswordLength))]
            [DataType(DataType.Password)]
            [DisableAuditing]
            public string Password { get; set; }

            [Required]
            [EmailAddress]
            [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxEmailLength))]
            public string Email { get; set; }

            [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxPhoneNumberLength))]
            public string PhoneNumber { get; set; }

            public bool LockoutEnabled { get; set; } = true;
        }

        public class AssignedRoleViewModel
        {
            [Required] [HiddenInput] public string Name { get; set; }

            public bool IsAssigned { get; set; }

            public bool IsDefault { get; set; }
        }
    }
}
