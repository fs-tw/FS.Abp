using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace FS.Abp.Specifications
{
    public class PropertiesEqualitySpecification<T> : Volo.Abp.Specifications.Specification<T>
    {
        public object _toMatchObject;
        public PropertiesEqualitySpecification(object toMatchObject)
        {
            this._toMatchObject = toMatchObject;
        }
        public override Expression<Func<T, bool>> ToExpression()
        {
            var keyProperties = _toMatchObject.GetType().GetProperties();

            var entityParameter = Expression.Parameter(typeof(T), "e");

            var keyValuesConstant = Expression.Constant(_toMatchObject);

            var predicate = GenerateEqualExpression(keyProperties[0]);

            for (var i = 1; i < keyProperties.Length; i++)
            {
                predicate = Expression.AndAlso(predicate, GenerateEqualExpression(keyProperties[i]));
            }

            return Expression.Lambda<Func<T, bool>>(predicate, entityParameter);

            BinaryExpression GenerateEqualExpression(PropertyInfo property) =>
                Expression.Equal(
                    Expression.PropertyOrField(entityParameter, property.Name),
                    Expression.Convert(
                        Expression.Property(
                            keyValuesConstant,
                            property),
                        property.PropertyType));
        }
    }
}
