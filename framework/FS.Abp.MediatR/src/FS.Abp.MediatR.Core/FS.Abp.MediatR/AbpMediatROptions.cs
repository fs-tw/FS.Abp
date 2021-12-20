using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Volo.Abp.Collections;
using Volo.Abp.Modularity;
using Volo.Abp.Reflection;

namespace FS.Abp.MediatR
{
    public class ConventionalControllerSetting
    {
        public string RootPath { get; set; }
        public string RemoteServiceName { get; set; }
        public Assembly Assembly { get; private set; }
        public ConventionalControllerSetting(string rootPath, string remoteServiceName, Assembly assembly)
        {
            RootPath = rootPath;
            RemoteServiceName = remoteServiceName;
            Assembly = assembly;
        }

        public List<Type> RequestHandlerTypes =>
            Assembly.GetTypes().Where(type => ReflectionHelper.IsAssignableToGenericType(type, typeof(global::MediatR.IRequestHandler<,>))).Distinct().ToList();
    }
    public class AbpMediatROptions
    {
        public List<ConventionalControllerSetting> Settings { get; set; }

        public AbpMediatROptions()
        {
            Settings = new List<ConventionalControllerSetting>();
        }
        public void AddOrReplaceSetting(string rootPath, string remoteServiceName, Assembly assembly)
        {
            var item = new ConventionalControllerSetting(rootPath, remoteServiceName, assembly);

            Settings.Add(item);
        }


        public List<Type> RequestHandlerTypes
        {
            get
            {
                return Settings
                    .SelectMany(x => x.RequestHandlerTypes)
                    .Distinct()
                    .ToList();
            }
        }

        public static RequestInfo GetRequestInfo(Type requestHandlerType)
        {
            return new RequestInfo(requestHandlerType);
        }
    }
}