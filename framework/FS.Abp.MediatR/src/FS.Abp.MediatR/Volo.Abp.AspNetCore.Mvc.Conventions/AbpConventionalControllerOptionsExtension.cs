using FS.Abp.MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Reflection;

namespace Volo.Abp.AspNetCore.Mvc.Conventions
{
    public static class AbpConventionalControllerOptionsExtension
    {
        public static void Create(this AbpConventionalControllerOptions options, AbpMediatROptions _abpMediatROptions)
        {
            _abpMediatROptions.Settings.ToList().ForEach(s =>
            {
                s.Value.Modules.ToList().ForEach(m =>
                {
                    var assembly = m.Assembly;
                    var setting = new ConventionalControllerSetting(
                        assembly,
                        s.Value.RootPath,
                        s.Value.RemoteServiceName
                    );
                    setting.ControllerModelConfigurer = (x) =>
                    {

                        var requestType = AbpMediatROptions.GetRequestType(x.ControllerType);

                        if(!string.IsNullOrEmpty(requestType.Method))
                            x.ControllerName = requestType.Method;

                    };
                    setting.UrlControllerNameNormalizer = (x) =>
                    {
                        return x.ControllerName;
                    };
                    setting.UrlActionNameNormalizer = (x) =>
                    {
                        return x.Action.ActionMethod.GetParameters().FirstOrDefault().ParameterType.Name;
                    };

                    var types = assembly.GetTypes()
                        .Where(AbpAspNetCoreMvcConfigureOptions.IsIRequestHandler);

                    foreach (var type in types)
                    {
                        setting.ControllerTypes.Add(type);
                    }

                    options.ConventionalControllerSettings.Add(setting);

                });
            });
        }
    }
}
