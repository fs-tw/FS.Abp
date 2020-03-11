using System;
using System.Collections.Generic;

using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Cli;
using Volo.Abp.Cli.ProjectModification;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Json;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.Cli.ProjectModification
{
    [Dependency(ReplaceServices = true)]
    [ExposeServices(typeof(Volo.Abp.Cli.ProjectModification.SolutionModuleAdder))]
    public class SolutionModuleAdder : Volo.Abp.Cli.ProjectModification.SolutionModuleAdder, ITransientDependency
    {
        protected VirtualFileProvider VirtualFileProvider { get; }

        public SolutionModuleAdder(
            IJsonSerializer jsonSerializer,
            ProjectNugetPackageAdder projectNugetPackageAdder,
            DbContextFileBuilderConfigureAdder dbContextFileBuilderConfigureAdder,
            EfCoreMigrationAdder efCoreMigrationAdder,
            DerivedClassFinder derivedClassFinder,
            ProjectNpmPackageAdder projectNpmPackageAdder,
            NpmGlobalPackagesChecker npmGlobalPackagesChecker,
            VirtualFileProvider virtualFileProvider
            )
            : base(jsonSerializer,
                  projectNugetPackageAdder,
                  dbContextFileBuilderConfigureAdder,
                  efCoreMigrationAdder,
                  derivedClassFinder,
                  projectNpmPackageAdder,
                  npmGlobalPackagesChecker)
        {
            VirtualFileProvider = virtualFileProvider;
        }
        protected override Task<ModuleInfo> FindModuleInfoAsync(string moduleName)
        {
            var file = this.VirtualFileProvider.GetFileInfo($"/Files/ModuleInfo/{moduleName}.json");
            if (!file.Exists)
                throw new CliUsageException($"ERROR: '{moduleName}' module could not be found!");
            var readString = new System.IO.StreamReader(file.CreateReadStream()).ReadToEnd();
            var result = JsonSerializer.Deserialize<ModuleInfo>(readString);
            return Task.FromResult(result);
        }

    }
}
