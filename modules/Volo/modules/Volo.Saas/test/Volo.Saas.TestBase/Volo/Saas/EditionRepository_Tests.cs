using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Modularity;
using Volo.Saas.Editions;
using Xunit;

namespace Volo.Saas
{
    public abstract class EditionRepository_Tests<TStartupModule> : SaasTestBase<TStartupModule>
          where TStartupModule : IAbpModule
    {
        public IEditionRepository EditionRepository { get; }

        protected EditionRepository_Tests()
        {
            EditionRepository = GetRequiredService<IEditionRepository>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            var editions = await EditionRepository.GetListAsync();
            editions.ShouldContain(t => t.DisplayName == "FirstEdition");
            editions.ShouldContain(t => t.DisplayName == "SecondEdition");
        }

        [Fact]
        public async Task GetCountAsync()
        {
            var editionsCount = await EditionRepository.GetCountAsync("Edition");
            editionsCount.ShouldBe(2);

            var editionsCount2 = await EditionRepository.GetCountAsync("Second");
            editionsCount2.ShouldBe(1);
        }

    }
}
