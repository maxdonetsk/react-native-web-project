# React Native for Web - Stateless Boilerplate for Fiber

> **Looking for an statefull boilerplate instead?** Check out [redux-form-styled-for-react-native](https://github.com/agrcrobles/redux-form-styled-for-react-native) for a cross platform app built on `redux`, `redux-form` `react-native-web` and `expo`

## Overview

I am an upgrade from [react-native-web-boilerplate](https://github.com/maxdonetsk/react-native-web-project)

An minimum boilerplate to configure `react` + `react-native` with React 16 fiber!

## Prerequisites

* Node 8 LTS
* You can use yarn or npm
* react-native-cli

https://facebook.github.io/react-native/docs/getting-started.html

## Quick start
```
git clone --depth 1 https://github.com/maxdonetsk/react-native-web-project.git
```

## What is on it?

 - [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) on native platform
 - `babel-preset-react-native` is recommended in mobile and in web (and it hot reloads!)
 - Jest and Flow
 - [Prettier](https://prettier.io/docs/en/install.html)

### Web HMR with webpack-dev-server
```
cd react-native-web-project
yarn
yarn web
```
Open `http://localhost:3000/`

### Android

```
react-native run-android
```

### IOS

```
react-native run-ios
```

## How to regenerate native projects?

 - Change the name at `index.js` (and desirable in `index.web.js`) which is given as a parameter to AppRegistry.
 - Change the name and version accordingly on `package.json`
 - Delete `/ios` and `/android` folders which are remaining from your older app.
 - Run `$react-native upgrade` to generate `/ios` and `/android` folders again.
 - Run `$react-native link` for any native dependency.
 - Finally run `$react-native run-ios` and `$react-native run-android`.