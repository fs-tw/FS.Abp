using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Volo.Abp.Identity.Web.Pages.Identity.Users
{
    public class IdentityUserModalPageModel : IdentityPageModel
    {
        [BindProperty] public AssignedOrganizationUnitViewModel[] OrganizationUnits { get; set; }

        [BindProperty] public OrganizationTreeNode OrganizationUnitTreeRootNode { get; set; }

        protected OrganizationTreeNode CreateOrganizationTree(OrganizationTreeNode parent)
        {
            var children = OrganizationUnits.Where(ou => ou.ParentId == parent.Id).ToList();

            foreach (var child in children)
            {
                parent.Children.Add(CreateOrganizationTree(new OrganizationTreeNode()
                {
                    Id = child.Id,
                    Children = new List<OrganizationTreeNode>(),
                    Index = OrganizationUnits.FindIndex(ou => ou.Id == child.Id)
                }));
            }

            return parent;
        }

        public class AssignedOrganizationUnitViewModel
        {
            [HiddenInput] public Guid Id { get; set; }

            [HiddenInput] public Guid? ParentId { get; set; }

            [Required] [HiddenInput] public string DisplayName { get; set; }

            [HiddenInput] public bool IsAssigned { get; set; }

            public string Code { get; set; }
        }

        public class OrganizationTreeNode
        {
            public Guid? Id { get; set; }

            public List<OrganizationTreeNode> Children { get; set; }

            public int Index { get; set; }
        }
    }
}
