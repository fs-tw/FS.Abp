using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using Volo.Abp.Cli;
using Volo.Abp.Cli.Args;
using Volo.Abp.Cli.Commands;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Cli.ProjectBuilding.Building;
using Volo.Abp.Cli.ProjectBuilding;
using FS.Abp.Cli.ProjectBuilding.Building.Steps;
using Volo.Abp.Cli.ProjectBuilding.Files;
using System.Collections.Generic;
using ICSharpCode.SharpZipLib.Zip;
using ICSharpCode.SharpZipLib.Core;

namespace FS.Abp.Cli.Commands
{
    public class ReNameCommand : IConsoleCommand, ITransientDependency
    {
        public ILogger<ReNameCommand> Logger { get; set; }
        protected AbpCliOptions AbpCliOptions { get; }
        protected IHybridServiceScopeFactory ServiceScopeFactory { get; }
        protected ITemplateInfoProvider TemplateInfoProvider { get; }

        public ReNameCommand(IOptions<AbpCliOptions> cliOptions,
            IHybridServiceScopeFactory serviceScopeFactory,
            ITemplateInfoProvider templateInfoProvider)
        {
            ServiceScopeFactory = serviceScopeFactory;
            Logger = NullLogger<ReNameCommand>.Instance;
            AbpCliOptions = cliOptions.Value;
            TemplateInfoProvider = templateInfoProvider;
        }

        public Task ExecuteAsync(CommandLineArgs commandLineArgs)
        {
            var currentFolder = Path.Combine(Directory.GetCurrentDirectory(),"work");

            if (!File.Exists(Path.Combine(currentFolder, "target.zip"))) return Task.CompletedTask;

            var CompanyNamePlaceHolder = commandLineArgs.Options.GetOrNull(Options.CompanyNamePlaceHolder.Short, Options.CompanyNamePlaceHolder.Long);
            var ProjectNamePlaceHolder = commandLineArgs.Options.GetOrNull(Options.ProjectNamePlaceHolder.Short, Options.ProjectNamePlaceHolder.Long);
            var CompanyName = commandLineArgs.Options.GetOrNull(Options.CompanyName.Short, Options.CompanyName.Long);
            var ProjectName = commandLineArgs.Options.GetOrNull(Options.ProjectName.Short, Options.ProjectName.Long);

            var files=GetEntriesFromZipFile(File.ReadAllBytes(Path.Combine(currentFolder, $"{CompanyNamePlaceHolder}.{ProjectNamePlaceHolder}.zip")));
            new SolutionRenamer(
                files,
                CompanyNamePlaceHolder,
                ProjectNamePlaceHolder,
                CompanyName,
                ProjectName
            ).Run();
            var datas = CreateZipFileFromEntries(files);
            WriteOutputFile(Path.Combine(currentFolder, $"{CompanyName}.{ProjectName}"), datas);
            return Task.CompletedTask;
        }

        public string GetUsageInfo()
        {
            var sb = new StringBuilder();

            sb.AppendLine("");
            sb.AppendLine("Usage:");
            sb.AppendLine("");
            sb.AppendLine("    abp rename <module-name> [options]");
            sb.AppendLine("");

            return sb.ToString();
        }

        public string GetShortDescription()
        {
            return "rename project namespace";
        }
        public static class Options
        {
            public static class CompanyNamePlaceHolder
            {
                public const string Short = "cp";
                public const string Long = "company-name-place-holder";
            }
            public static class ProjectNamePlaceHolder
            {
                public const string Short = "pp";
                public const string Long = "project-name-place-holder";
            }
            public static class CompanyName
            {
                public const string Short = "c";
                public const string Long = "company-name";
            }
            public static class ProjectName
            {
                public const string Short = "p";
                public const string Long = "project-name";
            }
        }

        private static FileEntryList GetEntriesFromZipFile(byte[] fileBytes)
        {
            var fileEntries = new List<FileEntry>();

            using (var memoryStream = new MemoryStream(fileBytes))
            {
                using (var zipInputStream = new ZipInputStream(memoryStream))
                {
                    var zipEntry = zipInputStream.GetNextEntry();
                    while (zipEntry != null)
                    {
                        var buffer = new byte[4096]; // 4K is optimum

                        using (var fileEntryMemoryStream = new MemoryStream())
                        {
                            StreamUtils.Copy(zipInputStream, fileEntryMemoryStream, buffer);
                            fileEntries.Add(new FileEntry(zipEntry.Name.EnsureStartsWith('/'), fileEntryMemoryStream.ToArray(), zipEntry.IsDirectory));
                        }

                        zipEntry = zipInputStream.GetNextEntry();
                    }
                }

                return new FileEntryList(fileEntries);
            }
        }
        private static byte[] CreateZipFileFromEntries(FileEntryList entries)
        {
            using (var memoryStream = new MemoryStream())
            {
                using (var zipOutputStream = new ZipOutputStream(memoryStream))
                {
                    zipOutputStream.SetLevel(3); //0-9, 9 being the highest level of compression

                    foreach (var entry in entries)
                    {
                        zipOutputStream.PutNextEntry(new ZipEntry(entry.Name)
                        {
                            Size = entry.Bytes.Length
                        });
                        zipOutputStream.Write(entry.Bytes, 0, entry.Bytes.Length);
                    }

                    zipOutputStream.CloseEntry();
                    zipOutputStream.IsStreamOwner = false;
                }

                memoryStream.Position = 0;
                return memoryStream.ToArray();
            }
        }

        private static void WriteOutputFile(string outputFolder,byte[] zipContent)
        {
            using (var templateFileStream = new MemoryStream(zipContent))
            {
                using (var zipInputStream = new ZipInputStream(templateFileStream))
                {
                    var zipEntry = zipInputStream.GetNextEntry();
                    while (zipEntry != null)
                    {
                        var fullZipToPath = Path.Combine(outputFolder, zipEntry.Name);
                        var directoryName = Path.GetDirectoryName(fullZipToPath);

                        if (!string.IsNullOrEmpty(directoryName))
                        {
                            Directory.CreateDirectory(directoryName);
                        }

                        var fileName = Path.GetFileName(fullZipToPath);
                        if (fileName.Length == 0)
                        {
                            zipEntry = zipInputStream.GetNextEntry();
                            continue;
                        }

                        var buffer = new byte[4096]; // 4K is optimum
                        using (var streamWriter = File.Create(fullZipToPath))
                        {
                            StreamUtils.Copy(zipInputStream, streamWriter, buffer);
                        }

                        zipEntry = zipInputStream.GetNextEntry();
                    }
                }
            }
        }
    }
}