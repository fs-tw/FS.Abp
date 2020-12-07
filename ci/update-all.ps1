. ".\common.ps1"

# Update all solutions
..\modules\FS.Abp\ci\test-all.ps1

foreach ($solutionPath in $solutionPaths) {    
    $solutionAbsPath = (Join-Path $rootFolder $solutionPath)
    Set-Location $solutionAbsPath
    abp update --nuget
    if (-Not $?) {
        Write-Host ("Update failed for the solution: " + $solutionPath)
        Set-Location $rootFolder
        exit $LASTEXITCODE
    }
}
Write-Host "Update success for all"
Set-Location $rootFolder
