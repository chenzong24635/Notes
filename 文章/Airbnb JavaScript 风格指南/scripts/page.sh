mkdir dist
cp README.md dist
cp -r css-in-javascript dist
cp -r react dist
git checkout gh-pages

mv dist/README.md .
rm -rf react && mv dist/react .
rm -rf css-in-javascript && mv dist/css-in-javascript .
rm -rf dist

git add .
git commit -m 'deploy page'
git checkout cn