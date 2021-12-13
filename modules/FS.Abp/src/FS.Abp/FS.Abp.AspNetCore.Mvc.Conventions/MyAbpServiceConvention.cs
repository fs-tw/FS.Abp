using FS.Abp.MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Conventions;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.AspNetCore.Mvc.Conventions
{
    [Volo.Abp.DependencyInjection.Dependency(ReplaceServices = true)]
    public class MyAbpServiceConvention : AbpServiceConvention, IAbpServiceConvention, ITransientDependency
    {
        private readonly IAbpApplication _application;
        public MyAbpServiceConvention(
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

            //if (AbpMediatRConfigureOptions.IsIRequestHandler(controller.ControllerType))
            //{
            //    var configuration = base.GetControllerSettingOrNull(controller.ControllerType);
            //    controller.ControllerName = "MediatRQuery";

            //    controller.Actions.ToList().ForEach(a =>
            //    {
            //        a.Selectors.Clear();
            //        base.AddAbpServiceSelector("MediatRQuery", "", a, configuration);
            //    });
            //}

        }

        //protected override AttributeRouteModel CreateAbpServiceAttributeRouteModel(string rootPath, string controllerName, ActionModel action, string httpMethod, ConventionalControllerSetting configuration)
        //{
        //    if (AbpMediatRConfigureOptions.IsIRequestHandler(action.Controller.ControllerType))
        //    {
        //        return new AttributeRouteModel(
        //            new RouteAttribute(
        //                ConventionalRouteBuilder.Build(rootPath, controllerName, action, httpMethod, configuration)
        //            )
        //        );
        //    }
        //    else
        //    {
        //        return base.CreateAbpServiceAttributeRouteModel(rootPath, controllerName, action, httpMethod, configuration);
        //    }
            
        //}


    }
}
