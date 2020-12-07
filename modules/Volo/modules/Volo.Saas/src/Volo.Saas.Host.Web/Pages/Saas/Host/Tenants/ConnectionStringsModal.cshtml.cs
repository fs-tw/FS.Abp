using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Volo.Saas.Host.Pages.Saas.Host.Tenants
{
    public class ConnectionStringsModal : SaasHostPageModel
    {
        [BindProperty]
        public TenantInfoModel Tenant { get; set; }

        protected ITenantAppService TenantAppService { get; }

        public ConnectionStringsModal(ITenantAppService tenantAppService)
        {
            TenantAppService = tenantAppService;
        }

        public virtual async Task OnGetAsync(Guid id)
        {
            var defaultConnectionString = await TenantAppService.GetDefaultConnectionStringAsync(id);
            Tenant = new TenantInfoModel
            {
                Id = id,
                DefaultConnectionString = defaultConnectionString,
                UseSharedDatabase = defaultConnectionString.IsNullOrWhiteSpace()
            };
        }

        public virtual async Task<IActionResult> OnPostAsync()
        {
            ValidateModel();

            if (Tenant.UseSharedDatabase || Tenant.DefaultConnectionString.IsNullOrWhiteSpace())
            {
                await TenantAppService.DeleteDefaultConnectionStringAsync(Tenant.Id);
            }
            else
            {
                await TenantAppService.UpdateDefaultConnectionStringAsync(Tenant.Id, Tenant.DefaultConnectionString);
            }

            return NoContent();
        }

        public class TenantInfoModel
        {
            [HiddenInput]
            public Guid Id { get; set; }

            public bool UseSharedDatabase { get; set; }

            [StringLength(TenantConnectionStringConsts.MaxValueLength)]
            public string DefaultConnectionString { get; set; }
        }
    }
}
