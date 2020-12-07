. ".\common.ps1"

# Build all solutions
..\modules\FS.Abp\ci\build-all.ps1

foreach ($solutionPath in $solutionPaths) {    
    $solutionAbsPath = (Join-Path $rootFolder $solutionPath)
    Set-Location $solutionAbsPath
    dotnet build
    if (-Not $?) {
        Write-Host ("Build failed for the solution: " + $solutionPath)
        Set-Location $rootFolder
        exit $LASTEXITCODE
    }
}
Write-Host "Build success for all"
Set-Location $rootFolder
