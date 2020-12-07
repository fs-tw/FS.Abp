function CommandBuilder ($text) {

    return 'branch=$(git branch -r | grep origin/angular/libs/*); if [[ $branch ]]; then '+$text+'; else  echo "No"; fi'
}


$command=CommandBuilder 'git status'
git submodule foreach $command



