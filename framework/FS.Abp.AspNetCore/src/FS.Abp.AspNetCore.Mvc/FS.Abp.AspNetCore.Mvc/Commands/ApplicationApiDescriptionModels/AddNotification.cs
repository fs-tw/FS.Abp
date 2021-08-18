using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Http.Modeling;
using Volo.Abp.MediatR;

namespace FS.Abp.AspNetCore.Mvc.Notifications.ApplicationApiDescriptionModels
{
    public record AddNotification(ApplicationApiDescriptionModel model) : INotification
    {
        public Action<Type> Action { get; set; }
    }

    public class AddNotificationHandler : Volo.Abp.Domain.Services.DomainService,INotificationHandler<AddNotification>
    {

        public Task Handle(AddNotification notification, CancellationToken cancellationToken)
        {
            var serviceProvider = LazyServiceProvider.LazyGetRequiredService<IServiceProvider>();
            var options = serviceProvider.GetService<IOptions<AbpMediatROptions>>().Value;

            var querys = serviceProvider.GetServices<MediatR.IQuery>().ToList();
            var commands = serviceProvider.GetServices<MediatR.ICommand>().ToList();

            var allTypes = options.MediatRTypes;

            addTypes();
            addMediatRApis();

            return Task.CompletedTask;

            void addMediatRApis()
            {
                options.ModuleNames.ForEach(x =>
                {
                    var typesOfModule = options.MediatRTypesOfModule(x);
                    var modules = notification.model.GetOrAddModule(x, x);
                    ControllersInfo controllersInfo = new ControllersInfo(typesOfModule);
                    controllersInfo.Controllers.ForEach(x =>
                    {
                        modules.Controllers.Add(x.Type, x);
                    });
                });


            }

            void addTypes()
            {

                allTypes.ForEach(t =>
                {
                    notification.Action(t);

                    var outputInterface = Volo.Abp.Reflection.ReflectionHelper
                    .GetImplementedGenericTypes(t, typeof(IRequest<>));

                    if (outputInterface != null)
                    {
                        outputInterface.ForEach(x =>
                        {
                            notification.Action(x.GetGenericArguments().FirstOrDefault());
                        });
                    }
                });


            }
        }
    }
}
