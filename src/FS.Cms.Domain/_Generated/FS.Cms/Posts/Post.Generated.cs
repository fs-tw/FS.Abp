﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
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

namespace FS.Cms.Posts
{
    public partial class Post : 
        Volo.Abp.Domain.Entities.Auditing.FullAuditedAggregateRoot<Guid>,
        Volo.Abp.MultiTenancy.IMultiTenant
    {

        public Post()
        {
            OnCreated();
        }

        public virtual System.Guid BlogId
        {
            get;
            set;
        }

        public virtual string Title
        {
            get;
            set;
        }

        public virtual string Subtitle
        {
            get;
            set;
        }

        public virtual string Url
        {
            get;
            set;
        }

        public virtual string Content
        {
            get;
            set;
        }

        public virtual bool Published
        {
            get;
            set;
        }

        public virtual System.DateTime? Published_By
        {
            get;
            set;
        }

        public virtual System.DateTime Published_At
        {
            get;
            set;
        }

        public virtual DisplayMode DisplayMode
        {
            get;
            set;
        }

        public virtual int Sequence
        {
            get;
            set;
        }
        public virtual List<String> AttachmentFileUrls 
        {

            get
            {
                return this.GetExtraProperty<List<String>>(nameof(AttachmentFileUrls));
            }
            set
            {
                this.SetExtraProperty(nameof(AttachmentFileUrls), value);
            }
        } 
        public virtual List<FS.Cms.Posts.PostImage> PostImages 
        {

            get
            {
                return this.GetExtraProperty<List<FS.Cms.Posts.PostImage>>(nameof(PostImages));
            }
            set
            {
                this.SetExtraProperty(nameof(PostImages), value);
            }
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
