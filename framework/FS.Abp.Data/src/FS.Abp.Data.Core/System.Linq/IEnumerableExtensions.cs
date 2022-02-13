﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace System.Linq
{
    public static class IEnumerableExtensions
    {
        public static async Task<Dictionary<TKey, TValue>> ToDictionaryAsync<TInput, TKey, TValue>(
            this IEnumerable<TInput> enumerable,
            Func<TInput, TKey> syncKeySelector,
            Func<TInput, Task<TValue>> asyncValueSelector)
        {
            Dictionary<TKey, TValue> dictionary = new Dictionary<TKey, TValue>();

            foreach (var item in enumerable)
            {
                var key = syncKeySelector(item);

                var value = await asyncValueSelector(item);

                dictionary.Add(key, value);
            }

            return dictionary;
        }

        public static async Task<IEnumerable<TValue>> SelectAsync<TInput, TValue>(
            this IEnumerable<TInput> enumerable,
            Func<TInput, Task<TValue>> asyncValueSelector)
        {
            List<TValue> array = new List<TValue>();

            foreach (var item in enumerable)
            {

                var value = await asyncValueSelector(item);

                array.Add(value);
            }

            return array;
        }

        public static async Task ForEachAsync<TInput>(
            this IEnumerable<TInput> enumerable,
            Func<TInput, Task> action)
        {

            foreach (var item in enumerable)
            {
                await action(item);
            }
        }

        public static async Task<IEnumerable<IGrouping<TKey, TSource>>>
            GroupByAsync<TSource, TKey>(this IEnumerable<TSource> source,
            Func<TSource, Task<TKey>> keySelector)
        {
            var tasks = source.Select(async item => (Key: await keySelector(item), Item: item));
            var entries = await Task.WhenAll(tasks);
            return entries.GroupBy(entry => entry.Key, entry => entry.Item);
        }

        public static IEnumerable<T> Flatten<T>(this IEnumerable<T> e, Func<T, IEnumerable<T>> f) => e.SelectMany(c => f(c).Flatten(f)).Concat(e);
    }

}
