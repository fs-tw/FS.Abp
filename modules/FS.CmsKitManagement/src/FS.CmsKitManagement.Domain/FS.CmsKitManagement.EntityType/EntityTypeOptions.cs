using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp;
using Volo.CmsKit;

namespace FS.CmsKitManagement.EntityType
{
    public class EntityTypeOptions<TEntity> :
        Dictionary<Type, EntityTypeDefinition>
    {
        public void AddOrReplace<T>()
        {
            this[typeof(T)]= new DefaultEntityTypeDefinition(typeof(T));
        }

        public EntityTypeDefinition Get(Type type)
        {
            return this[type];
        }
        public EntityTypeDefinition Get<T>()
        {
            return this[typeof(T)];
        }

    }
    public class EntityTypeOptions
    {
        private readonly IDictionary<Type, object> _options;

        public EntityTypeOptions()
        {
            _options = new Dictionary<Type, object>();
        }

        public EntityTypeOptions<TEntity> GetOrNull<TEntity>()
        {
            return _options.GetOrDefault(typeof(TEntity)) as EntityTypeOptions<TEntity>;
        }

        public void Entity<TEntity>([NotNull] Action<EntityTypeOptions<TEntity>> optionsAction)
        {
            Check.NotNull(optionsAction, nameof(optionsAction));

            optionsAction(
                _options.GetOrAdd(
                    typeof(TEntity),
                    () => new EntityTypeOptions<TEntity>()
                ) as EntityTypeOptions<TEntity>
            );
        }
    }
}
