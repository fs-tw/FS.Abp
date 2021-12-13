using FS.Abp.MediatR;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Http.Modeling;
using Volo.Abp.Reflection;

namespace FS.Abp.AspNetCore.Mvc.Notifications.ApplicationApiDescriptionModels
{
    public record ModifyModel(ApplicationApiDescriptionModel model) : INotification
    {
    }

    public class ModifyModelHandler : Volo.Abp.Domain.Services.DomainService, INotificationHandler<ModifyModel>
    {
        public Task Handle(ModifyModel notification, CancellationToken cancellationToken)
        {
            var serviceProvider = LazyServiceProvider.LazyGetRequiredService<IServiceProvider>();
            var options = serviceProvider.GetService<IOptions<AbpMediatROptions>>().Value;
            var abpApplication = serviceProvider.GetService<IAbpApplication>();

            var controllerModels = notification.model.Modules.SelectMany(m =>
            {
                return m.Value.Controllers.ToList().ToDictionary(c => c.Value.Type, y => (Module: m.Key, Value: y.Value, Key: y.Key));
            }).ToDictionary(x => x.Key, y => y.Value);

            var typeNames = notification.model.Modules.SelectMany(x => x.Value.Controllers).Select(x => x.Value.Type).ToList();

            var allTypes = options.RequestHandlerTypes
                .ToDictionary(x => x.FullName, y => y);

            var controllers = typeNames.Select(x =>
            {
                (string Method, Type Type, ControllerApiDescriptionModel ControllerModel, string Key, string Module) 
                    result = (Method: null, Type: null, ControllerModel: null, Key: null, Module: null);

                if (!allTypes.ContainsKey(x))
                    return result;

                if (!controllerModels.ContainsKey(x))
                    return result;

                result.ControllerModel = controllerModels[x].Value;

                result.Key = controllerModels[x].Key;

                result.Module = controllerModels[x].Module;

                var requestType = AbpMediatROptions.GetRequestType(allTypes[x]);//ReflectionHelper.GetImplementedGenericTypes(allTypes[x], typeof(global::MediatR.IRequestHandler<,>)).FirstOrDefault()?.GenericTypeArguments?.FirstOrDefault();

                if (requestType.Method == null) return result;

                result.Type = requestType.Type;

                result.Method = requestType.Method;

                return result;
            }).Where(r => r.Method != null).ToList();

            controllers
            .ToList()
            .ForEach(c =>
            {
                c.ControllerModel.Interfaces.Clear();
                c.ControllerModel.Actions.ToList().ForEach(m =>
                {
                    if (m.Value.ReturnValue.Type == "MediatR.Unit")
                        m.Value.ReturnValue = new ReturnValueApiDescriptionModel()
                        {
                            Type = "System.Void",
                            TypeSimple = "System.Void"
                        };
                    m.Value.ParametersOnMethod.RemoveAll(p => p.Name == "cancellationToken");
                    var actionName = m.Value.Parameters.FirstOrDefault().Type.Split(".").Last();
                    m.Value.UniqueName = actionName;
                    m.Value.Name = actionName;
                    c.ControllerModel.Actions.Add(actionName, m.Value);
                    c.ControllerModel.Actions.Remove(m.Key);
                });

            });

            var query = controllers.Where(x => x.Method == AbpMediatRConsts.Query).FirstOrDefault();
            var command = controllers.Where(x => x.Method == AbpMediatRConsts.Command).FirstOrDefault();

            modifyControllerModel(query, AbpMediatRConsts.Query);
            modifyControllerModel(command, AbpMediatRConsts.Command);


            void modifyControllerModel((string Method, Type Type, ControllerApiDescriptionModel ControllerModel, string Key, string Module) item, string method)
            {
                var module = notification.model.Modules[item.Module];
                if (item.ControllerModel != null)
                {
                    item.ControllerModel.ControllerName = method;

                    controllers.Where(x => x.Method == method)
                    .Skip(1)
                    .ToList()
                    .ForEach(other =>
                    {
                        other.ControllerModel.Actions.ToList().ForEach(otherAction =>
                        {
                            item.ControllerModel.Actions.Add(otherAction.Key, otherAction.Value);
                        });

                        module.Controllers.Remove(other.Key);
                    });

                    module.Controllers.Add(item.Type.Namespace, item.ControllerModel);

                    module.Controllers.Remove(item.Key);

                }
            }

            return Task.CompletedTask;
        }
    }
}
