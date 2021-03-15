﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
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
using Volo.Abp.Data;

namespace FS.FormManagement.Documents
{
    public partial class Version : 
        Volo.Abp.Domain.Entities.Auditing.AuditedAggregateRoot<Guid>,
        Volo.Abp.MultiTenancy.IMultiTenant
    {

        public Version()
        {
            OnCreated();
        }

        public virtual string No
        {
            get;
            set;
        }

        public virtual System.Guid? PrevVersionId
        {
            get;
            set;
        }

        public virtual System.Guid? NextVersionId
        {
            get;
            set;
        }

        public virtual System.Guid DocumentDefinitionId
        {
            get;
            set;
        }

        public virtual System.Guid? TenantId
        {
            get;
            set;
        }

        public virtual DocumentDefinition DocumentDefinition
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion
    }

}