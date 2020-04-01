using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FS.Cms.Migrations
{
    public partial class addsettingcodeingdynamic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "NormalizedEmail",
                table: "AbpUsers",
                maxLength: 256,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldMaxLength: 256,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "AbpUsers",
                maxLength: 256,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldMaxLength: 256,
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "CodingManagementCodes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    No = table.Column<string>(nullable: false),
                    DisplayName = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Code = table.Column<string>(nullable: false),
                    DefinitionId = table.Column<Guid>(nullable: true),
                    ParentId = table.Column<Guid>(nullable: true),
                    Enable = table.Column<bool>(nullable: false, defaultValue: true),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodingManagementCodes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CodingManagementCodes_CodingManagementCodes_DefinitionId",
                        column: x => x.DefinitionId,
                        principalTable: "CodingManagementCodes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CodingManagementCodes_CodingManagementCodes_ParentId",
                        column: x => x.ParentId,
                        principalTable: "CodingManagementCodes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DynamicFormDocuments",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    No = table.Column<string>(nullable: false),
                    IsOnline = table.Column<bool>(nullable: false),
                    Version = table.Column<string>(nullable: false),
                    Sequence = table.Column<int>(nullable: false),
                    FormalName = table.Column<string>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DynamicFormDocuments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DynamicFormFormals",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    No = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Sequence = table.Column<int>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DynamicFormFormals", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IdentityServerDeviceFlowCodes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    DeviceCode = table.Column<string>(maxLength: 200, nullable: false),
                    UserCode = table.Column<string>(maxLength: 200, nullable: false),
                    SubjectId = table.Column<string>(maxLength: 200, nullable: true),
                    ClientId = table.Column<string>(maxLength: 200, nullable: false),
                    Expiration = table.Column<DateTime>(nullable: false),
                    Data = table.Column<string>(maxLength: 50000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IdentityServerDeviceFlowCodes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DynamicFormRecords",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    RecordCodeId = table.Column<Guid>(nullable: true),
                    UserId = table.Column<Guid>(nullable: false),
                    FormDocumentId = table.Column<Guid>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DynamicFormRecords", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DynamicFormRecords_DynamicFormDocuments_FormDocumentId",
                        column: x => x.FormDocumentId,
                        principalTable: "DynamicFormDocuments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DynamicFormGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    Sequence = table.Column<int>(nullable: false),
                    FormFormalId = table.Column<Guid>(nullable: false),
                    Code = table.Column<string>(nullable: false),
                    DisplayName = table.Column<string>(nullable: false),
                    ParentId = table.Column<Guid>(nullable: true),
                    TenantId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DynamicFormGroups", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DynamicFormGroups_DynamicFormFormals_FormFormalId",
                        column: x => x.FormFormalId,
                        principalTable: "DynamicFormFormals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DynamicFormGroups_DynamicFormGroups_ParentId",
                        column: x => x.ParentId,
                        principalTable: "DynamicFormGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DynamicFormItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExtraProperties = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorId = table.Column<Guid>(nullable: true),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierId = table.Column<Guid>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    ItemCodeId = table.Column<Guid>(nullable: false),
                    No = table.Column<string>(nullable: false),
                    Question = table.Column<string>(nullable: false),
                    Sequence = table.Column<int>(nullable: false),
                    Discriminator = table.Column<int>(nullable: false),
                    FormGroupId = table.Column<Guid>(nullable: false),
                    TenantId = table.Column<Guid>(nullable: true),
                    Required = table.Column<bool>(nullable: true),
                    FileNumber = table.Column<int>(nullable: true),
                    FileType = table.Column<string>(nullable: true),
                    FolderName = table.Column<string>(nullable: true),
                    InputItemType = table.Column<int>(nullable: true),
                    Precision = table.Column<int>(nullable: true),
                    Placeholer = table.Column<string>(nullable: true),
                    IsUse = table.Column<bool>(nullable: true),
                    UpperLimit = table.Column<int>(nullable: true),
                    LowerLimit = table.Column<int>(nullable: true),
                    SelectItemType = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DynamicFormItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DynamicFormItems_DynamicFormGroups_FormGroupId",
                        column: x => x.FormGroupId,
                        principalTable: "DynamicFormGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CodingManagementCodes_DefinitionId",
                table: "CodingManagementCodes",
                column: "DefinitionId");

            migrationBuilder.CreateIndex(
                name: "IX_CodingManagementCodes_ParentId",
                table: "CodingManagementCodes",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_DynamicFormGroups_FormFormalId",
                table: "DynamicFormGroups",
                column: "FormFormalId");

            migrationBuilder.CreateIndex(
                name: "IX_DynamicFormGroups_ParentId",
                table: "DynamicFormGroups",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_DynamicFormItems_FormGroupId",
                table: "DynamicFormItems",
                column: "FormGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_DynamicFormRecords_FormDocumentId",
                table: "DynamicFormRecords",
                column: "FormDocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_IdentityServerDeviceFlowCodes_DeviceCode",
                table: "IdentityServerDeviceFlowCodes",
                column: "DeviceCode",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_IdentityServerDeviceFlowCodes_Expiration",
                table: "IdentityServerDeviceFlowCodes",
                column: "Expiration");

            migrationBuilder.CreateIndex(
                name: "IX_IdentityServerDeviceFlowCodes_UserCode",
                table: "IdentityServerDeviceFlowCodes",
                column: "UserCode",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CodingManagementCodes");

            migrationBuilder.DropTable(
                name: "DynamicFormItems");

            migrationBuilder.DropTable(
                name: "DynamicFormRecords");

            migrationBuilder.DropTable(
                name: "IdentityServerDeviceFlowCodes");

            migrationBuilder.DropTable(
                name: "DynamicFormGroups");

            migrationBuilder.DropTable(
                name: "DynamicFormDocuments");

            migrationBuilder.DropTable(
                name: "DynamicFormFormals");

            migrationBuilder.AlterColumn<string>(
                name: "NormalizedEmail",
                table: "AbpUsers",
                type: "nvarchar(256)",
                maxLength: 256,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 256);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "AbpUsers",
                type: "nvarchar(256)",
                maxLength: 256,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 256);
        }
    }
}
