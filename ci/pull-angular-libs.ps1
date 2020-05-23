$env:GIT_REDIRECT_STDERR = '2>&1'
git subtree pull -P angular/libs/cms origin angular/libs/cms
if (-Not $?) {
    Write-Host ("subtree pull failed ")
    exit $LASTEXITCODE
}
