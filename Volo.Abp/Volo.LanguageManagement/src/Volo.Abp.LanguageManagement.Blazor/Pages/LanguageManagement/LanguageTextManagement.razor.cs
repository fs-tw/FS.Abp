using Blazorise;
using Blazorise.DataGrid;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.BlazoriseUI.Components;
using Volo.Abp.LanguageManagement.Dto;

namespace Volo.Abp.LanguageManagement.Blazor.Pages.LanguageManagement
{
    public partial class LanguageTextManagement
    {
        protected IReadOnlyList<LanguageDto> Languages = Array.Empty<LanguageDto>();
        protected IReadOnlyList<LanguageResourceDto> LanguageResources = Array.Empty<LanguageResourceDto>();
        protected List<BlazoriseUI.BreadcrumbItem> BreadcrumbItems = new List<BlazoriseUI.BreadcrumbItem>();
        protected bool HasEditPermission;
        protected int CurrentPage;
        protected string CurrentSorting;
        protected int? TotalCount;
        protected string SelectedTargetCultureName;
        protected string SelectedBaseCultureName;
        protected string SelectedResourceName;
        protected bool SelectedGetOnlyEmptyValue;
        protected bool RefreshEntities;
        protected bool IsPageInitialized;
        protected readonly string NullStringValue = null;
        protected IReadOnlyList<LanguageTextDto> Entities;
        protected Modal EditModal;
        protected LanguageTextDto EditingEntity = new LanguageTextDto();
        protected string UpdatePolicyName;
        protected DataGridEntityActionsColumn<LanguageTextDto> EntityActionsColumn;
        private string _filter = null;

        protected string Filter
        {
            get => string.IsNullOrWhiteSpace(_filter) ? string.Empty : _filter;
            set => _filter = string.IsNullOrWhiteSpace(value) ? string.Empty : value.Trim();
        }

        protected virtual int PageSize { get; } = LimitedResultRequestDto.DefaultMaxResultCount;

        [Inject]
        protected ILanguageTextAppService LanguageTextAppService { get; set; }

        [Inject]
        protected ILanguageAppService LanguageAppService { get; set; }

        public LanguageTextManagement()
        {
            UpdatePolicyName = LanguageManagementPermissions.LanguageTexts.Edit;
        }

        protected async override Task OnInitializedAsync()
        {
            await SetBreadcrumbItemsAsync();
            await SetPermissionsAsync();

            Languages = (await LanguageAppService.GetAllListAsync()).Items;
            LanguageResources = await LanguageAppService.GetResourcesAsync();
            SelectedBaseCultureName = CalculateBaseCultureName();
            SelectedTargetCultureName = CalculateTargetCultureName(SelectedBaseCultureName);
            IsPageInitialized = true;
            await GetEntitiesAsync();
        }

        protected virtual async Task SetPermissionsAsync()
        {
            HasEditPermission = await AuthorizationService.IsGrantedAsync(UpdatePolicyName);
        }

        protected virtual string CalculateBaseCultureName()
        {
            var currentUiCulture = CultureInfo.CurrentUICulture.Name;

            var language = Languages.FirstOrDefault(l => l.UiCultureName == currentUiCulture);
            if (language != null)
            {
                return language.UiCultureName;
            }

            if (currentUiCulture.Contains("-"))
            {
                currentUiCulture = currentUiCulture.Substring(0, currentUiCulture.IndexOf('-'));
            }

            language = Languages.FirstOrDefault(l => l.UiCultureName == currentUiCulture);
            if (language != null)
            {
                return language.UiCultureName;
            }

            language = Languages.FirstOrDefault(l => l.IsDefaultLanguage);
            if (language != null)
            {
                return language.UiCultureName;
            }

            return "en";
        }

        protected virtual string CalculateTargetCultureName(string baseCultureName)
        {
            var language = Languages.FirstOrDefault(l => l.UiCultureName != baseCultureName && l.IsEnabled);
            if (language != null)
            {
                return language.UiCultureName;
            }

            return baseCultureName;
        }

        protected virtual async Task GetEntitiesAsync()
        {
            var input = await CreateGetLanguagesTextsInputAsync();
            var result = await LanguageTextAppService.GetListAsync(input);
            Entities = result.Items;
            TotalCount = (int?)result.TotalCount;
            StateHasChanged();
        }

        protected virtual Task<GetLanguagesTextsInput> CreateGetLanguagesTextsInputAsync()
        {
            var input = new GetLanguagesTextsInput
            {
                Sorting = CurrentSorting,
                SkipCount = CurrentPage * PageSize,
                MaxResultCount = PageSize,
                Filter = Filter,
                ResourceName = SelectedResourceName,
                BaseCultureName = SelectedBaseCultureName,
                TargetCultureName = SelectedTargetCultureName,
                GetOnlyEmptyValues = SelectedGetOnlyEmptyValue
            };

            return Task.FromResult(input);
        }

        protected virtual async Task OnDataGridReadAsync(DataGridReadDataEventArgs<LanguageTextDto> e)
        {
            if (IsPageInitialized)
            {
                CurrentSorting = e.Columns
                    .Where(c => c.Direction != SortDirection.None)
                    .Select(c => c.Field + (c.Direction == SortDirection.Descending ? " DESC" : ""))
                    .JoinAsString(",");
                CurrentPage = e.Page - 1;

                await GetEntitiesAsync();
            }
        }

        protected virtual async Task OpenEditModalAsync(LanguageTextDto entity)
        {
            await CheckEditPolicyAsync();
            EditingEntity = await LanguageTextAppService.GetAsync(entity.ResourceName, entity.CultureName, entity.Name,
               entity.BaseCultureName);
            EditModal.Show();
        }

        protected virtual async Task CheckEditPolicyAsync()
        {
            await AuthorizationService.CheckAsync(UpdatePolicyName);
        }

        protected virtual async Task CloseEditModalAsync()
        {
            if (RefreshEntities)
            {
                await GetEntitiesAsync();
                RefreshEntities = false;
            }

            EditModal.Hide();
        }

        protected virtual async Task RestoreToDefaultAsync()
        {
            await LanguageTextAppService.RestoreToDefaultAsync(EditingEntity.ResourceName, EditingEntity.CultureName,
                EditingEntity.Name);
            await GetEntitiesAsync();
            RefreshEntities = true;
            await CloseEditModalAsync();
        }

        protected virtual async Task UpdateEntityAsync()
        {
            await CheckEditPolicyAsync();
            await LanguageTextAppService.UpdateAsync(EditingEntity.ResourceName, EditingEntity.CultureName,
                EditingEntity.Name, EditingEntity.Value);
            RefreshEntities = true;
            await CloseEditModalAsync();
        }

        protected virtual async Task UpdateEntityAndSetNextAsync()
        {
            await CheckEditPolicyAsync();
            await LanguageTextAppService.UpdateAsync(EditingEntity.ResourceName, EditingEntity.CultureName,
                EditingEntity.Name, EditingEntity.Value);
            RefreshEntities = true;

            var nextEntityIndex = -1;
            for (int i = 0; i < Entities.Count; i++)
            {
                var entity = Entities[i];
                if (entity.Name == EditingEntity.Name && entity.ResourceName == EditingEntity.ResourceName &&
                    entity.CultureName == EditingEntity.CultureName)
                {
                    nextEntityIndex = i + 1;
                    break;
                }
            }

            if (nextEntityIndex == -1 || nextEntityIndex == Entities.Count)
            {
                await CloseEditModalAsync();
            }
            else
            {
                EditingEntity = await LanguageTextAppService.GetAsync(Entities[nextEntityIndex].ResourceName, Entities[nextEntityIndex].CultureName,
                    Entities[nextEntityIndex].Name,
                    Entities[nextEntityIndex].BaseCultureName);
            }
        }

        protected virtual async Task OnBaseCultureNameChangedAsync(string selectedBaseCultureName)
        {
            SelectedBaseCultureName = selectedBaseCultureName;
            await GetEntitiesAsync();
        }

        protected virtual async Task OnTargetCultureNameChangedAsync(string selectedTargetCultureName)
        {
            SelectedTargetCultureName = selectedTargetCultureName;
            await GetEntitiesAsync();
        }

        protected virtual async Task OnSelectedResourceNameChangedAsync(string selectedResourceName)
        {
            SelectedResourceName = selectedResourceName;
            await GetEntitiesAsync();
        }

        protected virtual async Task OnGetOnlyEmptyValuesChangedAsync(bool selectedGetOnlyEmptyValues)
        {
            SelectedGetOnlyEmptyValue = selectedGetOnlyEmptyValues;
            await GetEntitiesAsync();
        }

        protected virtual async Task OnFilterChangedAsync(string filter)
        {
            Filter = filter;
            await GetEntitiesAsync();
        }

        protected virtual ValueTask SetBreadcrumbItemsAsync()
        {
            BreadcrumbItems.Add(new BlazoriseUI.BreadcrumbItem(L["LanguageManagement"]));
            BreadcrumbItems.Add(new BlazoriseUI.BreadcrumbItem(L["LanguageTexts"]));
            return ValueTask.CompletedTask;
        }
    }
}
