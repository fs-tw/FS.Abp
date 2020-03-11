using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace AutoMapper
{
    public static class IMappingExpressionExtensions
    {
        public static IMappingExpression<TSource, TDestination> IgnoreAllNonExisting<TSource, TDestination>
        (this IMappingExpression<TSource, TDestination> expression)
        {
            var flags = BindingFlags.Public | BindingFlags.Instance;
            var sourceType = typeof(TSource);
            var destinationProperties = typeof(TDestination).GetProperties(flags).Select(x => x.Name);
            var sourceProperties = sourceType.GetProperties(flags).Select(x => x.Name);

            //destinationProperties.Except(sourceProperties)
            //    .ToList().ForEach(propName =>
            //    {
            //        expression.ForMember(propName, opt => opt.Ignore());
            //    });
            foreach (var property in destinationProperties)
            {
                if (sourceType.GetProperty(property, flags) == null)
                {
                    expression.ForMember(property, opt => opt.Ignore());
                }
            }
            return expression;
        }
    }
}
