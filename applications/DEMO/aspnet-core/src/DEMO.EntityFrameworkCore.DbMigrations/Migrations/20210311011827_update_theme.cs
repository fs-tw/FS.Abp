using Microsoft.EntityFrameworkCore.Migrations;

namespace DEMO.Migrations
{
    public partial class update_theme : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Copyright",
                table: "ThemeWebSiteDefinitions",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "ThemeWebSiteDefinitions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Favicon",
                table: "ThemeWebSiteDefinitions",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LogoFileId",
                table: "ThemeWebSiteDefinitions",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "ThemeWebSiteDefinitions",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "IconFileId",
                table: "ThemeRoutes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "OpenAnotherWindow",
                table: "ThemeRoutes",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Sequence",
                table: "ThemeRoutes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "ThemeRoutes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "ThemeBanners",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageFileId",
                table: "ThemeBanners",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Sequence",
                table: "ThemeBanners",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Copyright",
                table: "ThemeWebSiteDefinitions");

            migrationBuilder.DropColumn(
                name: "Count",
                table: "ThemeWebSiteDefinitions");

            migrationBuilder.DropColumn(
                name: "Favicon",
                table: "ThemeWebSiteDefinitions");

            migrationBuilder.DropColumn(
                name: "LogoFileId",
                table: "ThemeWebSiteDefinitions");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "ThemeWebSiteDefinitions");

            migrationBuilder.DropColumn(
                name: "IconFileId",
                table: "ThemeRoutes");

            migrationBuilder.DropColumn(
                name: "OpenAnotherWindow",
                table: "ThemeRoutes");

            migrationBuilder.DropColumn(
                name: "Sequence",
                table: "ThemeRoutes");

            migrationBuilder.DropColumn(
                name: "Url",
                table: "ThemeRoutes");

            migrationBuilder.DropColumn(
                name: "FileName",
                table: "ThemeBanners");

            migrationBuilder.DropColumn(
                name: "ImageFileId",
                table: "ThemeBanners");

            migrationBuilder.DropColumn(
                name: "Sequence",
                table: "ThemeBanners");
        }
    }
}
