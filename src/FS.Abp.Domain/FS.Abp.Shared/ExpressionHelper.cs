using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace FS.Abp.Shared
{
    //move to spec
    public class ExpressionHelper
    {
        //public static Expression<Func<TEntity, bool>> CreatePropertiesEqualityExpression<TEntity>(object compositekey)
        //{
        //    var keyProperties = compositekey.GetType().GetProperties();

        //    var entityParameter = Expression.Parameter(typeof(TEntity), "e");

        //    var keyValuesConstant = Expression.Constant(compositekey);

        //    var predicate = GenerateEqualExpression(keyProperties[0], 0);

        //    for (var i = 1; i < keyProperties.Length; i++)
        //    {
        //        predicate = Expression.AndAlso(predicate, GenerateEqualExpression(keyProperties[i], i));
        //    }

        //    return Expression.Lambda<Func<TEntity, bool>>(predicate, entityParameter);

        //    BinaryExpression GenerateEqualExpression(PropertyInfo property, int i) =>
        //        Expression.Equal(
        //            Expression.PropertyOrField(entityParameter, property.Name),
        //            Expression.Convert(
        //                Expression.Property(
        //                    keyValuesConstant,
        //                    property),
        //                property.PropertyType));
        //}

        /// <summary>
        /// search in all fields (or) for keyword  or match number
        /// </summary>
        /// <typeparam name="TEntity"></typeparam>
        /// <param name="fields">Name,No</param>
        /// <param name="keyWord">search keyword or match number</param>
        /// <returns></returns>
        //public static Expression<Func<TEntity, bool>> CreateSearchExpression<TEntity>(string fields, string keyWord)
        //{
        //    var isKeyWordNumber = decimal.TryParse(keyWord, out var t);
        //    var propertyNames = fields.Split(",");
        //    var properties = typeof(TEntity)
        //        .GetProperties(BindingFlags.Public | BindingFlags.Instance)
        //        .Where(p => propertyNames.Contains(p.Name)).ToList();

        //    var entityParameter = Expression.Parameter(typeof(TEntity), "e");

        //    var predicate = GenerateExpression("Contains", properties[0], 0);

        //    for (var i = 1; i < properties.Count; i++)
        //    {
        //        predicate = Expression.Or(predicate, GenerateExpression("Contains", properties[i], i));
        //    }

        //    return Expression.Lambda<Func<TEntity, bool>>(predicate, entityParameter);

        //    Expression GenerateExpression(string m, PropertyInfo property, int i)
        //    {
        //        switch (m)
        //        {
        //            case "Contains":
        //                return GenerateContainsExpression(property, i);
        //            case "Equal":
        //                return GenerateEqualExpression(property, i);
        //            default:
        //                return Expression.Constant(false);
        //        }

        //    }

        //    Expression GenerateContainsExpression(PropertyInfo property, int i)
        //    {
        //        Expression result = null;
        //        if (property.PropertyType.IsNumeric())
        //        {
        //            var method = Type.GetTypeCode(property.PropertyType).GetConverMethod();
        //            if (method != null && isKeyWordNumber)
        //            {
        //                result = Expression.Equal(
        //                    Expression.Convert(Expression.Property(entityParameter, property.Name), TypeHelper.ToType(Type.GetTypeCode(property.PropertyType))),
        //                    Expression.Call(null, method, Expression.Constant(keyWord)));
        //            }
        //        }
        //        else if (property.PropertyType == typeof(string))
        //        {

        //            var method = typeof(string).GetMethod("Contains", new[] { typeof(string) });
        //            result = Expression.Call(Expression.Property(entityParameter, property.Name),
        //                 method,
        //                 Expression.Constant(keyWord));
        //        }
        //        if (result == null)
        //        {
        //            return Expression.Constant(false);
        //        }

        //        return Expression.Equal(result, Expression.Constant(true));
        //    }
        //    Expression GenerateEqualExpression(PropertyInfo property, int i)
        //    {
        //        Expression result = null;

        //        var method = Type.GetTypeCode(property.PropertyType).GetConverMethod();
        //        if (method != null)
        //        {
        //            result = Expression.Equal(
        //                Expression.Convert(Expression.Property(entityParameter, property.Name), TypeHelper.ToType(Type.GetTypeCode(property.PropertyType))),
        //                Expression.Call(null, method, Expression.Constant(keyWord)));
        //        }

        //        if (result == null)
        //        {
        //            return Expression.Constant(false);
        //        }

        //        return Expression.Equal(result, Expression.Constant(true));
        //    }
        //}
    }
}
