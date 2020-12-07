# COMMON PATHS

$rootFolder = (Get-Item -Path "./" -Verbose).FullName

# List of solutions
$modules = (
    "Volo.Account.Pro",
    "Volo.AuditLogging.Ui",
    "Volo.Identity.Pro",
    "Volo.Identityserver.Ui",
    "Volo.LanguageManagement",
    "Volo.Saas",
    "Volo.LeptonTheme",
    "Volo.Payment",
    "Volo.TextTemplateManagement",
    "Volo.Chat",
    "Volo.FileManagement",
    "Volo.Abp.Sms.Twilio"

    
    #"../"
    #"../tools/entitydeveloper/FS.ED"


)

#Write-Host $solutionPaths