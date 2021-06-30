using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Migrations
{
    public partial class cms_blogs_extraproperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "test",
                table: "FSCustomers");

            migrationBuilder.AddColumn<string>(
                name: "DisplayStyle",
                table: "CmsBlogs",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisplayStyle",
                table: "CmsBlogs");

            migrationBuilder.AddColumn<string>(
                name: "test",
                table: "FSCustomers",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
