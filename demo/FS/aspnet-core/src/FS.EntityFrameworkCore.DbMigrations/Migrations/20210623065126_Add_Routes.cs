using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Migrations
{
    public partial class Add_Routes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CmsKitManagementPostRoutes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PostId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RouteId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CmsKitManagementPostRoutes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CmsKitManagementRouteDefinitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                    table.PrimaryKey("PK_CmsKitManagementRouteDefinitions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CmsKitManagementRoutes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RouteDefinitionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    UrlType = table.Column<int>(type: "int", nullable: false),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Level = table.Column<int>(type: "int", nullable: false),
                    IsHidden = table.Column<bool>(type: "bit", nullable: false),
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
                    table.PrimaryKey("PK_CmsKitManagementRoutes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CmsKitManagementRoutes_CmsKitManagementRouteDefinitions_RouteDefinitionId",
                        column: x => x.RouteDefinitionId,
                        principalTable: "CmsKitManagementRouteDefinitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CmsKitManagementRoutes_CmsKitManagementRoutes_ParentId",
                        column: x => x.ParentId,
                        principalTable: "CmsKitManagementRoutes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementRouteDefinitions_CreationTime",
                table: "CmsKitManagementRouteDefinitions",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementRoutes_CreationTime",
                table: "CmsKitManagementRoutes",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementRoutes_ParentId",
                table: "CmsKitManagementRoutes",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_CmsKitManagementRoutes_RouteDefinitionId",
                table: "CmsKitManagementRoutes",
                column: "RouteDefinitionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CmsKitManagementPostRoutes");

            migrationBuilder.DropTable(
                name: "CmsKitManagementRoutes");

            migrationBuilder.DropTable(
                name: "CmsKitManagementRouteDefinitions");
        }
    }
}
