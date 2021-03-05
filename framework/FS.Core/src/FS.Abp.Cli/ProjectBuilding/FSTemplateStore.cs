using JetBrains.Annotations;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Cli;
using Volo.Abp.Cli.Http;
using Volo.Abp.Cli.ProjectBuilding;
using Volo.Abp.Cli.ProjectBuilding.Building;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http;
using Volo.Abp.IO;
using Volo.Abp.Json;
using Volo.Abp.Threading;
using Volo.Abp.VirtualFileSystem;
using static Volo.Abp.Cli.ProjectBuilding.AbpIoTemplateStore;

namespace FS.Abp.Cli.ProjectBuilding
{
    [ExposeServices(typeof(ITemplateStore))]
    public class FsTemplateStore : ITemplateStore, ITransientDependency
    {
        public ILogger<AbpIoTemplateStore> Logger { get; set; }

        protected IVirtualFileProvider VirtualFileProvider { get; }

        protected CliOptions Options { get; }

        protected IJsonSerializer JsonSerializer { get; }

        protected ICancellationTokenProvider CancellationTokenProvider { get; }

        public FsTemplateStore(
            IOptions<CliOptions> options,
            IJsonSerializer jsonSerializer,
            ICancellationTokenProvider cancellationTokenProvider,
            IVirtualFileProvider virtualFileProvider)
        {
            JsonSerializer = jsonSerializer;
            CancellationTokenProvider = cancellationTokenProvider;
            Options = options.Value;
            VirtualFileProvider = virtualFileProvider;

            Logger = NullLogger<AbpIoTemplateStore>.Instance;
        }
        private string GetLatestTemplateVersionAsync(string name)
        {
            var versionFile = this.VirtualFileProvider.GetFileInfo($"/Files/TemplateVersion.json");
            if (!versionFile.Exists)
                throw new CliUsageException($"ERROR: 'TemplateVersion.json' could not be found!");
            var readString = new System.IO.StreamReader(versionFile.CreateReadStream()).ReadToEnd();


            var abpTemplates = JsonSerializer.Deserialize<
                System.Collections.Generic.Dictionary<string, GetLatestTemplateVersionResultDto>>(readString);

            if (!abpTemplates.ContainsKey(name))
                throw new CliUsageException($"ERROR: {name}'s version could not be found!");
            return abpTemplates[name].Version;
        }

        public async Task<TemplateFile> GetAsync(string name, [CanBeNull] string version = null)
        {
            var latestVersion = GetLatestTemplateVersionAsync(name);
            if (version == null)
            {
                version = latestVersion;
            }

            Logger.LogInformation("Get template from Embedded: " + name + ", version: " + version);

            var file = this.VirtualFileProvider.GetFileInfo($"/Files/Template/{name}.zip");
            if (!file.Exists)
                throw new CliUsageException($"ERROR: '{name}' template could not be found!");

            return await Task.FromResult(new TemplateFile(file.CreateReadStream().GetAllBytes(), version, latestVersion));
        }
    }
}