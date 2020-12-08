using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.MultiTenancy;

namespace Volo.Saas.Editions
{
    public class EditionDataSeeder : IEditionDataSeeder, ITransientDependency
    {
        protected IEditionRepository EditionRepository;
        protected IGuidGenerator GuidGenerator { get; }
        protected ICurrentTenant CurrentTenant { get; }

        public EditionDataSeeder(
            IEditionRepository editionRepository,
            IGuidGenerator guidGenerator,
            ICurrentTenant currentTenant)
        {
            EditionRepository = editionRepository;
            GuidGenerator = guidGenerator;
            CurrentTenant = currentTenant;
        }

        public virtual async Task CreateStandardEditionsAsync()
        {
            if (CurrentTenant.IsAvailable)
            {
                return;
            }

            await AddEditionIfNotExistsAsync("Standard");
        }

        protected virtual async Task AddEditionIfNotExistsAsync(string displayName)
        {
            if (await EditionRepository.CheckNameExistAsync(displayName))
            {
                return;
            }

            await EditionRepository.InsertAsync(
                new Edition(
                    GuidGenerator.Create(),
                    displayName
                )
            );
        }
    }
}
