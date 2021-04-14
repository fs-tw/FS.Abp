using ICSharpCode.SharpZipLib.Core;
using ICSharpCode.SharpZipLib.Zip;
using System;
using System.IO;
using Volo.Abp.Cli.ProjectBuilding;
using Volo.Abp.Cli.ProjectBuilding.Building;
using Volo.Abp.Cli.ProjectBuilding.Building.Steps;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Cli
{
    public class RenameService : ITransientDependency
    {

        private readonly string sourceZipPath = @"D:\Works\11003\ec.works-0129\modules\FS.EShop\FS.EShop.zip";
        private readonly string oldSolutionName = "FS.EShop";
        private readonly string newSolutionName = "FS.EShopManagement";
        private readonly string destPath = @$"C:\";
        public void Execute()
        {
            var context = new ProjectBuildContext(
                 null,
                 null,
                 new TemplateFile(File.ReadAllBytes(sourceZipPath), "", "", ""),
                 new ProjectBuildArgs(SolutionName.Parse(newSolutionName))
             );

            var getFiles = new FileEntryListReadStep();
            getFiles.Execute(context);

            var rename = new FS.Abp.Cli.ProjectBuilding.Building.Steps.SolutionRenameStep(SolutionName.Parse(oldSolutionName));
            rename.Execute(context);

            var zip = new CreateProjectResultZipStep();
            zip.Execute(context);



            using (var templateFileStream = new MemoryStream(context.Result.ZipContent))
            {
                using (var zipInputStream = new ZipInputStream(templateFileStream))
                {
                    var zipEntry = zipInputStream.GetNextEntry();
                    while (zipEntry != null)
                    {
                        var fullZipToPath = Path.Combine(destPath, newSolutionName, zipEntry.Name);
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
