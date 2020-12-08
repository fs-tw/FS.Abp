$env:GIT_REDIRECT_STDERR = '2>&1'
#¤Á´«¨ìLocal Release
. ".\0.common.ps1"
Set-Location $rootFolder

Write-Host "pull subtree start"

git submodule foreach "if git rev-parse --verify --quiet origin/develop:ci/pull-angular-libs.ps1 >/dev/null; 
then powershell './ci/pull-angular-libs.ps1'; 
else echo 'No execute'; 
fi"



Write-Host "pull subtree end"
Set-Location $rootFolder

