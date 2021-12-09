using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp.Collections;
using Volo.Abp.MediatR;

namespace FS.Abp.MediatR
{
    public class AbpMediatRJsonSubtypesConverterProfile : FS.Abp.JsonSubTypes.JsonSubtypesConverterProfile
    {
        public AbpMediatRJsonSubtypesConverterProfile(
            IServiceProvider serviceProvider
            )
        {
            var options = serviceProvider.GetService<IOptions<AbpMediatROptions>>().Value;

            var querySubType = this.CreateJsonSubtypesConverter<IQuery>("$type");
            var querys = options.QueryTypes;

            querys.ToList().ForEach(t =>
            {
                querySubType.RegisterSubtype(t);
            });

            var commandSubType = this.CreateJsonSubtypesConverter<ICommand>("$type");
            
            var commands = options.CommandTypes;

            commands.ToList().ForEach(t =>
            {
                commandSubType.RegisterSubtype(t);
            });

        }
    }
}
