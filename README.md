# gp-pages deploy 완료
https://DeukHan.github.io/Study-Web/

# GitHub 배포 시 빈화면 뜨는 이유
npm run build 하면 생성되는 build폴더 안의 index.html을 확인해보면 JS파일과 CSS파일을 나타낸는 경로가 아래와 같이 있다.
src="/static/js/main.e44f1f41.js"
href="/static/css/main.073c9b0a.css"
각각 경로에서 /static앞에 ./static을 설정해주어야 현재 폴더 안에서 파일들을 찾을 수 있게된다.
보통 Package.json 파일에 "predeploy": "npm run build", 을 설정하여 npm run deploy할 때 같이 빌드되도록 하고 있는데
이럴 경우 경로는 ./static으로 고친 것이 새롭게 /static으로 빌드가 되기 때문에 수동으로 빌드하여 배포하여야 한다.
