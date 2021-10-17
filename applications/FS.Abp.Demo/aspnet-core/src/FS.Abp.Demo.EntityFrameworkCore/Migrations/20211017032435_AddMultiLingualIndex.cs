using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Abp.Demo.Migrations
{
    public partial class AddMultiLingualIndex : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DefaultCulture",
                table: "CmsKitManagementMultiLinguals");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementMultiLinguals_EntityType_EntityId",
                table: "CmsKitManagementMultiLinguals",
                columns: new[] { "EntityType", "EntityId" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_CmsKitManagementMultiLinguals_EntityType_EntityId",
                table: "CmsKitManagementMultiLinguals");

            migrationBuilder.AddColumn<string>(
                name: "DefaultCulture",
                table: "CmsKitManagementMultiLinguals",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
