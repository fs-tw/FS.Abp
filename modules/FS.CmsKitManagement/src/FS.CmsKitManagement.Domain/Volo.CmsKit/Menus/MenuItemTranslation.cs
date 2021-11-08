using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Events;
using Volo.Abp.EventBus;
using Volo.CmsKit.Pages;

namespace Volo.CmsKit.Menus
{
    public class MenuItemTranslation
    {
        public string DisplayName { get; set; }

    }

}
