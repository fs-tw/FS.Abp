using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Http.Modeling;

namespace FS.Abp.AspNetCore.Mvc.Commands.ApplicationApiDescriptionModels
{
    public record AddCommand(ApplicationApiDescriptionModel model) : IRequest
    {
        public Action<Type> Action { get; set; }
    }

    public class AddCommandHandler : Volo.Abp.Domain.Services.DomainService, IRequestHandler<AddCommand>
    {
        public Task<Unit> Handle(AddCommand request, CancellationToken cancellationToken)
        {
            var serviceProvider = LazyServiceProvider.LazyGetRequiredService<IServiceProvider>();
            var querys = serviceProvider.GetServices<MediatR.IQuery>().ToList();
            var commands = serviceProvider.GetServices<MediatR.ICommand>().ToList();

            var allTypes = querys.Select(x => x.GetType())
                    .Concat(commands.Select(x => x.GetType()))
                    .ToList();

            addTypes();
            addQuerys();


            return Unit.Task;

            void addQuerys()
            {
                var modules = request.model.GetOrAddModule("mediator", "Mediator");
                ControllersInfo controllersInfo = new ControllersInfo(allTypes);
                controllersInfo.Controllers.ForEach(x =>
                {
                    modules.Controllers.Add(x.Type, x);
                });
            }

            void addTypes()
            {

                allTypes.ForEach(t =>
                {
                    request.Action(t);

                    var outputInterface = Volo.Abp.Reflection.ReflectionHelper
                    .GetImplementedGenericTypes(t, typeof(IRequest<>));

                    if (outputInterface != null)
                    {
                        outputInterface.ForEach(x =>
                        {
                            request.Action(x.GetGenericArguments().FirstOrDefault());
                        });
                    }
                });


            }
        }


    }
}
