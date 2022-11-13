rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:fxjzz/lzx-ui-demo.git &&
git push -f -u origin main
cd -
echo https://fxjzz.github.io/lzx-ui-demo/