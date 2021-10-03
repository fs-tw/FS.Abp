using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace FS.Abp.Shared
{
    public static class GetMethodInfoUtil
    {
        // No cast necessary
        public static MethodInfo GetMethodInfo(Action action) => action.Method;
        public static MethodInfo GetMethodInfo<T>(Action<T> action) => action.Method;
        public static MethodInfo GetMethodInfo<T, U>(Action<T, U> action) => action.Method;
        public static MethodInfo GetMethodInfo<TResult>(Func<TResult> fun) => fun.Method;
        public static MethodInfo GetMethodInfo<T, TResult>(Func<T, TResult> fun) => fun.Method;
        public static MethodInfo GetMethodInfo<T, U, TResult>(Func<T, U, TResult> fun) => fun.Method;

        // Cast necessary
        public static MethodInfo GetMethodInfo(Delegate del) => del.Method;
    }
}
