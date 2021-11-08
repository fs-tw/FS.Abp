using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace FS.Abp.Specifications
{
    public class DiscriminatorSpecification<T> : Volo.Abp.Specifications.Specification<T>
    {
        public static readonly string DiscriminatorPropertyName = "Discriminator";
        private string _value;

        public DiscriminatorSpecification(object input)
        {
            System.Reflection.PropertyInfo prop = input.GetType().GetProperty(DiscriminatorPropertyName);
            if (prop != null)
            {
                _value = prop.GetValue(input)?.ToString();
            }
        }
        public override Expression<Func<T, bool>> ToExpression()
        {
            if (string.IsNullOrEmpty(_value))
                return (x) => true;

            var entityParameter = Expression.Parameter(typeof(T), "e");

            var property = typeof(T)
                .GetProperties(BindingFlags.Public | BindingFlags.Instance)
                .Where(p => p.Name == DiscriminatorPropertyName).SingleOrDefault();

            if (property == null)
                return Pass();

            var predicate = GenerateExpression(property);

            return Expression.Lambda<Func<T, bool>>(predicate, entityParameter);

            Expression GenerateExpression(PropertyInfo property)
            {
                Expression result = null;

                result = Expression.Equal(
                    Expression.Property(entityParameter, property.Name),
                    Expression.Constant(_value));

                return result;//Expression.Equal(result, Expression.Constant(true));

            }

            Expression<Func<T, bool>> Pass()
            {
                return Expression.Lambda<Func<T, bool>>(Expression.Constant(true), entityParameter);
            }
        }
    }
}
