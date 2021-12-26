using System;
using Volo.Abp.Modularity;
using Volo.Abp.Reflection;

namespace FS.Abp.MediatR
{
    public class AbpMediatRCoreModule : AbpModule
    {
        public static bool IsIRequestHandler(Type type)
        {
            if (!type.IsPublic || type.IsAbstract || type.IsGenericType)
            {
                return false;
            }

            return
                ReflectionHelper.IsAssignableToGenericType(type, typeof(global::MediatR.IRequestHandler<,>));

        }
    }

}
