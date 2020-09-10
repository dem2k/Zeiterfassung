$MONOGOEXE="$env:MONGODB_HOME\bin\mongod.exe"
if(-not(Test-Path $MONOGOEXE) ){
    $MONOGOEXE="mongod.exe"
}
& $MONOGOEXE --directoryperdb --dbpath data
