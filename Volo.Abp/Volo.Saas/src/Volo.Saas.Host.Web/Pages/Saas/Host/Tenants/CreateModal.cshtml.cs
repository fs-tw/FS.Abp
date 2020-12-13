using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.Auditing;
using Volo.Abp.ObjectExtending;
using Volo.Saas.Host.Dtos;

namespace Volo.Saas.Host.Pages.Saas.Host.Tenants
{
    public class CreateModalModel : SaasHostPageModel
    {
        [BindProperty]
        public TenantInfoModel Tenant { get; set; }

        public List<SelectListItem> EditionsComboboxItems { get; set; } = new List<SelectListItem>();

        protected ITenantAppService TenantAppService { get; }
        protected IEditionAppService EditionAppService { get; }

        public CreateModalModel(ITenantAppService tenantAppService, IEditionAppService editionAppService)
        {
            TenantAppService = tenantAppService;
            EditionAppService = editionAppService;
        }

        public virtual async Task OnGetAsync()
        {
            Tenant = new TenantInfoModel();

            var editions = await EditionAppService.GetListAsync(new GetEditionsInput());

            EditionsComboboxItems.Add(new SelectListItem("", "",true));
            EditionsComboboxItems.AddRange(editions.Items
                .Select(e => new SelectListItem(e.DisplayName, e.Id.ToString())).ToList());
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            var input = ObjectMapper.Map<TenantInfoModel, SaasTenantCreateDto>(Tenant);
            await TenantAppService.CreateAsync(input);

            return NoContent();
        }

        public class TenantInfoModel : ExtensibleObject
        {
            [Required]
            [StringLength(TenantConsts.MaxNameLength)]
            public string Name { get; set; }

            [SelectItems(nameof(EditionsComboboxItems))]
            public Guid? EditionId { get; set; }

            [Required]
            [EmailAddress]
            [StringLength(256)]
            public string AdminEmailAddress { get; set; }

            [Required]
            [DataType(DataType.Password)]
            [StringLength(128)]
            [DisableAuditing]
            public string AdminPassword { get; set; }
        }
    }
}
