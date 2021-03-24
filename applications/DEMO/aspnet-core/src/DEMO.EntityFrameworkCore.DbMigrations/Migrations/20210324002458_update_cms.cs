using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DEMO.Migrations
{
    public partial class update_cms : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FormManagementVersions_FormManagementDocumentDefinitions_DocumentDefinitionId",
                table: "FormManagementVersions");

            migrationBuilder.DropIndex(
                name: "IX_FormManagementVersions_DocumentDefinitionId",
                table: "FormManagementVersions");

            migrationBuilder.DropColumn(
                name: "Content",
                table: "CmsPosts");

            migrationBuilder.DropColumn(
                name: "IconUrl",
                table: "CmsBlogs");

            migrationBuilder.DropColumn(
                name: "ListStyle",
                table: "CmsBlogs");

            migrationBuilder.DropColumn(
                name: "Url",
                table: "CmsBlogs");

            migrationBuilder.RenameColumn(
                name: "Url",
                table: "CmsPosts",
                newName: "LinkUrl");

            migrationBuilder.AlterColumn<Guid>(
                name: "PrevVersionId",
                table: "FormManagementVersions",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<Guid>(
                name: "NextVersionId",
                table: "FormManagementVersions",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddColumn<string>(
                name: "ItemId",
                table: "FormManagementRecordItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Sequence",
                table: "FormManagementItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "Static",
                table: "CmsBlogs",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ItemId",
                table: "FormManagementRecordItems");

            migrationBuilder.DropColumn(
                name: "Sequence",
                table: "FormManagementItems");

            migrationBuilder.DropColumn(
                name: "Static",
                table: "CmsBlogs");

            migrationBuilder.RenameColumn(
                name: "LinkUrl",
                table: "CmsPosts",
                newName: "Url");

            migrationBuilder.AlterColumn<Guid>(
                name: "PrevVersionId",
                table: "FormManagementVersions",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "NextVersionId",
                table: "FormManagementVersions",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "CmsPosts",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IconUrl",
                table: "CmsBlogs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ListStyle",
                table: "CmsBlogs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "CmsBlogs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersions_DocumentDefinitionId",
                table: "FormManagementVersions",
                column: "DocumentDefinitionId");

            migrationBuilder.AddForeignKey(
                name: "FK_FormManagementVersions_FormManagementDocumentDefinitions_DocumentDefinitionId",
                table: "FormManagementVersions",
                column: "DocumentDefinitionId",
                principalTable: "FormManagementDocumentDefinitions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
