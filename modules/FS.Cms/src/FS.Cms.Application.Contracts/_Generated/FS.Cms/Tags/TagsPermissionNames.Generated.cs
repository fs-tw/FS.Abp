﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Reflection;

namespace FS.Cms.Tags
{
    public class TagsPermissionNames
    {
        public const string GroupName = "FS.Cms.Tags";

        public static class Tag
        {
            public const string Default = GroupName + ".Tag";
            public const string Create = Default + ".Create";
            public const string Delete = Default + ".Delete";
            public const string Update = Default + ".Update";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(TagsPermissionNames));
        }
    }
}
