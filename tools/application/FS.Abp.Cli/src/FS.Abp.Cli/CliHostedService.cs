using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Volo.Abp;

namespace FS.Abp.Cli
{
    public class CliHostedService : IHostedService
    {
        private readonly IAbpApplicationWithExternalServiceProvider _application;
        private readonly IServiceProvider _serviceProvider;
        private readonly RenameService _renameService;

        public CliHostedService(
            IAbpApplicationWithExternalServiceProvider application,
            IServiceProvider serviceProvider,
            RenameService renameService)
        {
            _application = application;
            _serviceProvider = serviceProvider;
            _renameService = renameService;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _application.Initialize(_serviceProvider);

            _renameService.Execute();

            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _application.Shutdown();

            return Task.CompletedTask;
        }
    }
}
