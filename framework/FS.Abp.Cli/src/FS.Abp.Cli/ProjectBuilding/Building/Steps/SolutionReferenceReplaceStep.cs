using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using System.Xml;
using Volo.Abp;
using Volo.Abp.Cli.ProjectBuilding.Building;
using Volo.Abp.Cli.ProjectBuilding.Files;
using Volo.Abp.Cli.Utils;

namespace FS.Abp.Cli.ProjectBuilding.Building.Steps
{
    public class SolutionReferenceReplaceStep : ProjectBuildPipelineStep
    {
        public override void Execute(ProjectBuildContext context)
        {
            if (context.BuildArgs.ExtraProperties.ContainsKey("local-framework-ref"))
            {
                var localAbpRepoPath = context.BuildArgs.AbpGitHubLocalRepositoryPath;

                if (string.IsNullOrWhiteSpace(localAbpRepoPath))
                {
                    return;
                }

                new SolutionReferenceReplacer(
                    context.Files,
                    localAbpRepoPath
                ).Run();
            }
        }

        internal class SolutionReferenceReplacer
        {
            private readonly string _gitHubLocalRepositoryPath;
            private readonly List<FileEntry> _entries;

            internal SolutionReferenceReplacer(
                List<FileEntry> entries,
                string gitHubLocalRepositoryPath)
            {
                _entries = entries;
                _gitHubLocalRepositoryPath = gitHubLocalRepositoryPath;
            }

            public void Run()
            {
                foreach (var fileEntry in _entries)
                {
                    if (fileEntry.Name.EndsWith(".sln"))
                    {
                        fileEntry.SetContent(ProcessFileContent(fileEntry.Content));
                    }
                }
            }

            private string ProcessFileContent(string content)
            {
                Check.NotNull(content, nameof(content));

                content = content.Replace(@"..\..\..\framework", @"..\..\framework");
                content = content.Replace(@"..\..\..\modules", @"..\..\modules");

                return content;
            }
        }
    }
}
