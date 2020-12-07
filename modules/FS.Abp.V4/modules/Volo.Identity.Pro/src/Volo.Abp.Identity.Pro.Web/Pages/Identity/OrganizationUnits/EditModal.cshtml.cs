using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Validation;

namespace Volo.Abp.Identity.Web.Pages.Identity.OrganizationUnits
{
    public class EditModalModel : IdentityPageModel
    {
        [BindProperty]
        public OrganizationUnitInfoModel OrganizationUnit { get; set; }

        protected IOrganizationUnitAppService OrganizationUnitAppService { get; }

        public EditModalModel(IOrganizationUnitAppService organizationUnitAppService)
        {
            OrganizationUnitAppService = organizationUnitAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            OrganizationUnit = ObjectMapper.Map<OrganizationUnitWithDetailsDto, OrganizationUnitInfoModel>(
                await OrganizationUnitAppService.GetAsync(id)
            );
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            var input = ObjectMapper.Map<OrganizationUnitInfoModel, OrganizationUnitUpdateDto>(OrganizationUnit);
            await OrganizationUnitAppService.UpdateAsync(OrganizationUnit.Id, input);

            return NoContent();
        }

        public class OrganizationUnitInfoModel : ExtensibleObject
        {
            [HiddenInput]
            public Guid Id { get; set; }

            [Required]
            [DynamicStringLength(typeof(OrganizationUnitConsts), nameof(OrganizationUnitConsts.MaxDisplayNameLength))]
            public string DisplayName { get; set; }
        }
    }
}
