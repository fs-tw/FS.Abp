using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DEMO.Migrations
{
    public partial class update_version : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FormManagementDocumentDefinitions");

            migrationBuilder.RenameColumn(
                name: "DocumentDefinitionId",
                table: "FormManagementVersions",
                newName: "VersionDefinitionId");

            migrationBuilder.AlterColumn<int>(
                name: "No",
                table: "FormManagementVersions",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<Guid>(
                name: "VersionId",
                table: "FormManagementFormals",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<string>(
                name: "DisplayName",
                table: "FormManagementFormals",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "FormManagementVersionDefinitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EntityType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EntityKey = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CurrentVersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
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
                    table.PrimaryKey("PK_FormManagementVersionDefinitions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementVersionDefinitions_FormManagementVersions_CurrentVersionId",
                        column: x => x.CurrentVersionId,
                        principalTable: "FormManagementVersions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersions_VersionDefinitionId",
                table: "FormManagementVersions",
                column: "VersionDefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersionDefinitions_CreationTime",
                table: "FormManagementVersionDefinitions",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersionDefinitions_CurrentVersionId",
                table: "FormManagementVersionDefinitions",
                column: "CurrentVersionId");

            migrationBuilder.AddForeignKey(
                name: "FK_FormManagementVersions_FormManagementVersionDefinitions_VersionDefinitionId",
                table: "FormManagementVersions",
                column: "VersionDefinitionId",
                principalTable: "FormManagementVersionDefinitions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FormManagementVersions_FormManagementVersionDefinitions_VersionDefinitionId",
                table: "FormManagementVersions");

            migrationBuilder.DropTable(
                name: "FormManagementVersionDefinitions");

            migrationBuilder.DropIndex(
                name: "IX_FormManagementVersions_VersionDefinitionId",
                table: "FormManagementVersions");

            migrationBuilder.RenameColumn(
                name: "VersionDefinitionId",
                table: "FormManagementVersions",
                newName: "DocumentDefinitionId");

            migrationBuilder.AlterColumn<string>(
                name: "No",
                table: "FormManagementVersions",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<Guid>(
                name: "VersionId",
                table: "FormManagementFormals",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DisplayName",
                table: "FormManagementFormals",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "FormManagementDocumentDefinitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    CurrentVersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormManagementDocumentDefinitions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementDocumentDefinitions_FormManagementVersions_CurrentVersionId",
                        column: x => x.CurrentVersionId,
                        principalTable: "FormManagementVersions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementDocumentDefinitions_CreationTime",
                table: "FormManagementDocumentDefinitions",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementDocumentDefinitions_CurrentVersionId",
                table: "FormManagementDocumentDefinitions",
                column: "CurrentVersionId");
        }
    }
}
