using System;
using System.Collections.Generic;
using System.Linq;

namespace Volo.FileManagement.Blazor.Pages.FileManagement
{
    public class DirectoryDescriptorTreeModel
    {
        public Guid? Id { get; }

        public string Name { get; }

        public Guid? ParentId { get;}

        public bool HasChildren => Children.Any();

        public bool Collapsed { get; set; }

        public List<DirectoryDescriptorTreeModel> Children { get; set; }

        public List<DirectoryDescriptorTreeModel> DirectoryDescriptorInfos { get; set; }

        public string Icon => Collapsed ? "fa-angle-right" : "fa-angle-down";

        public DirectoryDescriptorTreeModel(Guid? id, string name, Guid? parentId, bool collapsed = true)
        {
            Id = id;
            Name = name;
            ParentId = parentId;
            Children = new List<DirectoryDescriptorTreeModel>();
            ChangeCollapsed(collapsed);
        }

        public void ChangeCollapsed(bool collapsed)
        {
            Collapsed = collapsed;
        }
    }
}
