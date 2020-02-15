---
title: 1. React Native Amplify Introduction
description: Start here to learn how to build fullstack React Native Expo and React Native
---

## Getting started with AWS Amplify & React Native

This guide will walk you through the following steps:

- Creating a new React Native application
- Installing and configuring the the Amplify Client libraries
- Configuring the Amplify CLI
- Creating a new Amplify project
- Configuring the React Native project to work with the new Amplify project.

The first thing you should do is initialize a new [React Native application](https://facebook.github.io/react-native/docs/getting-started). There are two ways to do this:

1. Expo CLI - Easier for new React Native developers
2. React Native CLI - If you are already familiar with mobile development, enables you to build native code into your project.

This tutorial will covering both, so use what's best for you.

###  Creating the React Native project

To get started, initialize a new React Native project and change into the new directory.

 ####  Using Expo
```sh
$ npm install -g expo-cli  
$ expo init RNAmplify
```

####  Using the React Native CLI

```sh
$ npx react-native init RNAmplify
```

## Installing the local dependencies

Next, install the local Amplify dependencies. The directions here will depend on whether you are using Expo or the React Native CLI.

### Installing the local dependencies in an Expo project

With Expo, you only have to install the dependencies and then move on to the next step.

```sh
$ npm install aws-amplify aws-amplify-react-native amazon-cognito-identity-js react-native-vector-icons

# or

$ yarn add aws-amplify aws-amplify-react-native amazon-cognito-identity-js react-native-vector-icons
```

### Installing the local dependencies in a project created by the React Native CLI

```sh
$ npm install aws-amplify aws-amplify-react-native amazon-cognito-identity-js react-native-vector-icons

# or

$ yarn add aws-amplify aws-amplify-react-native amazon-cognito-identity-js react-native-vector-icons
```

You will next need to change into the the ios directory and install the pod dependencies:

```sh
$ cd ios
$ pod install
$ cd ../
```

Now open __ios/RNAmpIntr/Info.plist__ and add the following properties:

```
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```

Finally, open __android/app/build.gradle__ and add the following line at the top of the file:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

###  Installing and configuring the the Amplify CLI

If you don't yet have the Amplify CLI, install that now:

```sh
$ npm install @aws-amplify/cli
```

Next, configure the Amplify CLI

```sh
$ amplify configure
```

To see a quick video walkthrough of how to configure the Amplify CLI, click [here](https://www.youtube.com/watch?v=fWbM5DLh25U).

### Creating a new Amplify project

You are now ready to initialize a new Amplify project. To do so, use the Amplify CLI:

```sh
$ amplify init

? Enter a name for the project: rnamplify
? Enter a name for the environment: amplifydemo
? Choose your default editor: <Your favorite text editor>
? Choose the type of app that youre building: javascript
? What javascript framework are you using: react-native
? Source Directory Path:  /
? Distribution Directory Path: /
? Build Command:  npm run-script build
? Start Command: npm run-script start
? Do you want to use an AWS profile? Y
? Please choose the profile you want to use: <Your AWS profile from the configuration step>
```

Once the amplify project has been initialized, you should see the following artifacts in your project:

1. *src/aws-exports.js* - This file will hold the key value pairs of the resource information for the services created by the CLI.
2. *amplify* directory - This will hold any back end code you will write for things like GraphQL schemas and serverless functions managed by the AWS services we'll be using.

### Adding Amplify imports

Finally, open __App.js__ (Expo) or __index.js__(React Native CLI) and add the following lines of code at the top of the file below the last import:

```javascript
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
```

Now your project is set up and you can begin adding new features.