using System;
using Volo.Abp.Cli.ProjectBuilding.Building;
using Volo.Abp.Cli.ProjectBuilding.Templates.App;
using Volo.Abp.Cli.ProjectBuilding.Templates.Module;
using Volo.Abp.Cli.ProjectBuilding.Templates.MvcModule;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.Cli.ProjectBuilding
{
    [ExposeServices(typeof(ITemplateInfoProvider))]
    public class FsTemplateInfoProvider : ITemplateInfoProvider, ITransientDependency
    {
        public TemplateInfo GetDefault()
        {
            return Get(AppTemplate.TemplateName);
        }

        public TemplateInfo Get(string name)
        {
            switch (name)
            {
                case AppTemplate.TemplateName:
                    return new AppTemplate();
                case AppProTemplate.TemplateName:
                    return new AppProTemplate();
                case ModuleTemplate.TemplateName:
                    return new ModuleTemplate();
                //-----------Fs Template-----------------
                case FsAppTemplate.TemplateName:
                    return new FsAppTemplate();
                case FsModuleTemplate.TemplateName:
                    return new FsModuleTemplate();
                default:
                    throw new Exception("There is no template found with given name: " + name);
            }
        }
    }
}