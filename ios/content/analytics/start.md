---
title: Setup analytics
description: 
---

The Analytics category enables you to collect analytics data for your application. It comes with built-in support for [Amazon Pinpoint](#using-amazon-pinpoint), but its extensible interface allows it to be extended to target any cloud provider's backend

## Set up your backend

**Prerequisites:**
* An iOS project targeting at least iOS 11.0.
* Install and configure the Amplify CLI

```terminal
$ npm install -g @aws-amplify/cli
$ amplify configure
```

**Steps**

Go to your project directory and run the following commands to get a fully functioning backend with the Analytics category:


Run `amplify init` command as shown:

```terminal
$ amplify init
? Enter a name for the project AmplifyAnalytics
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building ios
? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
```


Add analytics using the command `amplify add analytics`. Here is an example:

```perl
? Provide your pinpoint resource name: `pinpointResourceName`
Adding analytics would add the Auth category to the project if not already added.
? Apps need authorization to send analytics events. Do you want to allow guests and unauthenticated users to send analytics events? (we recommend you allow this when getting 
started) `Yes`
```
    
Push your changes to the cloud using the push command.
```terminal
$ amplify push
```
    
When your backend is successfully updated, there should be two newly created files: `amplifyconfiguration.json` and `awsconfiguration.json` in your project folder.

Optional: Run `amplify console analytics` to open the AWS Pinpoint console in a web browser to view your cloud resources.

## Install Amplify libraries

If this is a new project, run `pod init` to create the `Podfile` to use CocoaPods to manage your dependencies. Add the following to the `Podfile`

```ruby
    target :'YOUR-APP-NAME' do
        use_frameworks!
        pod 'AmplifyPlugins/AWSPinpointAnalyticsPlugin'
        pod 'AWSMobileClient', '~> 2.12.0'
    end
```

Close out of the existing Xcode project if you have it open.

Install the dependencies via CocoaPods
```ruby
$ pod install --repo-update
```

Open the `.xcworkspace` file created by CocoaPods
```ruby
$ open <YOURAPP>.xcworkspace
```

## Add Configuration Files

1. Open the finder of your project and drag the `amplifyconfiguration.json` and `awsconfiguration.json` over to the Xcode window, under the workspace. 
2. Enable `Copy items if needed` if not already enabled
3. For "Added folders", have `Create groups` selected. 
4. For "Add to targets", make sure the app target is checked off.
5. Build (`CMD+B`) the app 

## Initialize Amplify

Initialize `AWSMobileClient`, `Amplify`, and `AWSPinpointAnalyticsPlugin`.

Add the following imports to the top of your `AppDelegate.swift` file:

```swift
import Amplify
import AWSMobileClient
import AmplifyPlugins
```

Add the following code to your AppDelegate's `application:didFinishLaunchingWithOptions` method

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
// Override point for customization after application launch.
    AWSMobileClient.default().initialize { (userState, error) in
        guard error == nil else {
            print("Error initializing AWSMobileClient. Error: \(error!.localizedDescription)")
            return
        }
        print("AWSMobileClient initialized, userstate: \(userState)")
    }

    let analyticsPlugin = AWSPinpointAnalyticsPlugin()
    do {
        try Amplify.add(plugin: analyticsPlugin)
        try Amplify.configure()
        print("Amplify configured with analytics plugin")
    } catch {
        print("Failed to initialize Amplify with \(error)")
    }
    return true
}
```

## API Reference

For a complete API reference visit the API Reference