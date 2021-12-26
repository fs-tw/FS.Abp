using AutoFilterer.Extensions;
using System;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;

namespace FS.Abp.AutoFilterer
{
    public class EfCoreFilterBase : global::AutoFilterer.Types.FilterBase
    {
        public override Expression BuildExpression(Type entityType, Expression body)
        {
            var finalExpression = base.BuildExpression(entityType, body);

            var properties = TypeDescriptor.GetProperties(this.GetType(), new[] { new EFCorePropertyAttribute() });

            foreach (PropertyDescriptor filterProperty in properties)
            {
                var _filterProperty = this.GetType().GetProperty(filterProperty.Name);

                var val = filterProperty.GetValue(this);

                var attribute = filterProperty.Attributes.OfType<EFCorePropertyAttribute>().First();

                var bodyParameter = finalExpression is MemberExpression ? finalExpression : body;

                var expression = attribute.BuildExpression(bodyParameter, null, _filterProperty, val);

                finalExpression = finalExpression.Combine(expression, this.CombineWith);

            }

            return finalExpression;
        }
    }


}

