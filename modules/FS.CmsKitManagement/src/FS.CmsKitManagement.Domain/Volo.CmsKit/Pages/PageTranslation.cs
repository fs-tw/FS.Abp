using FS.Abp.EntityTypes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;

namespace Volo.CmsKit.Pages
{
    public class PageTranslation
    {
        public string Title { get; set; }

        public string Content { get; set; }
    }

}
