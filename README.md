#workday-app

```
Node.js         v9.3.0
npm             5.2+
React.js        ^16.4.1
redux           ^4.0.0
redux-form      ^7.4.2
```

#SETUP - Development mode
```
$ cd workday-app
$ npm install
$ npm start
Then open http://localhost:3000/ to see your app.
```

#Production Build
```
$ cd workday-app
$ npm install
$ npm run build
```

The project will be built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:
The build folder is ready to be deployed.
You may serve it with a static server:


#Folder structure
```
workday-app
├── build
├── demo
│   ├── ScreenShot-1.png
│   └── ScreenShot-2.png
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    │    ├── appActions.js
    │    └── appActionTypes.js
    ├── components
    │     ├── WdInput.js
    │     └── WdSelect.js
    ├── containers
    │     ├── App
    │     │   └── index.js
    │     └── Home
    │         ├── index.js
    │         ├── SearchProject.js
    │         ├── SearchResults.js
    │         └──SearchRow.js
    ├── middlewares
    ├── reducers
    │    ├── appReducers.js
    │    └── index.js
    ├── utils
    │    └── serverProps.js
    ├── App.scss
    ├── App.test.js
    ├── constants.js
    ├── index.js
    ├── registerServiceWorker.js
    └── store.js
```
