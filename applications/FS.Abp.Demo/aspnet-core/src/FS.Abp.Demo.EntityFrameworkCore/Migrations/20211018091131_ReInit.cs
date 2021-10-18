using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Abp.Demo.Migrations
{
    public partial class ReInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CmsKitManagementEntityContents_CmsKitManagementContentTypes_ContentTypeId",
                table: "CmsKitManagementEntityContents");

            migrationBuilder.DropTable(
                name: "CmsKitManagementContentTypes");

            migrationBuilder.DropColumn(
                name: "Value",
                table: "CmsKitManagementEntityContents");

            migrationBuilder.RenameColumn(
                name: "Index",
                table: "CmsKitManagementEntityContents",
                newName: "Sequence");

            migrationBuilder.RenameColumn(
                name: "ContentTypeId",
                table: "CmsKitManagementEntityContents",
                newName: "EntityContentDefinitionId");

            migrationBuilder.RenameIndex(
                name: "IX_CmsKitManagementEntityContents_ContentTypeId",
                table: "CmsKitManagementEntityContents",
                newName: "IX_CmsKitManagementEntityContents_EntityContentDefinitionId");

            migrationBuilder.AlterColumn<Guid>(
                name: "ContentDefinitionId",
                table: "CmsKitManagementEntityContentDefinitions",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "CmsKitManagementContentProperties",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ContentDefinitionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Sequence = table.Column<int>(type: "int", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsKitManagementContentProperties", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CmsKitManagementContentProperties_CmsKitManagementContentDefinitions_ContentDefinitionId",
                        column: x => x.ContentDefinitionId,
                        principalTable: "CmsKitManagementContentDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementEntityContentDefinitions_ContentDefinitionId",
                table: "CmsKitManagementEntityContentDefinitions",
                column: "ContentDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementContentProperties_ContentDefinitionId",
                table: "CmsKitManagementContentProperties",
                column: "ContentDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementContentProperties_CreationTime",
                table: "CmsKitManagementContentProperties",
                column: "CreationTime");

            migrationBuilder.AddForeignKey(
                name: "FK_CmsKitManagementEntityContentDefinitions_CmsKitManagementContentDefinitions_ContentDefinitionId",
                table: "CmsKitManagementEntityContentDefinitions",
                column: "ContentDefinitionId",
                principalTable: "CmsKitManagementContentDefinitions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CmsKitManagementEntityContents_CmsKitManagementEntityContentDefinitions_EntityContentDefinitionId",
                table: "CmsKitManagementEntityContents",
                column: "EntityContentDefinitionId",
                principalTable: "CmsKitManagementEntityContentDefinitions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CmsKitManagementEntityContentDefinitions_CmsKitManagementContentDefinitions_ContentDefinitionId",
                table: "CmsKitManagementEntityContentDefinitions");

            migrationBuilder.DropForeignKey(
                name: "FK_CmsKitManagementEntityContents_CmsKitManagementEntityContentDefinitions_EntityContentDefinitionId",
                table: "CmsKitManagementEntityContents");

            migrationBuilder.DropTable(
                name: "CmsKitManagementContentProperties");

            migrationBuilder.DropIndex(
                name: "IX_CmsKitManagementEntityContentDefinitions_ContentDefinitionId",
                table: "CmsKitManagementEntityContentDefinitions");

            migrationBuilder.RenameColumn(
                name: "Sequence",
                table: "CmsKitManagementEntityContents",
                newName: "Index");

            migrationBuilder.RenameColumn(
                name: "EntityContentDefinitionId",
                table: "CmsKitManagementEntityContents",
                newName: "ContentTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_CmsKitManagementEntityContents_EntityContentDefinitionId",
                table: "CmsKitManagementEntityContents",
                newName: "IX_CmsKitManagementEntityContents_ContentTypeId");

            migrationBuilder.AddColumn<string>(
                name: "Value",
                table: "CmsKitManagementEntityContents",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "ContentDefinitionId",
                table: "CmsKitManagementEntityContentDefinitions",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.CreateTable(
                name: "CmsKitManagementContentTypes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    ContentDefinitionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Sequence = table.Column<int>(type: "int", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsKitManagementContentTypes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CmsKitManagementContentTypes_CmsKitManagementContentDefinitions_ContentDefinitionId",
                        column: x => x.ContentDefinitionId,
                        principalTable: "CmsKitManagementContentDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementContentTypes_ContentDefinitionId",
                table: "CmsKitManagementContentTypes",
                column: "ContentDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementContentTypes_CreationTime",
                table: "CmsKitManagementContentTypes",
                column: "CreationTime");

            migrationBuilder.AddForeignKey(
                name: "FK_CmsKitManagementEntityContents_CmsKitManagementContentTypes_ContentTypeId",
                table: "CmsKitManagementEntityContents",
                column: "ContentTypeId",
                principalTable: "CmsKitManagementContentTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
