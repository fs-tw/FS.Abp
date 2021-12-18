using FS.Abp.AspNetCore.Mvc.Notifications.ApplicationApiDescriptionModels;
using FS.Abp.MediatR;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http.Modeling;
using Volo.Abp.Reflection;
using MR = MediatR;

namespace FS.Abp.AspNetCore.Mvc
{
    [Dependency(ReplaceServices = true)]
    public class AspNetCoreApiDescriptionModelProvider : IApiDescriptionModelProvider, ITransientDependency
    {
        private readonly AbpMediatROptions _options;

        private readonly MR.IMediator _mediator;

        private readonly IApiDescriptionModelProvider _apiDescriptionModelProvider;

        public AspNetCoreApiDescriptionModelProvider(
            IOptions<AbpMediatROptions> options,
            MR.IMediator mediator,
            Volo.Abp.AspNetCore.Mvc.AspNetCoreApiDescriptionModelProvider apiDescriptionModelProvider
            )
        {
            _apiDescriptionModelProvider = apiDescriptionModelProvider;
            _mediator = mediator;
            _options = options.Value;
        }

        public ApplicationApiDescriptionModel CreateApiModel(ApplicationApiDescriptionModelRequestDto input)
        {
            var model = _apiDescriptionModelProvider.CreateApiModel(input);

            _mediator.Publish(new ModifyModel(model));

            return model;
        }
    }
}




