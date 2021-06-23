﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.3.0
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

namespace FS.CmsKitManagement.Routes
{
    public partial class Route : 
        Volo.Abp.Domain.Entities.Auditing.AuditedAggregateRoot<Guid>,
        Volo.Abp.MultiTenancy.IMultiTenant,
        EasyAbp.Abp.Trees.ITree<Route>
    {

        public Route()
        {
            this.Children = new List<Route>();
            OnCreated();
        }

        public Route(System.Guid id) : this()
        {
            this.Id = id;
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

        public virtual System.Guid RouteDefinitionId
        {
            get;
            set;
        }

        public virtual string Code
        {
            get;
            set;
        }

        public virtual System.Guid? ParentId
        {
            get;
            set;
        }

        public virtual UrlType UrlType
        {
            get;
            set;
        }

        public virtual string Url
        {
            get;
            set;
        }

        public virtual int Level
        {
            get;
            set;
        }

        public virtual bool IsHidden
        {
            get;
            set;
        }

        public virtual System.Guid? TenantId
        {
            get;
            set;
        }

        public virtual RouteDefinition RouteDefinition
        {
            get;
            set;
        }

        public virtual ICollection<Route> Children
        {
            get;
            set;
        }

        public virtual Route Parent
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion
    }

}
