$env:GIT_REDIRECT_STDERR = '2>&1'
$rootFolder = (Get-Item  -Path "./" -Verbose).FullName



function WithDevelopBranch ($text) {

    $dev="'* develop'"
    return 'branch=$(git branch | grep ''* develop'' ); if [[ $branch ]]; then '+$text+'; else  echo No execu; fi'
}

function DevelopBuilder ($text) {

    return 'branch=$(git branch -r | grep origin/develop); if [[ $branch ]]; then '+$text+'; else  echo No execu; fi'
}

