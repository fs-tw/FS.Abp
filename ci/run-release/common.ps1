$env:GIT_REDIRECT_STDERR = '2>&1'
$Version = Read-Host -Prompt 'Input release version'
$ExcludeRelease = 'abp'
$rootFolder = (Get-Item  -Path "./" -Verbose).FullName

