﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.Contents
{
    public partial interface IContentsStore : IDomainService //auto-generated
    {
        IContentDefinitionRepository ContentDefinition { get; }
        IContentPropertyRepository ContentProperty { get; }
        IEntityContentRepository EntityContent { get; }
        IEntityContentDefinitionRepository EntityContentDefinition { get; }
    }
}
