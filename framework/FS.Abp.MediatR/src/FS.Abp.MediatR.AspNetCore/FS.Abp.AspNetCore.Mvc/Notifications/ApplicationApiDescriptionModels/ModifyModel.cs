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

    public class ControllerInfo
    {
        private ApplicationApiDescriptionModel model;
        public Type ControllerType;
        public ControllerInfo(ApplicationApiDescriptionModel model, Type controllerType)
        {
            this.model = model;
            this.ControllerType = controllerType;
        }
        public ControllerApiDescriptionModel ControllerApiDescriptionModel =>
            model.Modules.SelectMany(x => x.Value.Controllers.Select(y => y.Value)).SingleOrDefault(x => x.Type == ControllerType.FullName);

        public FS.Abp.MediatR.RequestInfo RequestInfo => new RequestInfo(ControllerType);

        public string ModuleKey => model.Modules.FirstOrDefault(x => x.Value.Controllers.Values.Any(c => c.Type == ControllerType.FullName)).Key;

        public string ControllerKey => model.Modules.Values.SelectMany(x => x.Controllers).FirstOrDefault(x => x.Value.Type == ControllerType.FullName).Key;

    }
    public record ModifyModel(ApplicationApiDescriptionModel model) : INotification
    {
    }

    public class ModifyModelHandler : Volo.Abp.Domain.Services.DomainService, INotificationHandler<ModifyModel>
    {
        public Task Handle(ModifyModel notification, CancellationToken cancellationToken)
        {
            var serviceProvider = LazyServiceProvider.LazyGetRequiredService<IServiceProvider>();
            var options = serviceProvider.GetService<IOptions<AbpMediatROptions>>().Value;

            //var requestHandlerTypes = options.RequestHandlerTypes.ToList(); ;

            var controllerInfos = options.RequestHandlerTypes.Select(t => new ControllerInfo(notification.model, t)).Where(c => !string.IsNullOrEmpty(c.ModuleKey)).ToList();

            controllerInfos
                .ForEach(c =>
                {
                    c.ControllerApiDescriptionModel.ControllerName = c.RequestInfo.ControllerName;

                    //c.ControllerApiDescriptionModel.Interfaces.Clear();

                    c.ControllerApiDescriptionModel.Actions.ToList().ForEach(m =>
                    {
                        if (m.Value.ReturnValue.Type == "MediatR.Unit")
                            m.Value.ReturnValue = new ReturnValueApiDescriptionModel()
                            {
                                Type = "System.Void",
                                TypeSimple = "System.Void"
                            };

                        m.Value.ParametersOnMethod.RemoveAll(p => p.Name == "cancellationToken");

                        var actionName = c.RequestInfo.ActionName;

                        m.Value.UniqueName = actionName;

                        m.Value.Name = actionName;

                        c.ControllerApiDescriptionModel.Actions.Add(actionName, m.Value);
                        c.ControllerApiDescriptionModel.Actions.Remove(m.Key);
                    });

                });

            controllerInfos
                .GroupBy(x => x.RequestInfo.ControllerName)
                .ToList()
                .ForEach(g =>
                {
                    var first = g.First();

                    var others = g.Skip(1).ToList();

                    var module = notification.model.Modules[first.ModuleKey];

                    others
                    .ForEach(other =>
                    {
                        other.ControllerApiDescriptionModel.Actions.ToList().ForEach(otherAction =>
                        {
                            first.ControllerApiDescriptionModel.Actions.Add(otherAction.Key, otherAction.Value);
                        });

                        module.Controllers.Remove(other.ControllerKey);
                    });

                    module.Controllers.Add(first.ControllerType.Namespace + "." + first.RequestInfo.ControllerName, first.ControllerApiDescriptionModel);

                    module.Controllers.Remove(first.ControllerKey);


                });

            //var controllerDatas = notification.model.Modules.SelectMany(m =>
            //{
            //    return m.Value.Controllers
            //    .Where(c => requestHandlerTypes.ContainsKey(c.Value.Type))
            //    .ToDictionary(c => c.Value.Type, y =>
            //    {
            //        var requestData = AbpMediatROptions.GetRequestInfo(requestHandlerTypes[y.Value.Type]);
            //        return (ModuleKey: m.Key, ControllerKey: y.Key, ControllerModel: y.Value);
            //    });
            //}).ToDictionary(x => x.Key, y => y.Value);

            //var allTypeNames = notification.model.Modules.SelectMany(x => x.Value.Controllers).Select(x => x.Value.Type).ToList();

            //allTypeNames.Where(x => requestHandlerTypes.ContainsKey(x)).Select(x =>
            //  {
            //      var requestType = AbpMediatROptions.GetRequestInfo(requestHandlerTypes[x]);
            //      var result = controllerDatas[x];
            //      result.ControllerModel.ControllerName = requestType.ControllerName;
            //      return x;
            //  });

            //var controllers = allTypeNames
            //    .Where(x => requestHandlerTypes.ContainsKey(x))
            //    .Select(x =>
            //{
            //    (ControllerApiDescriptionModel ControllerModel, string ControllerKey, string ModuleKey, string Method)
            //        result = (ControllerModel: null, ControllerKey: null, ModuleKey: null, Method: null);

            //    var requestType = AbpMediatROptions.GetRequestInfo(requestHandlerTypes[x]);

            //    if (requestType.Method == null)
            //        return result;

            //    if (!requestHandlerTypes.ContainsKey(x))
            //        return result;

            //    if (!controllerDatas.ContainsKey(x))
            //        return result;

            //    result.ControllerModel = controllerDatas[x].ControllerModel;

            //    result.ControllerKey = controllerDatas[x].ControllerKey;

            //    result.ModuleKey = controllerDatas[x].ModuleKey;

            //    result.Method = requestType.Method;

            //    return result;
            //}).Where(r => r.ModuleKey != null).ToList();

            //controllers
            //.ToList()
            //.ForEach(c =>
            //{
            //    var handleType = requestHandlerTypes[c.ControllerModel.Type];

            //    var requestType = AbpMediatROptions.GetRequestInfo(handleType);

            //    c.ControllerModel.Interfaces.Clear();
            //    c.ControllerModel.Actions.ToList().ForEach(m =>
            //    {
            //        if (m.Value.ReturnValue.Type == "MediatR.Unit")
            //            m.Value.ReturnValue = new ReturnValueApiDescriptionModel()
            //            {
            //                Type = "System.Void",
            //                TypeSimple = "System.Void"
            //            };
            //        m.Value.ParametersOnMethod.RemoveAll(p => p.Name == "cancellationToken");
            //        var actionName = requestType.ActionName;
            //        m.Value.UniqueName = actionName;
            //        m.Value.Name = actionName;
            //        c.ControllerModel.Actions.Add(actionName, m.Value);
            //        c.ControllerModel.Actions.Remove(m.Key);
            //    });

            //});

            //var query = controllers.Where(x => x.Method == AbpMediatRConsts.Query).FirstOrDefault();
            //var command = controllers.Where(x => x.Method == AbpMediatRConsts.Command).FirstOrDefault();

            //modifyControllerModel(query, AbpMediatRConsts.Query);
            //modifyControllerModel(command, AbpMediatRConsts.Command);


            //void modifyControllerModel((ControllerApiDescriptionModel ControllerModel, string ControllerKey, string ModuleKey, string Method) item, string method)
            //{
            //    var module = notification.model.Modules[item.ModuleKey];
            //    if (item.ControllerModel != null)
            //    {
            //        var handleType = requestHandlerTypes[item.ControllerModel.Type];

            //        var requestType = AbpMediatROptions.GetRequestInfo(handleType);

            //        item.ControllerModel.ControllerName = requestType.ControllerName;

            //        controllers.Where(x => x.Method == method)
            //        .Skip(1)
            //        .ToList()
            //        .ForEach(other =>
            //        {
            //            other.ControllerModel.Actions.ToList().ForEach(otherAction =>
            //            {
            //                item.ControllerModel.Actions.Add(otherAction.Key, otherAction.Value);
            //            });

            //            module.Controllers.Remove(other.ControllerKey);
            //        });

            //        module.Controllers.Add(handleType.Namespace, item.ControllerModel);

            //        module.Controllers.Remove(item.ControllerKey);

            //    }
            //}

            return Task.CompletedTask;
        }
    }
}
