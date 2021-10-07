using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{

    public class DefaultEntityTypeDefinitionStore
        : Volo.Abp.Domain.Services.DomainService, IEntityTypeDefinitionStore
    {
        protected EntityTypeOption Options { get; }
        public DefaultEntityTypeDefinitionStore(IOptions<EntityTypeOption> options)
        {
            Options = options.Value;
        }

        public List<EntityTypeModel> GetList()
        {
            var entityTypes = Options.GetList();
            return entityTypes.Select(et =>
            {
                var entities = et.Value.GetList();
                var result = new Dictionary<string, List<string>>();

                return new EntityTypeModel()
                {
                    Name = et.Key.Name,
                    Entities = entities.Select(e =>
                    {
                        return e.Value.EntityType;
                    }).ToList()
                };
            }).ToList();
        }

        public List<string> FindEntityTypeFromEntity(string typeName)
        {
            var entityTypes = Options.GetList();
            return entityTypes.Where(x => x.Value.GetList().Any(y => y.Value.EntityType == typeName))
                .Select(x => x.Key.Name).ToList();
        }

        public List<string> FindEntityTypeFromEntity<T>()
        {
            var entityTypes = Options.GetList();
            return entityTypes.Where(x => x.Value.GetList().Any(y => y.Key == typeof(T)))
                .Select(x => x.Key.Name).ToList();
        }

    }
}
