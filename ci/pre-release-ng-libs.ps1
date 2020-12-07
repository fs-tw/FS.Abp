$env:GIT_REDIRECT_STDERR = '2>&1'
. ".\common.ps1"
$Version = Read-Host -Prompt 'Input release version'

# Git push lib
foreach ($nglibPath in $nglibPaths) {
    $paths =$nglibPath -split "\."
    $nglibAbsPath="angular/libs/"+[regex]::Replace($paths[$paths.Count-1],"([a-z])([A-Z])",'$1-$2').ToLower()
    $nglibPath = (Join-Path $rootFolder $nglibPath)
    Set-Location $nglibPath

    git flow release start $Version
    git checkout release/$Version
    #git subtree pull -P $nglibAbsPath origin $nglibAbsPath
    git subtree split -P $nglibAbsPath -b $nglibAbsPath --rejoin
    git push origin $nglibAbsPath -f
    git branch -D $nglibAbsPath
    git push --set-upstream origin release/$Version -f

    #Git commit -m $Message
    #git push origin HEAD:$Branch -f
    if (-Not $?) {
        Write-Host ("Error: " + $nglibPath)
        Set-Location $rootFolder
        exit $LASTEXITCODE
    }
}
Write-Host "Success subtree split and push all libs"
Set-Location $rootFolder

foreach ($ngpublishPath in $ngpublishPaths) {
    #aspnet-core start
    Set-Location $ngpublishPath
    Set-Location "..\"
    git flow release start $Version
    git checkout release/$Version

    #angular all libs start
    Set-Location $rootFolder
    Set-Location $ngpublishPath
    git flow release start $Version
    git checkout release/$Version
    git submodule foreach 'case $name in packages) ;; *) git checkout angular/$sm_path;git pull ;; esac'
    git add .
    git commit -m "update ng libs $Version"
    git push --set-upstream origin release/$Version -f
    #angular all libs end

    Set-Location "..\"
    Git add .
    git commit -m "update ng libs $Version"
    git push --set-upstream origin release/$Version -f
    #aspnet-core end
}
Write-Host "Success libs pull"
Set-Location $rootFolder

