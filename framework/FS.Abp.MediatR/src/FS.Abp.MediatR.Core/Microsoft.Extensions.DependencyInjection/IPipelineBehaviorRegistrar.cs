using FS.Abp.MediatR;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using Volo.Abp.Reflection;

namespace Microsoft.Extensions.DependencyInjection
{
    public class IPipelineBehaviorRegistrar
    {
        private readonly Assembly _assembly;
        private readonly IServiceCollection _services;
        public IPipelineBehaviorRegistrar(IServiceCollection services, Assembly assembly)
        {
            _assembly = assembly;
            _services = services;
        }

        public void Register()
        {
            //_assembly.GetTypes()
            //    .Where(x => x.IsPublic && !x.IsAbstract)
            //    .Where(type => ReflectionHelper.IsAssignableToGenericType(type, typeof(global::MediatR.IRequestHandler<,>))).ToList()
            //    .ForEach(t =>
            //    {
            //        var handler = ReflectionHelper.GetImplementedGenericTypes(t, typeof(global::MediatR.IRequestHandler<,>)).FirstOrDefault();
            //        var requestType = handler.GenericTypeArguments[0];
            //        var responseType = handler.GenericTypeArguments[1];

            //        var interfaceType = typeof(IPipelineBehavior<,>).MakeGenericType(requestType, responseType);

            //        var handlerType = typeof(CommandHandler<,>).MakeGenericType(requestType, responseType);

            //        _services.AddTransient(interfaceType, handlerType);
            //    });

            //_services.AddTransient(typeof(IPipelineBehavior<,>), typeof(CommandHandler<,>));
            //_services.AddTransient(typeof(IPipelineBehavior<,>), typeof(QueryHandler<,>));
        }
    }
}
