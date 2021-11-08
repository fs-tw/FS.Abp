using FS.Abp.EntityTypes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;
using Volo.CmsKit.Pages;

namespace Volo.CmsKit.Blogs
{
    public class BlogTranslation
    {
        public string Name { get; set; }
    }
    public class BlogPostTranslation
    {
        public virtual string Title { get; set; }

        public virtual string ShortDescription { get; set; }

        [EntityPropertyDefinition(
            Type = "html"
            )]
        public virtual string Content { get; set; }


    }


}
