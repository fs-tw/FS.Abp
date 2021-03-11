using System.Collections.Generic;
using Volo.Abp.Cli.ProjectBuilding.Building;
using Volo.Abp.Cli.ProjectBuilding.Building.Steps;

namespace Volo.Abp.Cli.ProjectBuilding.Templates.App
{
    public class FsAppTemplate : TemplateInfo
    {
        /// <summary>
        /// "fs-app".
        /// </summary>
        public const string TemplateName = "fs-app";

        public FsAppTemplate() 
            : base(TemplateName)
        {

        }
        public override IEnumerable<ProjectBuildPipelineStep> GetCustomSteps(ProjectBuildContext context)
        {
            var steps = new List<ProjectBuildPipelineStep>();
            CleanupFolderHierarchy(context, steps);
            return steps;
        }
        private void CleanupFolderHierarchy(ProjectBuildContext context, List<ProjectBuildPipelineStep> steps)
        {
            //steps.Add(new MoveFolderStep("/aspnet-core/", "/"));
        }
    }
}