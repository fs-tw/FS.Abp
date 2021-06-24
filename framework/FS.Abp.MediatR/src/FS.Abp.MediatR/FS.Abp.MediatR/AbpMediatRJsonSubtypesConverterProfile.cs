using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Collections;

namespace FS.Abp.MediatR
{
    public class AbpMediatRJsonSubtypesConverterProfile : FS.Abp.AspNetCore.Mvc.JsonSubTypes.JsonSubtypesConverterProfile
    {
        public AbpMediatRJsonSubtypesConverterProfile(
            IServiceProvider serviceProvider
            )
        {
            var querySubType = this.CreateJsonSubtypesConverter<IQuery>("$type");
            var querys = serviceProvider.GetServices<IQuery>();

            querys.ToList().ForEach(t =>
            {
                querySubType.RegisterSubtype(t.GetType());
            });

            var commandSubType = this.CreateJsonSubtypesConverter<ICommand>("$type");
            var commands = serviceProvider.GetServices<ICommand>();

            commands.ToList().ForEach(t =>
            {
                querySubType.RegisterSubtype(t.GetType());
            });

        }
    }
}
