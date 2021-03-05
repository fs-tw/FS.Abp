using FS.Abp.Cli.ProjectBuilding.Building.Steps;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp.Cli.ProjectBuilding.Building;
using Volo.Abp.Cli.ProjectBuilding.Templates.Module;

namespace FS.Abp.Cli.ProjectBuilding.Templates.MvcModule
{
    public class ModuleTemplate : ModuleTemplateBase
    {
        /// <summary>
        /// "module".
        /// </summary>
        public const string TemplateName = "module";

        public ModuleTemplate()
            : base(TemplateName)
        {
            DocumentUrl = "https://docs.abp.io/en/abp/latest/Startup-Templates/Module";
        }
        public override IEnumerable<ProjectBuildPipelineStep> GetCustomSteps(ProjectBuildContext context)
        {
            context.BuildArgs.AbpGitHubLocalRepositoryPath = @"..\..\..\..";
            return base.GetCustomSteps(context).ToList()
                .Concat(new List<ProjectBuildPipelineStep>
                {
                    new SolutionReferenceReplaceStep()
                });
        }
    }
}
