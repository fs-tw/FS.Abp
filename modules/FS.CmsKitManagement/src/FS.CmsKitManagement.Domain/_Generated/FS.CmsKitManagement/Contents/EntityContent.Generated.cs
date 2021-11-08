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
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Data;

namespace FS.CmsKitManagement.Contents
{
    public partial class EntityContent : 
        Volo.Abp.Domain.Entities.Auditing.AuditedAggregateRoot<Guid>,
        Volo.Abp.MultiTenancy.IMultiTenant
    {

        public EntityContent()
        {
            OnCreated();
        }

        public EntityContent(System.Guid id) : this()
        {
            this.Id = id;
        }

        public virtual string EntityType
        {
            get;
            set;
        }

        public virtual string EntityId
        {
            get;
            set;
        }

        public virtual System.Guid EntityContentDefinitionId
        {
            get;
            set;
        }

        public virtual int Sequence
        {
            get;
            set;
        }
        public virtual List<Volo.Abp.NameValue> Properties 
        {

            get
            {
                return this.GetExtraProperty<List<Volo.Abp.NameValue>>(nameof(Properties));
            }
            set
            {
                this.SetProperty(nameof(Properties), value);
            }
        } 

        public virtual System.Guid? TenantId
        {
            get;
            set;
        }

        public virtual EntityContentDefinition EntityContentDefinition
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion
    }

}
