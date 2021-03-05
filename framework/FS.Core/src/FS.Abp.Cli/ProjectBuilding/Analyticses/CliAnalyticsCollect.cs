using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Volo.Abp.Cli.Http;
using Volo.Abp.Cli.ProjectBuilding.Analyticses;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http;
using Volo.Abp.Json;
using Volo.Abp.Threading;
namespace FS.Abp.Cli.ProjectBuilding.Analyticses
{
    [ExposeServices(typeof(ICliAnalyticsCollect))]
    public class CliAnalyticsCollect : ICliAnalyticsCollect, ITransientDependency
    {
        private readonly ILogger<CliAnalyticsCollect> _logger;

        public CliAnalyticsCollect()
        {

            _logger = NullLogger<CliAnalyticsCollect>.Instance;
        }

        public async Task CollectAsync(CliAnalyticsCollectInputDto input)
        {
            await Task.CompletedTask;
        }
    }
}