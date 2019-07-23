#!/bin/sh
echo "start"

diffs=$(git ls-files --modified -z)
dels=$(git ls-files --deleted -z)
# commit 
git commit -am "M: $diffs; D: $dels"

newfiles=$(git ls-files -z -o --exclude-standard)
git add .
git commit -am "A: $newfiles"

git push

