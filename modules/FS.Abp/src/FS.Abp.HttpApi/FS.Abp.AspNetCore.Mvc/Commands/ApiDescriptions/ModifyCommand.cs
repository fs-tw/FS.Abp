using MediatR;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Http.Modeling;

namespace FS.Abp.AspNetCore.Mvc.Commands.ApiDescriptions
{
    public record ModifyCommand(
            ApiDescription ApiDescription,
            ApplicationApiDescriptionModel ApplicationApiDescriptionModel,
            ModuleApiDescriptionModel ModuleApiDescriptionModel,
            ControllerApiDescriptionModel ControllerApiDescriptionModel,
            ActionApiDescriptionModel ActionApiDescriptionModel
        ) : global::MediatR.IRequest
    {

    }
    public class ModifyCommandHandler : Volo.Abp.Domain.Services.DomainService, global::MediatR.IRequestHandler<ModifyCommand>
    {
        private readonly AspNetCoreApiDescriptionModelProviderOptions _options;
        public ModifyCommandHandler(
            IOptions<AspNetCoreApiDescriptionModelProviderOptions> options
            )
        {
            _options = options.Value;
        }

        public async Task<Unit> Handle(ModifyCommand request, CancellationToken cancellationToken)
        {
            var groupName = request.ApiDescription.GroupName;
            if (groupName != "MediatorTestApi") return Unit.Value;
            if (request.ActionApiDescriptionModel.Name == "Query")
            {

            }
            return Unit.Value;
        }

    }
}
