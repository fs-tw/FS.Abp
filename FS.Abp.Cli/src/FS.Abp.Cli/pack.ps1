Get-ChildItem -File -Recurse | % {$_.LastWriteTime = (Get-Date)}
dotnet pack --no-build