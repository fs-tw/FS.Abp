﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Reflection;

namespace FS.CodingManagement.Codes
{
    public class CodesPermissionNames
    {
        public const string ModuleName = "FS.CodingManagement.Codes";
        public static class Coding
        {
            public const string Default = ModuleName + ".Coding";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(CodesPermissionNames));
        }
    }
}
