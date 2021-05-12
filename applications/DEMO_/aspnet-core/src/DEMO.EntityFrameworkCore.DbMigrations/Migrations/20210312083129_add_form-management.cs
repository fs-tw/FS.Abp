using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DEMO.Migrations
{
    public partial class add_formmanagement : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FormManagementFormals",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementFormals", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementRecords",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FormalId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementRecords", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParentId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Level = table.Column<int>(type: "int", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FormalId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementGroups", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementGroups_FormManagementFormals_FormalId",
                        column: x => x.FormalId,
                        principalTable: "FormManagementFormals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FormManagementGroups_FormManagementGroups_ParentId",
                        column: x => x.ParentId,
                        principalTable: "FormManagementGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementRecordItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Asnwer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RecordId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementRecordItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementRecordItems_FormManagementRecords_RecordId",
                        column: x => x.RecordId,
                        principalTable: "FormManagementRecords",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Question = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GroupId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormManagementItems_FormManagementGroups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "FormManagementGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementVersions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrevVersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NextVersionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DocumentDefinitionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
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
                    table.PrimaryKey("PK_FormManagementVersions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormManagementDocumentDefinitions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(max)", nullable: false),
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

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementFormals_CreationTime",
                table: "FormManagementFormals",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementGroups_CreationTime",
                table: "FormManagementGroups",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementGroups_FormalId",
                table: "FormManagementGroups",
                column: "FormalId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementGroups_ParentId",
                table: "FormManagementGroups",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementItems_CreationTime",
                table: "FormManagementItems",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementItems_GroupId",
                table: "FormManagementItems",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementRecordItems_CreationTime",
                table: "FormManagementRecordItems",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementRecordItems_RecordId",
                table: "FormManagementRecordItems",
                column: "RecordId");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementRecords_CreationTime",
                table: "FormManagementRecords",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersions_CreationTime",
                table: "FormManagementVersions",
                column: "CreationTime");

            migrationBuilder.CreateIndex(
                name: "IX_FormManagementVersions_DocumentDefinitionId",
                table: "FormManagementVersions",
                column: "DocumentDefinitionId");

            migrationBuilder.AddForeignKey(
                name: "FK_FormManagementVersions_FormManagementDocumentDefinitions_DocumentDefinitionId",
                table: "FormManagementVersions",
                column: "DocumentDefinitionId",
                principalTable: "FormManagementDocumentDefinitions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FormManagementDocumentDefinitions_FormManagementVersions_CurrentVersionId",
                table: "FormManagementDocumentDefinitions");

            migrationBuilder.DropTable(
                name: "FormManagementItems");

            migrationBuilder.DropTable(
                name: "FormManagementRecordItems");

            migrationBuilder.DropTable(
                name: "FormManagementGroups");

            migrationBuilder.DropTable(
                name: "FormManagementRecords");

            migrationBuilder.DropTable(
                name: "FormManagementFormals");

            migrationBuilder.DropTable(
                name: "FormManagementVersions");

            migrationBuilder.DropTable(
                name: "FormManagementDocumentDefinitions");
        }
    }
}
