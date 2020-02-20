using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace FS.Abp.Shared
{
    public static class TypeHelper
    {
        public static bool IsNumeric(this Type type)
        {
            switch (Type.GetTypeCode(type))
            {
                case TypeCode.Byte:
                case TypeCode.SByte:
                case TypeCode.UInt16:
                case TypeCode.UInt32:
                case TypeCode.UInt64:
                case TypeCode.Int16:
                case TypeCode.Int32:
                case TypeCode.Int64:
                case TypeCode.Decimal:
                case TypeCode.Double:
                case TypeCode.Single:
                    return true;
                case TypeCode.Object:
                    if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(Nullable<>))
                    {
                        return Nullable.GetUnderlyingType(type).IsNumeric();
                    }
                    return false;
                default:
                    return false;
            }
        }

        /// <summary>
        /// Table that maps TypeCode to it's corresponding Type.
        /// </summary>
        static IReadOnlyDictionary<TypeCode, Type> TypeCodeToTypeMap = new Dictionary<TypeCode, Type>
        {
            { TypeCode.Boolean, typeof(bool) },
            { TypeCode.Byte, typeof(byte) },
            { TypeCode.Char, typeof(char) },
            { TypeCode.DateTime, typeof(DateTime) },
            { TypeCode.DBNull, typeof(DBNull) },
            { TypeCode.Decimal, typeof(decimal) },
            { TypeCode.Double, typeof(double) },
            { TypeCode.Empty, null },
            { TypeCode.Int16, typeof(short) },
            { TypeCode.Int32, typeof(int) },
            { TypeCode.Int64, typeof(long) },
            { TypeCode.Object, typeof(object) },
            { TypeCode.SByte, typeof(sbyte) },
            { TypeCode.Single, typeof(Single) },
            { TypeCode.String, typeof(string) },
            { TypeCode.UInt16, typeof(UInt16) },
            { TypeCode.UInt32, typeof(UInt32) },
            { TypeCode.UInt64, typeof(UInt64) }
        };

        static IReadOnlyDictionary<TypeCode, MethodInfo> TypeCodeToConverMethodMap = new Dictionary<TypeCode, MethodInfo>
        {
            { TypeCode.Boolean, typeof(Convert).GetMethod("ToBoolean", new[] { typeof(object) }) },
            { TypeCode.Byte, typeof(Convert).GetMethod("ToByte", new[] { typeof(object) }) },
            { TypeCode.Char, typeof(Convert).GetMethod("ToChar", new[] { typeof(object) }) },
            { TypeCode.DateTime, typeof(Convert).GetMethod("ToDateTime", new[] { typeof(object) }) },
            //{ TypeCode.DBNull, typeof(DBNull) },
            { TypeCode.Decimal, typeof(Convert).GetMethod("ToDecimal", new[] { typeof(object) }) },
            { TypeCode.Double, typeof(Convert).GetMethod("ToDouble", new[] { typeof(object) }) },
            { TypeCode.String, typeof(Convert).GetMethod("ToString", new[] { typeof(object) }) },
            //{ TypeCode.Empty, null },
            { TypeCode.Int16, typeof(Convert).GetMethod("ToInt16", new[] { typeof(object) }) },
            { TypeCode.Int32, typeof(Convert).GetMethod("ToInt32", new[] { typeof(object) }) },
            { TypeCode.Int64, typeof(Convert).GetMethod("ToInt64", new[] { typeof(object) }) },
            { TypeCode.SByte, typeof(Convert).GetMethod("ToSByte", new[] { typeof(object) }) },
            { TypeCode.Single, typeof(Convert).GetMethod("ToSingle", new[] { typeof(object) }) },
            { TypeCode.UInt16, typeof(Convert).GetMethod("ToUInt16", new[] { typeof(object) }) },
            { TypeCode.UInt32, typeof(Convert).GetMethod("ToUInt32", new[] { typeof(object) }) },
            { TypeCode.UInt64, typeof(Convert).GetMethod("ToUInt64", new[] { typeof(object) }) }
        };

        /// <summary>
        /// Convert a TypeCode ordinal into it's corresponding Type instance.
        /// </summary>
        public static Type ToType(this TypeCode code)
        {
            Type type = null;

            TypeCodeToTypeMap.TryGetValue(code, out type);

            return type;
        }
        public static MethodInfo GetConverMethod(this TypeCode code)
        {
            MethodInfo methodInfo = null;

            TypeCodeToConverMethodMap.TryGetValue(code, out methodInfo);

            return methodInfo;
        }
    }
}
