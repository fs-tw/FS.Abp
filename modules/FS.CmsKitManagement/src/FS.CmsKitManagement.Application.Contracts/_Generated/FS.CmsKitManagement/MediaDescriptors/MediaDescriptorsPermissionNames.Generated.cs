﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Reflection;

namespace FS.CmsKitManagement.MediaDescriptors
{
    public class MediaDescriptorsPermissionNames
    {
        public const string ModuleName = "FS.CmsKitManagement.MediaDescriptors";
        public static class AttachmentMedia
        {
            public const string Default = ModuleName + ".AttachmentMedia";
            public const string Create = Default + ".Create";
            public const string Update = Default + ".Update";
            public const string Delete = Default + ".Delete";
        }
        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(MediaDescriptorsPermissionNames));
        }
    }
}
