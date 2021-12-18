using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.Extensions.Options;
using System.Linq;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Conventions;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.AspNetCore.Mvc.Conventions
{
    [Dependency(ReplaceServices = true)]
    public class AbpServiceConvention : Volo.Abp.AspNetCore.Mvc.Conventions.AbpServiceConvention, IAbpServiceConvention, ITransientDependency
    {
        private readonly IAbpApplication _application;
        public AbpServiceConvention(
            IOptions<AbpAspNetCoreMvcOptions> options,
            IConventionalRouteBuilder conventionalRouteBuilder,
            IAbpApplication abpApplication)
            : base(options, conventionalRouteBuilder)
        {
            _application = abpApplication;
        }
        protected override void ConfigureApiExplorer(ControllerModel controller)
        {
            var setting=base.GetControllerSettingOrNull(controller.ControllerType);
            base.ConfigureApiExplorer(controller);
            var module = _application.Modules.FirstOrDefault(x => x.Assembly.GetType(controller.ControllerType.FullName) != null);
            controller.ApiExplorer.GroupName = module.Type.Name;
        }
    }
}
