. ".\common.ps1"

# Test all solutions
..\modules\FS.Abp\ci\test-all.ps1

foreach ($solutionPath in $solutionPaths) {    
    $solutionAbsPath = (Join-Path $rootFolder $solutionPath)
    Set-Location $solutionAbsPath
    Write-Host ("Testing: " + $solutionAbsPath)
    dotnet test --no-build --no-restore
    if (-Not $?) {
        Write-Host ("Test failed for the solution: " + $solutionPath)
        Set-Location $rootFolder
        exit $LASTEXITCODE
    }
}
Write-Host "Test success for all"
Set-Location $rootFolder
