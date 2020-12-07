using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Blazorise;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Volo.Abp.FeatureManagement.Blazor.Components;
using Volo.Saas.Host.Dtos;
using Volo.Saas.Localization;

namespace Volo.Saas.Host.Blazor.Pages.Saas.Host
{
    public partial class TenantManagement
    {
        [Inject] protected IEditionAppService EditionAppService { get; set; }

        protected const string FeatureProviderName = "T";

        protected bool HasManageFeaturesPermission;
        protected string ManageFeaturesPolicyName;
        protected string ManageConnectionStringsPolicyName;

        protected FeatureManagementModal FeatureManagementModal;

        protected Modal ManageConnectionStringModal;

        protected TenantInfoModel TenantInfo;

        protected List<EditionDto> Editions;

        protected Validations ManageConnectionStringValidations;
        
        public TenantManagement()
        {
            ObjectMapperContext = typeof(SaasHostBlazorModule);
            LocalizationResource = typeof(SaasResource);
            
            CreatePolicyName = SaasHostPermissions.Tenants.Create;
            UpdatePolicyName = SaasHostPermissions.Tenants.Update;
            DeletePolicyName = SaasHostPermissions.Tenants.Delete;
            ManageFeaturesPolicyName = SaasHostPermissions.Tenants.ManageFeatures;
            ManageConnectionStringsPolicyName = SaasHostPermissions.Tenants.ManageConnectionStrings;

            TenantInfo = new TenantInfoModel();
        }

        protected override async Task SetPermissionsAsync()
        {
            await base.SetPermissionsAsync();
            HasManageFeaturesPermission = await AuthorizationService.IsGrantedAsync(ManageFeaturesPolicyName);
        }

        protected override async Task OpenCreateModalAsync()
        {
            Editions ??= (await EditionAppService.GetListAsync(new GetEditionsInput())).Items.ToList();

            await base.OpenCreateModalAsync();
        }

        protected override Task CreateEntityAsync()
        {
            if (NewEntity.EditionId == Guid.Empty)
            {
                NewEntity.EditionId = null;
            }

            return base.CreateEntityAsync();
        }

        protected override async Task OpenEditModalAsync(SaasTenantDto entity)
        {
            Editions ??= (await EditionAppService.GetListAsync(new GetEditionsInput())).Items.ToList();

            await base.OpenEditModalAsync(entity);
        }

        protected override Task UpdateEntityAsync()
        {
            if (EditingEntity.EditionId == Guid.Empty)
            {
                EditingEntity.EditionId = null;
            }

            return base.UpdateEntityAsync();
        }

        protected virtual async Task OpenEditConnectionStringModalAsync(SaasTenantDto entity)
        {
            var tenantConnectionString = await AppService.GetDefaultConnectionStringAsync(entity.Id);

            TenantInfo = new TenantInfoModel
            {
                Id = entity.Id,
                DefaultConnectionString = tenantConnectionString,
                UseSharedDatabase = tenantConnectionString.IsNullOrWhiteSpace()
            };

            ManageConnectionStringModal.Show();
        }

        protected virtual Task CloseEditConnectionStringModal()
        {
            ManageConnectionStringModal.Hide();
            return Task.CompletedTask;
        }

        protected virtual async Task UpdateConnectionStringAsync()
        {
            await CheckPolicyAsync(ManageConnectionStringsPolicyName);

            if (TenantInfo.UseSharedDatabase || TenantInfo.DefaultConnectionString.IsNullOrWhiteSpace())
            {
                await AppService.DeleteDefaultConnectionStringAsync(TenantInfo.Id);
            }
            else
            {
                await AppService.UpdateDefaultConnectionStringAsync(TenantInfo.Id, TenantInfo.DefaultConnectionString);
            }

            ManageConnectionStringModal.Hide();
        }

        protected override ValueTask SetBreadcrumbItemsAsync()
        {
            BreadcrumbItems.Add(new Abp.BlazoriseUI.BreadcrumbItem(L["Menu:Saas"]));
            BreadcrumbItems.Add(new Abp.BlazoriseUI.BreadcrumbItem(L["Tenants"]));
            return ValueTask.CompletedTask;
        }

        protected override string GetDeleteConfirmationMessage(SaasTenantDto entity)
        {
            return string.Format(L["TenantDeletionConfirmationMessage"], entity.Name);
        }
    }

    public class TenantInfoModel
    {
        public Guid Id { get; set; }

        public bool UseSharedDatabase { get; set; }

        [Required]
        public string DefaultConnectionString { get; set; }
    }
}