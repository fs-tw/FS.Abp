using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Abp.Demo.Migrations
{
    public partial class update_auditLogging : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CodingManagementCodings");

            migrationBuilder.DropTable(
                name: "CodingManagementSerialNumbers");

            migrationBuilder.AddColumn<string>(
                name: "AbpRouteName",
                table: "AbpAuditLogs",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AbpRouteName",
                table: "AbpAuditLogs");

            migrationBuilder.CreateTable(
                name: "CodingManagementCodings",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Level = table.Column<int>(type: "int", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodingManagementCodings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CodingManagementCodings_CodingManagementCodings_ParentId",
                        column: x => x.ParentId,
                        principalTable: "CodingManagementCodings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CodingManagementSerialNumbers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ProviderKey = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProviderName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TenantId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Value = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodingManagementSerialNumbers", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CodingManagementCodings_CreationTime",
                table: "CodingManagementCodings",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_CodingManagementCodings_ParentId",
                table: "CodingManagementCodings",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_CodingManagementSerialNumbers_CreationTime",
                table: "CodingManagementSerialNumbers",
                column: "CreationTime");
        }
    }
}
