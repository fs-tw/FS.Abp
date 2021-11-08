using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{

    public class DefaultEntityTypeStore
        : Volo.Abp.Domain.Services.DomainService, IEntityTypeStore
    {
        protected EntityTypeOptions Options { get; }
        public DefaultEntityTypeStore(IOptions<EntityTypeOptions> options)
        {
            Options = options.Value;
        }

        public List<EntityType> GetList()
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

        //public List<string> FindEntityTypeFromEntity(string typeName)
        //{
        //    var entityTypes = Options.ToList();
        //    return entityTypes.Where(x => x.Value.ToList().Any(y => y.Value.EntityType == typeName))
        //        .Select(x => x.Key.Name).ToList();
        //}

        //public List<string> FindEntityTypeFromEntity<T>()
        //{
        //    var entityTypes = Options.ToList();
        //    return entityTypes.Where(x => x.Value.ToList().Any(y => y.Key == typeof(T)))
        //        .Select(x => x.Key.Name).ToList();
        //}

    }
}
