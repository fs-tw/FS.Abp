. ".\volo_modules.ps1"

# download all volo modules

foreach ($module in $modules) {    
    $modulePath = (Join-Path $rootFolder $module)
    New-Item -ItemType Directory -Force -Path $modulePath
    Set-Location $modulePath
    abp get-source $module
    if (-Not $?) {
        Write-Host ("Update failed for the solution: " + $modulePath)
        Set-Location $rootFolder
        exit $LASTEXITCODE
    }
}
Write-Host "Download success for all"
Set-Location $rootFolder
