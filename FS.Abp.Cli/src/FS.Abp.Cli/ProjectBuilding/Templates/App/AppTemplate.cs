using FS.Abp.Cli.ProjectBuilding.Building.Steps;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp.Cli;
using Volo.Abp.Cli.ProjectBuilding.Building;
using Volo.Abp.Cli.ProjectBuilding.Templates.App;

namespace FS.Abp.Cli.ProjectBuilding.Templates.App
{
    public class AppTemplate : AppTemplateBase
    {
        /// <summary>
        /// "app".
        /// </summary>
        public const string TemplateName = "app";

        public AppTemplate() 
            : base(TemplateName)
        {
            DocumentUrl = CliConsts.DocsLink + "/en/abp/latest/Startup-Templates/Application";
        }
        public override IEnumerable<ProjectBuildPipelineStep> GetCustomSteps(ProjectBuildContext context)
        {
            context.BuildArgs.AbpGitHubLocalRepositoryPath = @"..\..\..\..\..";
            return base.GetCustomSteps(context);
        }
    }
}