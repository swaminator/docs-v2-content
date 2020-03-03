---
title: Get Started
description: 
---

## Set Up Your Backend

In a terminal window, navigate to your project folder (the folder that contains your app `.Xcodeproj` file), and add the SDK to your app.

```terminal
$ cd ./YOUR_PROJECT_FOLDER
$ amplify add api
```

When prompted select the following options:

```terminal
$ > REST
$ > Create a new Lambda function
$ > Serverless express function
$ > Restrict API access? Yes
$ > Who should have access? Authenticated and Guest users
```

When configuration of your API is complete, the CLI displays a message confirming that you have configured local CLI metadata for this category. You can confirm this by running `amplify status`. Finally deploy your changes to the cloud:

```terminal
$ amplify push
```

## Connect to Your Backend

Add `AWSAPIGateway` to your Podfile:

```ruby

	target :'YOUR-APP-NAME' do
	  use_frameworks!

	    pod 'Amplify', :path => '~/aws-amplify/amplify-ios'
        pod 'AWSPluginsCore', :path => '~/aws-amplify/amplify-ios'
        pod 'AmplifyPlugins/AWSAPIPlugin', :path => '~/aws-amplify/amplify-ios'
	end
```

Run `pod install --repo-update` and then add `awsconfiguration.json` and `amplifyconfiguration.json` file to your project **(File->Add Files to ..->Add)** and then build your project, ensuring there are no issues.

Add the following code to your app:

```swift                                
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        AWSMobileClient.default().initialize { (userState, error) in
            guard error == nil else {
                print("Error initializing AWSMobileClient. Error: \(error!.localizedDescription)")
                return
            }
            guard let userState = userState else {
                print("userState is unexpectedly empty initializing AWSMobileClient")
                return
            }

            print("AWSMobileClient initialized, userstate: \(userState)")
        }

        // Amplify section
        let apiPlugin = AWSAPIPlugin()
        try! Amplify.add(plugin: apiPlugin)
        try! Amplify.configure()
        print("Amplify initialized")

        return true
    }
```

## IAM authorization

To invoke an API Gateway endpoint from your application, For AWS IAM authorization use the `AWSMobileClient` as outlined in the authentication section.

**Update this to have authorization mode included here rather than link**