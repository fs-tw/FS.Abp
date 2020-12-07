using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Localization;
using Volo.Abp.BlazoriseUI;
using Volo.Abp.FeatureManagement.Blazor.Components;
using Volo.Saas.Host.Dtos;
using Volo.Saas.Localization;

namespace Volo.Saas.Host.Blazor.Pages.Saas.Host
{
    public partial class EditionManagement
    {
        protected const string FeatureProviderName = "E";

        protected FeatureManagementModal FeatureManagementModal;

        protected string ManageFeaturesPolicyName;
        protected bool HasManageFeaturesPermission;

        public EditionManagement()
        {
            ObjectMapperContext = typeof(SaasHostBlazorModule);
            LocalizationResource = typeof(SaasResource);

            CreatePolicyName = SaasHostPermissions.Editions.Create;
            UpdatePolicyName = SaasHostPermissions.Editions.Update;
            DeletePolicyName = SaasHostPermissions.Editions.Delete;
            ManageFeaturesPolicyName = SaasHostPermissions.Editions.ManageFeatures;
        }

        protected override ValueTask SetBreadcrumbItemsAsync()
        {
            BreadcrumbItems.Add(new BreadcrumbItem(L["Menu:Saas"]));
            BreadcrumbItems.Add(new BreadcrumbItem(L["Editions"]));
            return ValueTask.CompletedTask;
        }

        protected override async Task SetPermissionsAsync()
        {
            await base.SetPermissionsAsync();
            HasManageFeaturesPermission = await AuthorizationService.IsGrantedAsync(ManageFeaturesPolicyName);
        }

        protected override string GetDeleteConfirmationMessage(EditionDto entity)
        {
            return string.Format(L["EditionDeletionConfirmationMessage"], entity.DisplayName);
        }
    }
}