using System.Collections.Generic;
using JetBrains.Annotations;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout.Navigation
{
    public class MenuItemViewModel
    {
        public ApplicationMenuItem MenuItem { get; set; }

        public IList<MenuItemViewModel> Items { get; set; }

        public bool IsActive { get; set; }

        public bool IsOpen { get; set; }

        [CanBeNull]
        public MenuItemViewModel Parent { get; set; }

        public void Activate()
        {
            Parent?.Activate();
            IsActive = true;
        }

        public void Deactivate()
        {
            foreach (var childItem in Items)
            {
                childItem.Deactivate();
            }

            IsActive = false;
        }

        public void Open()
        {
            Parent?.Open();
            IsOpen = true;
        }

        public void Close()
        {
            foreach (var childItem in Items)
            {
                childItem.Close();
            }

            IsOpen = false;
        }

        public void SetParents([CanBeNull] MenuItemViewModel parent)
        {
            Parent = parent;

            foreach (var childItem in Items)
            {
                childItem.SetParents(this);
            }
        }
    }
}
