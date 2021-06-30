using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Migrations
{
    public partial class cms_page_DisplayStyle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DisplayStyle",
                table: "CmsPages",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisplayStyle",
                table: "CmsPages");
        }
    }
}
