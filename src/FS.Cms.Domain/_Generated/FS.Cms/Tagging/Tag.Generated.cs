﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace FS.Cms.Tagging
{
    public partial class Tag : 
        Volo.Abp.Domain.Entities.Auditing.FullAuditedAggregateRoot<Guid>,
        Volo.Abp.MultiTenancy.IMultiTenant
    {

        public Tag()
        {
            OnCreated();
        }

        public virtual string Name
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string UsageCount
        {
            get;
            set;
        }

        public virtual System.Guid? TenantId
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion
    }

}
