using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.BlazoriseUI;
using Volo.Abp.LanguageManagement.Dto;
using Volo.Abp.LanguageManagement.Localization;

namespace Volo.Abp.LanguageManagement.Blazor.Pages.LanguageManagement
{
    public partial class LanguageManagement
    {
        protected bool HasChangeDefaultPermission;
        protected string ChangeDefaultPolicyName;
        protected List<string> Flags = new List<string>(0);
        protected List<CultureInfoDto> Cultures = new List<CultureInfoDto>(0);

        public LanguageManagement()
        {
            ObjectMapperContext = typeof(LanguageManagementBlazorModule);
            LocalizationResource = typeof(LanguageManagementResource);

            CreatePolicyName = LanguageManagementPermissions.Languages.Create;
            UpdatePolicyName = LanguageManagementPermissions.Languages.Edit;
            DeletePolicyName = LanguageManagementPermissions.Languages.Delete;
            ChangeDefaultPolicyName = LanguageManagementPermissions.Languages.ChangeDefault;
        }

        protected override async Task OnInitializedAsync()
        {
            await base.OnInitializedAsync();
            Flags = await AppService.GetFlagListAsync();
            Cultures = await GetCulturesAsync();
        }

        protected override string GetDeleteConfirmationMessage(LanguageDto entity)
        {
            return string.Format(L["LanguageDeletionConfirmationMessage"], entity.DisplayName);
        }

        protected virtual async Task<List<CultureInfoDto>> GetCulturesAsync()
        {
            var cultures = await AppService.GetCulturelistAsync();
            if (cultures.Any())
            {
                var firstCulture = cultures.First();
                firstCulture.DisplayName = string.Empty;
                firstCulture.Name = string.Empty;
            }

            return cultures;
        }

        protected virtual async Task SetAsDefaultAsync(LanguageDto entity)
        {
            await AuthorizationService.CheckAsync(ChangeDefaultPolicyName);
            await AppService.SetAsDefaultAsync(entity.Id);
            await GetEntitiesAsync();
        }

        protected override ValueTask SetBreadcrumbItemsAsync()
        {
            BreadcrumbItems.Add(new BreadcrumbItem(L["LanguageManagement"]));
            BreadcrumbItems.Add(new BreadcrumbItem(L["Languages"]));
            return ValueTask.CompletedTask;
        }
    }
}
