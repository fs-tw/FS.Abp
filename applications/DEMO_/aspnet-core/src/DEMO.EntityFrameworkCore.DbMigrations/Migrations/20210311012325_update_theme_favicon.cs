using Microsoft.EntityFrameworkCore.Migrations;

namespace DEMO.Migrations
{
    public partial class update_theme_favicon : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Favicon",
                table: "ThemeWebSiteDefinitions",
                newName: "FaviconFileId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FaviconFileId",
                table: "ThemeWebSiteDefinitions",
                newName: "Favicon");
        }
    }
}
