using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace Volo.Abp.LanguageManagement.Data
{
    public class LanguageManagementDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        protected ILanguageRepository LanguageRepository { get; }
        protected IGuidGenerator GuidGenerator { get; }
        protected AbpLocalizationOptions Options { get; }
        protected IDataFilter<ISoftDelete> SoftDeleteFilter { get; }
        protected ICurrentTenant CurrentTenant { get; }

        public LanguageManagementDataSeedContributor(
            ILanguageRepository languageRepository,
            IOptions<AbpLocalizationOptions> options,
            IGuidGenerator guidGenerator,
            IDataFilter<ISoftDelete> softDeleteFilter,
            ICurrentTenant currentTenant)
        {
            LanguageRepository = languageRepository;
            GuidGenerator = guidGenerator;
            SoftDeleteFilter = softDeleteFilter;
            CurrentTenant = currentTenant;
            Options = options.Value;
        }

        public virtual async Task SeedAsync(DataSeedContext context)
        {
            using (CurrentTenant.Change(context?.TenantId))
            {
                using (SoftDeleteFilter.Disable())
                {
                    var existingLanguages = await LanguageRepository.GetListAsync();
                    foreach (var language in Options.Languages)
                    {
                        if (existingLanguages.Any(
                            l => l.CultureName == language.CultureName &&
                                 l.UiCultureName == language.UiCultureName))
                        {
                            continue;
                        }

                        await LanguageRepository.InsertAsync(
                            new Language(
                                GuidGenerator.Create(),
                                language.CultureName,
                                language.UiCultureName,
                                language.DisplayName,
                                language.FlagIcon
                            )
                        );
                    }
                }
            }
        }
    }
}
