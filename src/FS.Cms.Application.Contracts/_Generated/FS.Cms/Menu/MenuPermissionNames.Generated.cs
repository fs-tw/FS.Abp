﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 2.0.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Reflection;

namespace FS.Cms.Menu
{
    public class MenuPermissionNames
    {
        public const string GroupName = "FS.Cms.Menu";

        public static class 前台內容管理
        {
            public const string Default = GroupName + ".前台內容管理";
            public const string 最新消息管理 = Default + ".最新消息管理";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(MenuPermissionNames));
        }
    }
}
