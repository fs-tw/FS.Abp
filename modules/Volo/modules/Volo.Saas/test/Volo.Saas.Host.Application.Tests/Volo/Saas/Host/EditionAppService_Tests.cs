using System;
using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Saas.Host.Dtos;
using Xunit;

namespace Volo.Saas.Host
{
    public class EditionAppService_Tests : SaasHostApplicationTestBase
    {
        private readonly IEditionAppService _editionAppService;

        public EditionAppService_Tests()
        {
            _editionAppService = GetRequiredService<IEditionAppService>();
        }

        [Fact]
        public async Task GetAsync()
        {
            var editionInDb = UsingDbContext(dbContext => dbContext.Editions.First());
            var edition = await _editionAppService.GetAsync(editionInDb.Id);
            edition.DisplayName.ShouldBe(editionInDb.DisplayName);
        }

        [Fact]
        public async Task GetListAsync()
        {
            var result = await _editionAppService.GetListAsync(new GetEditionsInput());
            result.TotalCount.ShouldBe(2);
            result.Items.ShouldContain(t => t.DisplayName == "FirstEdition");
            result.Items.ShouldContain(t => t.DisplayName == "SecondEdition");
        }

        [Fact]
        public async Task GetListAsync_Filtered()
        {
            var result = await _editionAppService.GetListAsync(new GetEditionsInput { Filter = "Second" });
            result.TotalCount.ShouldBe(1);
            result.Items.ShouldNotContain(t => t.DisplayName == "FirstEdition");
            result.Items.ShouldContain(t => t.DisplayName == "SecondEdition");
        }

        [Fact]
        public async Task GetListAsync_Sorted_Descending_By_Name()
        {
            var result = await _editionAppService.GetListAsync(new GetEditionsInput { Sorting = "DisplayName DESC" });
            result.TotalCount.ShouldBe(2);
            var editions = result.Items.ToList();

            editions.ShouldContain(t => t.DisplayName == "FirstEdition");
            editions.ShouldContain(t => t.DisplayName == "SecondEdition");

            editions.FindIndex(t => t.DisplayName == "FirstEdition").ShouldBeGreaterThan(editions.FindIndex(t => t.DisplayName == "SecondEdition"));
        }

        [Fact]
        public async Task CreateAsync()
        {
            var editionName = Guid.NewGuid().ToString("N").ToLowerInvariant();
            var edition = await _editionAppService.CreateAsync(new EditionCreateDto { DisplayName = editionName });
            edition.DisplayName.ShouldBe(editionName);
            edition.Id.ShouldNotBe(default);
        }

        [Fact]
        public async Task UpdateAsync()
        {
            var edition = UsingDbContext(dbContext => dbContext.Editions.Single(t => t.DisplayName == "FirstEdition"));

            var result = await _editionAppService.UpdateAsync(edition.Id, new EditionUpdateDto { DisplayName = "FirstEdition-renamed" });
            result.Id.ShouldBe(edition.Id);
            result.DisplayName.ShouldBe("FirstEdition-renamed");

            var acmeUpdated = UsingDbContext(dbContext => dbContext.Editions.Single(t => t.Id == edition.Id));
            acmeUpdated.DisplayName.ShouldBe("FirstEdition-renamed");
        }

        [Fact]
        public async Task DeleteAsync()
        {
            var acme = UsingDbContext(dbContext => dbContext.Editions.Single(t => t.DisplayName == "FirstEdition"));

            await _editionAppService.DeleteAsync(acme.Id);

            UsingDbContext(dbContext =>
            {
                dbContext.Editions.Any(t => t.Id == acme.Id).ShouldBeFalse();
            });
        }
    }
}
