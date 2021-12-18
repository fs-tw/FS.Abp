using AutoFilterer.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace FS.Abp.AutoFilterer
{
    public static class IFiltersExtension
    {
        public static IQueryable<T> ApplyFiltersTo<T>(this IEnumerable<IFilter> filters, IQueryable<T> query)
        {
            var p = Expression.Parameter(typeof(T), "x");

            var predicate = filters.Select(f =>
            {
                return f.BuildExpression(typeof(T), p);
            }).Aggregate((a, b) => Expression.OrElse(a, b));


            var lambda = Expression.Lambda<Func<T, bool>>(predicate, p);
            return query.Where(lambda);
        }
    }
}

