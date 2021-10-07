using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using Volo.Abp;
using Volo.CmsKit;

namespace FS.Abp.EntityTypes
{
    public class EntityTypeOptions
    {
        private readonly IDictionary<Type, EntityTypeDefinition> _store;
        public EntityTypeOptions()
        {
            _store = new Dictionary<Type, EntityTypeDefinition>();
        }
        public List<KeyValuePair<Type, EntityTypeDefinition>> GetList()
        {
            return _store.ToList();
        }
        public void AddOrReplaceDefaults(params Type[] entities)
        {
            foreach (var e in entities)
            {
                var entityTypeDefinition = new DefaultEntityTypeDefinition(e);
                _store[e] = entityTypeDefinition;
            }
        }
        public void AddOrReplace<T>(EntityTypeDefinition entityTypeDefinition = null)
        {
            if (entityTypeDefinition == null)
                entityTypeDefinition = new DefaultEntityTypeDefinition(typeof(T));

            _store[typeof(T)] = entityTypeDefinition;
        }

        public EntityTypeDefinition Get(Type type)
        {
            return _store[type];
        }
        public EntityTypeDefinition Get<T>()
        {
            return _store[typeof(T)];
        }

    }
    public class EntityTypeOption
    {
        private readonly IDictionary<Type, EntityTypeOptions> _store;

        public EntityTypeOption()
        {
            _store = new Dictionary<Type, EntityTypeOptions>();
        }

        public List<KeyValuePair<Type, EntityTypeOptions>> GetList()
        {
            return _store.ToList();
        }

        public EntityTypeOptions GetOrNull<TEntity>()
        {
            return _store.GetOrDefault(typeof(TEntity));
        }

        public EntityTypeOptions GetOrNull(Type type)
        {
            return _store.GetOrDefault(type);
        }

        public bool Contains(Type type)
        {
            return _store.ContainsKey(type);
        }

        public void Entity<TEntity>([NotNull] Action<EntityTypeOptions> optionsAction)
        {
            Check.NotNull(optionsAction, nameof(optionsAction));

            optionsAction(
                _store.GetOrAdd(
                    typeof(TEntity),
                    () => new EntityTypeOptions()
                )
            );
        }
    }
}
