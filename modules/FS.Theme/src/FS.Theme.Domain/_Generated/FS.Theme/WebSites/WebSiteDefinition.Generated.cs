﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
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

namespace FS.Theme.WebSites
{
    public partial class WebSiteDefinition : 
        Volo.Abp.Domain.Entities.Auditing.AuditedAggregateRoot<Guid>,
        Volo.Abp.MultiTenancy.IMultiTenant
    {

        public WebSiteDefinition()
        {
            OnCreated();
        }

        public virtual string No
        {
            get;
            set;
        }

        public virtual string DisplayName
        {
            get;
            set;
        }

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string LogoFileId
        {
            get;
            set;
        }

        public virtual string Title
        {
            get;
            set;
        }

        public virtual string FaviconFileId
        {
            get;
            set;
        }

        public virtual int Count
        {
            get;
            set;
        }

        public virtual string Copyright
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
