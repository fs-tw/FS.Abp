using System.Collections.Generic;
using static Volo.Abp.Identity.Web.Pages.Identity.Users.EditModalModel;

namespace Volo.Abp.Identity.Web.Pages.Identity.Users
{
    public class OrganizationUnitTreeNodeModel
    {
        public IdentityUserModalPageModel.AssignedOrganizationUnitViewModel[] OrganizationUnits { get; set; }

        public int Depth { get; set; }

        public IdentityUserModalPageModel.OrganizationTreeNode Node { get; set; }
    }
}
