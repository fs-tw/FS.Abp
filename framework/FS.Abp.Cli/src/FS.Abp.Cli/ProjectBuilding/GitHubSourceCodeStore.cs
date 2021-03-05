using JetBrains.Annotations;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using Octokit;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
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
using static Volo.Abp.Cli.ProjectBuilding.AbpIoSourceCodeStore;

namespace FS.Abp.Cli.ProjectBuilding
{
    [ExposeServices(typeof(ISourceCodeStore))]
    public class GitHubSourceCodeStore : ISourceCodeStore, ITransientDependency
    {
        public ILogger<GitHubSourceCodeStore> Logger { get; set; }

        protected AbpCliOptions Options { get; }

        protected IJsonSerializer JsonSerializer { get; }

        protected ICancellationTokenProvider CancellationTokenProvider { get; }

        protected IGitHubClient GitHubClient { get; set; }

        protected OctokitOptions OctokitOptions { get; }

        public GitHubSourceCodeStore(
            IOptions<AbpCliOptions> options,
            IJsonSerializer jsonSerializer,
            ICancellationTokenProvider cancellationTokenProvider,
            IOptions<OctokitOptions> octokitOptions,
            IGitHubClient gitHubClient
            )
        {
            JsonSerializer = jsonSerializer;
            CancellationTokenProvider = cancellationTokenProvider;
            Options = options.Value;

            Logger = NullLogger<GitHubSourceCodeStore>.Instance;

            OctokitOptions = octokitOptions.Value;
            GitHubClient = gitHubClient;
        }

        private async Task<string> getLatestSourceCodeVersionAsync()
        {
            var releases = await GitHubClient.Repository.Release.GetAll("abpframework", "abp").ConfigureAwait(false);
            return releases.OrderByDescending(x => x.PublishedAt).FirstOrDefault().Name;

        }

        private async Task<string> getBranchShaAsync(string branchName)
        {
            var branch = await GitHubClient.Repository.Branch.Get(OctokitOptions.OwnerName, OctokitOptions.RepositoryName, branchName).ConfigureAwait(false);
            return branch.Commit.Sha;

        }

        public async Task<TemplateFile> GetAsync(string name, string type, [CanBeNull] string branch = null, string templateSource = null)
        {
            var abpLatestVersion = await getLatestSourceCodeVersionAsync().ConfigureAwait(false);//OctokitOptions.BranchName;

            var branchName = branch ?? OctokitOptions.BranchName;

            DirectoryHelper.CreateIfNotExists(CliPaths.TemplateCache);

            var branchPath = branchName + "@" + await getBranchShaAsync(branchName).ConfigureAwait(false);

            Path.GetInvalidFileNameChars().ToList().ForEach(c =>
            {
                branchPath = branchPath.Replace(c, '-');
            });

            var localCacheFile = Path.Combine(CliPaths.TemplateCache, name + "-" + branchPath + ".zip");
            if (Options.CacheTemplates && File.Exists(localCacheFile))
            {
                Logger.LogInformation($"Using cached emplates/{name},branch: {branchName},abp latest version: {abpLatestVersion}.");
                return new TemplateFile(File.ReadAllBytes(localCacheFile), abpLatestVersion, abpLatestVersion, abpLatestVersion);
            }


            Logger.LogInformation($"Download templates/{name} from Github({OctokitOptions.OwnerName}/{OctokitOptions.RepositoryName}): branch: {branchName}, abp latest version: {abpLatestVersion}.");

            var fileContent = await DownloadSourceCodeContentAsync(
                new GitHubSourceCodeDownloadInputDto
                {
                    Name = name,
                    Type = type,
                    Version = abpLatestVersion,
                    BranchName = branchName
                }
            ).ConfigureAwait(false);

            if (Options.CacheTemplates)
            {
                File.WriteAllBytes(localCacheFile, fileContent);
            }


            return new TemplateFile(fileContent, abpLatestVersion, abpLatestVersion, abpLatestVersion);
        }

        private async Task<byte[]> DownloadSourceCodeContentAsync(GitHubSourceCodeDownloadInputDto input)
        {
            var downloadBytes = await GitHubClient.Repository.Content.GetArchive(OctokitOptions.OwnerName, OctokitOptions.RepositoryName, ArchiveFormat.Zipball, input.BranchName).ConfigureAwait(false);

            var query = unzipData(downloadBytes).ToList();
            query = query.Where(x =>
            {
                var paths = x.Key.Split(@"/");
                return paths.Length > 4 && paths[1] == "templates" && paths[2] == input.Name;
            }).ToList();

            var fetchResult = query.ToDictionary(x => string.Join(@"/", x.Key.Split(@"/").Skip(3)), y => y.Value);

            var result = zipData(fetchResult);
            return result;


        }

        private Dictionary<string, byte[]> unzipData(byte[] zip)
        {
            var dict = new Dictionary<string, byte[]>();
            using (var msZip = new MemoryStream(zip))
            {
                using (var archive = new ZipArchive(msZip, ZipArchiveMode.Read))
                {
                    archive.Entries.ToList().ForEach(entry =>
                    {
                        if (string.IsNullOrEmpty(entry.FullName)) return;
                        using (var entryStream = entry.Open())
                        {
                            using (var msEntry = new MemoryStream())
                            {
                                entryStream.CopyTo(msEntry);
                                dict.Add(entry.FullName, msEntry.ToArray());
                            }
                        }
                    });
                }
            }
            return dict;
        }
        private static byte[] zipData(Dictionary<string, byte[]> data)
        {
            using (var zipStream = new MemoryStream())
            {
                using (var zipArchive = new ZipArchive(zipStream, ZipArchiveMode.Update))
                {
                    foreach (var fileName in data.Keys)
                    {
                        var entry = zipArchive.CreateEntry(fileName);
                        using (var entryStream = entry.Open())
                        {
                            var buff = data[fileName];
                            entryStream.Write(buff, 0, buff.Length);
                        }
                    }
                }
                return zipStream.ToArray();
            }
        }

        public Task<TemplateFile> GetAsync(string name, string type, string version = null, string templateSource = null, bool includePreReleases = false)
        {
            throw new NotImplementedException();
        }
    }
    public class GitHubSourceCodeDownloadInputDto : SourceCodeDownloadInputDto
    {
        public string BranchName { get; set; }
    }

}