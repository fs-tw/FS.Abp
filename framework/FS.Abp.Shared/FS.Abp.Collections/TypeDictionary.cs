using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using Volo.Abp;

namespace FS.Abp.Collections
{
    public abstract class TypeDictionary<TValue> : Dictionary<Type, TValue>
    {
        protected abstract Func<Type, TValue> DefaultFactory { get; }

        public TValue GetOrDefault<TKey>()
        {
            return this.GetOrDefault(typeof(TKey));
        }

        public void GetOrAdd<TKey>([NotNull] Action<TValue> optionsAction, Func<Type, TValue> factory = null)
        {
            Check.NotNull(optionsAction, nameof(optionsAction));

            optionsAction(
                this.GetOrAdd(
                    typeof(TKey),
                    factory ?? DefaultFactory
                )
            );
        }

        public void AddOrReplace<TKey>(TValue value = default)
        {
            value = value ?? DefaultFactory.Invoke(typeof(TValue));
            this[typeof(TKey)] = value;
        }

        public void AddOrReplace(params (Type type, TValue value)[] items)
        {
            foreach (var i in items)
            {
                var value = i.value ?? DefaultFactory.Invoke(i.type);
                this[i.type] = value;
            }
        }
        public void AddOrReplace(params Type[] items)
        {
            foreach (var i in items)
            {
                var value = DefaultFactory.Invoke(i);
                this[i] = value;
            }
        }

    }
}
