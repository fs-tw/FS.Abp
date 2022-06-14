﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.4
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Localization;
using FS.Printer.Localization;
using FS.Printer.Permissions;

namespace FS.Printer.Printing.Permissions
{
    public partial class PrintingPermissionDefinitionProvider : Volo.Abp.Authorization.Permissions.PermissionDefinitionProvider
    {
        public override void Define(Volo.Abp.Authorization.Permissions.IPermissionDefinitionContext context)
        {
            var group = context.GetGroup(PrinterPermissions.GroupName);

            var PrintDocumentDefinition = group.AddPermission(PrintingPermissionNames.PrintDocumentDefinition.Default,L(PrintingPermissionNames.PrintDocumentDefinition.Default));
            PrintDocumentDefinition.AddChild(PrintingPermissionNames.PrintDocumentDefinition.Create , L("DisplayName:PrintDocumentDefinition.Create"));
            PrintDocumentDefinition.AddChild(PrintingPermissionNames.PrintDocumentDefinition.Update , L("DisplayName:PrintDocumentDefinition.Update"));
            PrintDocumentDefinition.AddChild(PrintingPermissionNames.PrintDocumentDefinition.Delete , L("DisplayName:PrintDocumentDefinition.Delete"));

            CustomizeDefine(context);
        }

        partial void CustomizeDefine(Volo.Abp.Authorization.Permissions.IPermissionDefinitionContext context);

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<PrinterResource>(name);
        }
    }
}