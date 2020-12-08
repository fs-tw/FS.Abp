using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form;
using Volo.Abp.ObjectExtending;
using Volo.Saas.Host.Dtos;

namespace Volo.Saas.Host.Pages.Saas.Host.Tenants
{
    public class EditModalModel : SaasHostPageModel
    {
        [BindProperty]
        public TenantInfoModel Tenant { get; set; }

        protected ITenantAppService TenantAppService { get; }
        protected IEditionAppService EditionAppService { get; }

        public List<SelectListItem> EditionsComboboxItems { get; set; } = new List<SelectListItem>();

        public EditModalModel(ITenantAppService tenantAppService, IEditionAppService editionAppService)
        {
            TenantAppService = tenantAppService;
            EditionAppService = editionAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            Tenant = ObjectMapper.Map<SaasTenantDto, TenantInfoModel>(
                await TenantAppService.GetAsync(id)
            );

            var editions = await EditionAppService.GetListAsync(new GetEditionsInput {});

            EditionsComboboxItems.Add(new SelectListItem("",""));
            EditionsComboboxItems.AddRange(editions.Items
                .Select(e => new SelectListItem(e.DisplayName, e.Id.ToString(), Tenant.EditionId == e.Id)).ToList());
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            var input = ObjectMapper.Map<TenantInfoModel, SaasTenantUpdateDto>(Tenant);
            await TenantAppService.UpdateAsync(Tenant.Id, input);

            return NoContent();
        }

        public class TenantInfoModel : ExtensibleObject
        {
            [HiddenInput]
            public Guid Id { get; set; }

            [SelectItems(nameof(EditionsComboboxItems))]
            public Guid? EditionId { get; set; }

            [Required]
            [StringLength(TenantConsts.MaxNameLength)]
            public string Name { get; set; }
        }
    }
}