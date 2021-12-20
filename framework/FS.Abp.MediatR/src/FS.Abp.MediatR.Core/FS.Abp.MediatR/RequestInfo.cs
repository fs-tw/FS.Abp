using System;
using System.Linq;
using Volo.Abp.Reflection;

namespace FS.Abp.MediatR
{
    public class RequestInfo
    {
        public Type RequestHandlerType;

        public RequestInfo(Type requestHandlerType)
        {
            RequestHandlerType = requestHandlerType;
        }

        public Type RequestType =>
            ReflectionHelper.GetImplementedGenericTypes(this.RequestHandlerType, typeof(global::MediatR.IRequestHandler<,>)).FirstOrDefault()?.GenericTypeArguments?.FirstOrDefault();

        public string Method => RequestType.IsAssignableTo<IQuery>() ? AbpMediatRConsts.Query : RequestType.IsAssignableTo<ICommand>() ? AbpMediatRConsts.Command : null;

        public string ControllerName => RequestType.Namespace.Split('.').LastOrDefault() + this.Method;

        public string ActionName => RequestType.Name;

        public string Key => ControllerName + ActionName;
    }
}