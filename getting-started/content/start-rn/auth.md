---
title: 2. React Native Amplify Authentication
description: Adding Authentication to React Native with AWS Amplify
---

##  Adding Authentication with AWS Amplify and React Native

__In this guide, you'll learn how to add Authentication to a React Native app with AWS Amplify__

Now that you've created and configured a React Native project and initialized a new React Native app, we can add a feature. The first feature we will add is authentication.

Amplify CLI allows you to add new features using the `add` command. Here, we will be adding Amazon Cognito, a managed authentication service:


```sh
$ amplify add auth

```

To deploy the service, run the `push` command:

```sh
$ amplify push
```

Now, open __App.js__ and make the following changes:

1. Import the `withAuthenticator` component:

```javascript
import { withAuthenticator } from 'aws-amplify'
```

2. Change the default export to be the `withAuthenticator` wrapping the main component:

```javascript
export default withAuthenticator(App)
```

Now, run the app to see the new Authentication flow protecting the app:

```sh
$ npx react-native run-ios
```

In this example, we used the React Native UI library and the `withAuthenticator` to quickly get up and running with a real-world authentication flow. You can also customize this component to add or remove fields, update styling, or other configurations. To configure this component, check out the documentation [here]().

In addition to the `withAuthenticator` you can build custom authentication flows using the `Auth` class. `Auth` has over 30 methods including `signUp`, `signIn`, `forgotPasword`, and `signOut` that allow you full control over all aspects of the user authentication flow. Check out the complete API [here](https://aws-amplify.github.io/amplify-js/api/classes/authclass.html)
