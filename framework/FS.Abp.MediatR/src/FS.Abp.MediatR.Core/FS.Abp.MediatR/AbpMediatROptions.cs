using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Volo.Abp.Collections;
using Volo.Abp.Modularity;
using Volo.Abp.Reflection;

namespace FS.Abp.MediatR
{
    public class AbpMediatRSettings
    {
        public string RootPath { get; set; }
        public string RemoteServiceName { get; set; }
        public TypeList<AbpModule> Modules { get; set; }
        public AbpMediatRSettings(string rootPath, string remoteServiceName, TypeList<AbpModule> modules)
        {
            RootPath = rootPath;
            RemoteServiceName = remoteServiceName;
            Modules = modules;
        }
    }
    public class AbpMediatROptions
    {
        public Dictionary<string, AbpMediatRSettings> Settings { get; set; }

        public AbpMediatROptions()
        {
            Settings = new Dictionary<string, AbpMediatRSettings>();
        }
        public void AddOrReplaceSetting(string rootPath, string remoteServiceName, params Type[] moduleTypes)
        {
            var types = new TypeList<AbpModule>();

            foreach (var module in moduleTypes)
            {
                types.Add(module);
            }

            var item = new AbpMediatRSettings(rootPath, remoteServiceName, types);

            if (!Settings.ContainsKey(rootPath))
            {
                Settings.Add(rootPath, item);
            }
            else
            {
                Settings[rootPath] = item;
            }
        }


        public List<Type> RequestHandlerTypes
        {
            get
            {
                return Settings
                    .SelectMany(x => x.Value.Modules.SelectMany(m =>
                    {
                        return m.Assembly.GetTypes()
                        .Where(type => ReflectionHelper.GetImplementedGenericTypes(type, typeof(global::MediatR.IRequestHandler<,>)).FirstOrDefault() != null);
                    }))
                    .Distinct()
                    .ToList();
            }
        }

        public static (Type Type, string Method) GetRequestType(Type requestHandlerType)
        {
            (Type Type, string Method) 
                result = (Type: null, Method: null);

            var requestType = ReflectionHelper.GetImplementedGenericTypes(requestHandlerType, typeof(global::MediatR.IRequestHandler<,>)).FirstOrDefault()?.GenericTypeArguments?.FirstOrDefault();

            if (requestType == null) return result;

            if (requestType.IsAssignableTo<IQuery>())
            {
                result.Method = AbpMediatRConsts.Query;
            }
            else if (requestType.IsAssignableTo<ICommand>())
            {
                result.Method = AbpMediatRConsts.Command;
            }
            result.Type = requestType;

            return result;
        }
    }
}