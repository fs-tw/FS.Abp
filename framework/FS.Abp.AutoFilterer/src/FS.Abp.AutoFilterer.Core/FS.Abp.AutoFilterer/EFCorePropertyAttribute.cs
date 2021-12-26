using AutoFilterer.Attributes;
using AutoFilterer.Enums;
using System;
using System.Linq.Expressions;
using System.Reflection;

namespace FS.Abp.AutoFilterer
{
    public class EFCorePropertyAttribute : FilteringOptionsBaseAttribute
    {
        public override Expression BuildExpression(Expression expressionBody, PropertyInfo targetProperty, PropertyInfo filterProperty, object value)
        {

            var type = Type.GetType("Microsoft.EntityFrameworkCore.EF, Microsoft.EntityFrameworkCore");

            if (type == null)
                throw new Exception("didn't load Microsoft.EntityFrameworkCore assembly");

            var methodInfo = type.GetMethod("Property").MakeGenericMethod(filterProperty.PropertyType);

            Expression left = Expression.Call(methodInfo, expressionBody, Expression.Constant(filterProperty.Name));
            Expression right = Expression.Constant(value);

            return Expression.Equal(left, right);
        }
    }


}

