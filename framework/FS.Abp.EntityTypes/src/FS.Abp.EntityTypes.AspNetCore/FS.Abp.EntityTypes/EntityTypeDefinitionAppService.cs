using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace FS.Abp.EntityTypes
{
    public class EntityTypeDefinitionAppService : Volo.Abp.Application.Services.ApplicationService, IEntityTypeDefinitionAppService
    {
        protected EntityTypeOptions Options { get; }

        public EntityTypeDefinitionAppService(IOptions<EntityTypeOptions> options)
        {
            Options = options.Value;
        }

        public List<EntityType> GetEntityTypeDefinitionList()
        {
            var entityTypes = Options.ToList();
            return entityTypes.Select(et =>
            {
                return new EntityType()
                {
                    Name = et.Key.Name,
                    Definitions = et.Value.Select(e =>
                    {
                        return e.Value;
                    }).ToList()
                };
            }).ToList();
        }

    }
}
