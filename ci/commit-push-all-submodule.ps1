$env:GIT_REDIRECT_STDERR = '2>&1'
. ".\common.ps1"
$Message = Read-Host -Prompt 'Input commit message'
$Branch='feature/'+$Message

# Git push all solutions
foreach ($submodelPath in $submodelPaths) {    
    $submodelAbsPath = (Join-Path $rootFolder $submodelPath)
    Set-Location $submodelAbsPath
    Git add .
    Git commit -m $Message
    git push origin HEAD:$Branch -f
    if (-Not $?) {
        Write-Host ("Git push for the path: " + $submodelPath)
        Set-Location $rootFolder
        exit $LASTEXITCODE
    }
}
Write-Host "Git push success for all"
Set-Location $rootFolder
