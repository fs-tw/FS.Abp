using System;
using System.Collections.Generic;
using System.Text;

namespace System.Linq
{
    public static class IEnumerableExtensions
    {
        public static IEnumerable<T> Flatten<T>(this IEnumerable<T> e, Func<T, IEnumerable<T>> f
        ) => e.SelectMany(c => f(c).Flatten(f)).Concat(e);
    }
}
