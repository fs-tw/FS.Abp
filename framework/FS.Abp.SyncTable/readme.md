建立Trigger 的 sp 與 SyncTables

```sql
CREATE TABLE [dbo].[_SyncTables](
	[Id] [uniqueidentifier] NOT NULL,
	[EntityType] [nvarchar](max) NULL,
	[Event] [nvarchar](10) NULL,
	[ExecuteTime] [datetime2](7) NULL,
	[Message] [xml] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

CREATE PROCEDURE [dbo].[CreateSyncTrigger]
	-- Add the parameters for the stored procedure here
	@TableName nvarchar(max)
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @triggerName as nvarchar(max);

---------------------------------------------------------
	SET @triggerName = 'On_'+ @TableName +'_Insered'

	IF OBJECT_ID ('['+ @triggerName +']', 'TR') IS NOT NULL  
		EXEC('DROP TRIGGER ['+ @triggerName +'];');
	
	EXEC('Create TRIGGER [dbo].[' + @triggerName + '] ON [dbo].[' + @TableName + '] FOR INSERT AS
	SET NOCOUNT ON
	INSERT INTO [dbo].[_SyncTables]
           ([Id]
           ,[EntityType]
           ,[Event]
           ,[ExecuteTime]
           ,[Message])
     VALUES
           (NEWID()
           ,N''' + @TableName + '''
           ,N''Inserted''
           ,GETDATE()
           ,(SELECT * FROM INSERTED FOR XML AUTO))');

---------------------------------------------------------
	SET @triggerName = 'On_'+ @TableName +'_Updated'

	IF OBJECT_ID ('['+ @triggerName +']', 'TR') IS NOT NULL  
		EXEC('DROP TRIGGER ['+ @triggerName +'];');
	
	EXEC('Create TRIGGER [dbo].[' + @triggerName + '] ON [dbo].[' + @TableName + '] FOR UPDATE AS
	SET NOCOUNT ON
	INSERT INTO [dbo].[_SyncTables]
           ([Id]
           ,[EntityType]
           ,[Event]
           ,[ExecuteTime]
           ,[Message])
     VALUES
           (NEWID()
           ,N''' + @TableName + '''
           ,N''Updated''
           ,GETDATE()
           ,(SELECT * FROM INSERTED FOR XML AUTO))');

---------------------------------------------------------
	SET @triggerName = 'On_'+ @TableName +'_Deleted'

	IF OBJECT_ID ('['+ @triggerName +']', 'TR') IS NOT NULL  
		EXEC('DROP TRIGGER ['+ @triggerName +'];');

	EXEC('Create TRIGGER [dbo].[' + @triggerName + '] ON [dbo].[' + @TableName + '] FOR DELETE AS
	SET NOCOUNT ON
	INSERT INTO [dbo].[_SyncTables]
           ([Id]
           ,[EntityType]
           ,[Event]
           ,[ExecuteTime]
           ,[Message])
     VALUES
           (NEWID()
           ,N''' + @TableName + '''
           ,N''Deleted''
           ,GETDATE()
           ,(SELECT * FROM DELETED FOR XML AUTO))');




END
GO

EXEC	[dbo].[CreateSyncTrigger] @TableName = N'mgt_User'
EXEC	[dbo].[CreateSyncTrigger] @TableName = N'mgt_UserProfile'
```