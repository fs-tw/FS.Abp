using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Data;
using Newtonsoft.Json;

namespace FS.Abp.Coding
{
    public partial class Codes : 
        Volo.Abp.Domain.Entities.Auditing.AuditedAggregateRoot<Guid>,
        Volo.Abp.MultiTenancy.IMultiTenant,
        EasyAbp.Abp.Trees.ITree<Codes>
    {

        public Codes()
        {
            this.Enable = true;
            this.CodeList = new List<Codes>();
            this.Children = new List<Codes>();
            OnCreated();
        }

        public Codes(System.Guid id) : this()
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

        public virtual string Description
        {
            get;
            set;
        }

        public virtual string Code
        {
            get;
            set;
        }

        public virtual int Level
        {
            get;
            set;
        }

        public virtual System.Guid? DefinitionId
        {
            get;
            set;
        }

        public virtual System.Guid? ParentId
        {
            get;
            set;
        }

        public virtual bool Enable
        {
            get;
            set;
        }

        public virtual System.Guid? TenantId
        {
            get;
            set;
        }

        public virtual IList<Codes> CodeList
        {
            get;
            set;
        }

        public virtual Codes Definition
        {
            get;
            set;
        }

        public virtual ICollection<Codes> Children
        {
            get;
            set;
        }

        public virtual Codes Parent
        {
            get;
            set;
        }


        #region Extensibility Method Definitions

        partial void OnCreated();

        #endregion

        [JsonProperty("Id")]
        private Guid _jsonId
        {
            get { return this.Id; }
            set { this.Id = value; }
        }
    }

}
