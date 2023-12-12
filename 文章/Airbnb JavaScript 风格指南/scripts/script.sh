if [ "update" == "$1" ]; then
  mv README.md README.cn.md
  mv react/README.md react/README.cn.md

  git add .
  git commit -m 'update upstream'
  git pull upstream master
elif [ "restore" == "$1" ]; then
  mv README.md README.upstream.md
  mv README.cn.md README.md
  mv react/README.md react/README.upstream.md
  mv react/README.cn.md react/README.md

  git add .
  git commit -m 'restore readme'
  git push
fi