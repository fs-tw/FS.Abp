using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Migrations
{
    public partial class cms_blogs__viewcount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ViewCount",
                table: "CmsBlogPosts",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ViewCount",
                table: "CmsBlogPosts");
        }
    }
}
