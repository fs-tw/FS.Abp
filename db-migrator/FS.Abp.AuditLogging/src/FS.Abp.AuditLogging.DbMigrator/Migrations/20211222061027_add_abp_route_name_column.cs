using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Abp.AuditLogging.DbMigrator.Migrations
{
    public partial class add_abp_route_name_column : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AbpRouteName",
                table: "AbpAuditLogs",
                type: "character varying(255)",
                maxLength: 255,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AbpRouteName",
                table: "AbpAuditLogs");
        }
    }
}
