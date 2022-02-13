using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using Volo.Abp;

namespace FS.Abp.Collections
{
    public abstract class TypeDictionary<TValue> : Dictionary<Type, TValue>
    {
        public TValue GetOrDefault<TKey>()
        {
            return this.GetOrDefault(typeof(TKey));
        }

        public void GetOrAdd<TKey>([NotNull] Action<TValue> optionsAction, Func<Type, TValue> factory = null)
        {
            Volo.Abp.Check.NotNull(optionsAction, nameof(optionsAction));

            if (factory == null)
            {
                var instance = (TValue)Activator.CreateInstance(typeof(TValue));
                factory = (type) => instance;
            }

            optionsAction(
                this.GetOrAdd(
                    typeof(TKey),
                    factory
                )
            );
        }

        public virtual void AddOrReplace<TKey>(TValue value = default)
        {
            this[typeof(TKey)] = value;
        }
    }
}
