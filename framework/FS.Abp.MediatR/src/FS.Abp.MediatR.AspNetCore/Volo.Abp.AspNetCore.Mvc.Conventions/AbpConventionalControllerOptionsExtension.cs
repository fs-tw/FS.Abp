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
                HashSet<string> typeNames = new HashSet<string>();

                var assembly = s.Assembly;

                var setting = new ConventionalControllerSetting(
                    assembly,
                    s.RootPath,
                    s.RemoteServiceName
                );

                setting.ControllerModelConfigurer = (x) =>
                {
                    var requestType = AbpMediatROptions.GetRequestInfo(x.ControllerType);

                    if (typeNames.Contains(requestType.Key))
                        throw new Exception("There are more then one the same type name , please rename mediatR's request type name.");

                    typeNames.Add(requestType.Key);

                    x.ControllerName = requestType.ControllerName;

                };

                setting.UrlControllerNameNormalizer = (x) =>
                {
                    return x.ControllerName;
                };

                setting.UrlActionNameNormalizer = (x) =>
                {
                    var requestType = AbpMediatROptions.GetRequestInfo(x.Action.Controller.ControllerType);

                    return requestType.ActionName;
                };

                var types = _abpMediatROptions.RequestHandlerTypes;

                foreach (var type in types)
                {
                    setting.ControllerTypes.Add(type);
                }

                options.ConventionalControllerSettings.Add(setting);
            });
        }
    }
}
