using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace FS.Abp.AspNetCore.Mvc.JsonSubTypes
{
    public class DiscriminatorSpecification<T> : Volo.Abp.Specifications.Specification<T>
    {
        public static readonly string DiscriminatorPropertyName = "Discriminator";
        private int _value;

        public DiscriminatorSpecification(object input)
        {
            System.Reflection.PropertyInfo prop = input.GetType().GetProperty(DiscriminatorPropertyName);
            if (prop != null)
            {
                _value = (int)prop.GetValue(input);
            }
        }
        public override System.Linq.Expressions.Expression<Func<T, bool>> ToExpression()
        {

            var entityParameter = Expression.Parameter(typeof(T), "e");

            var property = typeof(T)
                .GetProperties(BindingFlags.Public | BindingFlags.Instance)
                .Where(p => p.Name == DiscriminatorPropertyName).SingleOrDefault();

            if (_value == 0 || property == null)
                return Pass();

            var predicate = GenerateExpression(property);

            return Expression.Lambda<Func<T, bool>>(predicate, entityParameter);

            Expression GenerateExpression(PropertyInfo property)
            {
                Expression result = null;

                result = Expression.Equal(
                    Expression.Property(entityParameter, property.Name),
                    Expression.Constant(Enum.ToObject(property.PropertyType, _value)));

                return Expression.Equal(result, Expression.Constant(true));

            }

            Expression<Func<T, bool>> Pass()
            {
                return Expression.Lambda<Func<T, bool>>(Expression.Constant(true), entityParameter);
            }
        }
    }
}
