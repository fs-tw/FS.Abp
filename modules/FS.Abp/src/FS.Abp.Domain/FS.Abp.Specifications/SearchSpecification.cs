using FS.Abp.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace FS.Abp.Specifications
{
    public class SearchSpecification<T> : Volo.Abp.Specifications.Specification<T>
    {
        private string _value;
        private string _fields;

        public SearchSpecification(string fields,string value)
        {
            this._value = value;
            this._fields = fields;
        }

        public override System.Linq.Expressions.Expression<Func<T, bool>> ToExpression()
        {
            var entityParameter = Expression.Parameter(typeof(T), "e");
            if (_fields.IsNullOrWhiteSpace() || _value.IsNullOrWhiteSpace())
                return Pass();
            
            var propertyNames = _fields.Split(",");
            var properties = typeof(T)
                .GetProperties(BindingFlags.Public | BindingFlags.Instance)
                .Where(p => propertyNames.Contains(p.Name)).ToList();

            if (properties.Count == 0)
                return Pass();

            var isKeyWordNumber = decimal.TryParse(_value, out var t);

            var predicate = GenerateExpression(properties[0]);

            for (var i = 1; i < properties.Count; i++)
            {
                predicate = Expression.Or(predicate, GenerateExpression(properties[i]));
            }

            return Expression.Lambda<Func<T, bool>>(predicate, entityParameter);

            Expression GenerateExpression(PropertyInfo property)
            {
                return GenerateContainsExpression(property);
                //switch (m)
                //{
                //    case "Contains":
                //        return GenerateContainsExpression(property, i);
                //    case "Equal":
                //        return GenerateEqualExpression(property, i);
                //    default:
                //        return Expression.Constant(false);
                //}

            }

            Expression GenerateContainsExpression(PropertyInfo property)
            {
                Expression result = null;
                if (property.PropertyType.IsNumeric())
                {
                    var method = Type.GetTypeCode(property.PropertyType).GetConverMethod();
                    if (method != null && isKeyWordNumber)
                    {
                        result = Expression.Equal(
                            Expression.Convert(Expression.Property(entityParameter, property.Name), TypeHelper.ToType(Type.GetTypeCode(property.PropertyType))),
                            Expression.Call(null, method, Expression.Constant(_value)));
                    }
                }
                else if (property.PropertyType == typeof(string))
                {

                    var method = typeof(string).GetMethod("Contains", new[] { typeof(string) });
                    result = Expression.Call(Expression.Property(entityParameter, property.Name),
                         method,
                         Expression.Constant(_value));
                }
                if (result == null)
                {
                    return Expression.Constant(false);
                }

                return Expression.Equal(result, Expression.Constant(true));
            }

            Expression<Func<T, bool>> Pass()
            {
                return Expression.Lambda<Func<T, bool>>(Expression.Constant(true), entityParameter);
            }

            //Expression GenerateEqualExpression(PropertyInfo property, int i)
            //{
            //    Expression result = null;

            //    var method = Type.GetTypeCode(property.PropertyType).GetConverMethod();
            //    if (method != null)
            //    {
            //        result = Expression.Equal(
            //            Expression.Convert(Expression.Property(entityParameter, property.Name), TypeHelper.ToType(Type.GetTypeCode(property.PropertyType))),
            //            Expression.Call(null, method, Expression.Constant(_keyWord)));
            //    }

            //    if (result == null)
            //    {
            //        return Expression.Constant(false);
            //    }

            //    return Expression.Equal(result, Expression.Constant(true));
            //}
        }
    }
}
