---
title: Setup predictions
description: 
---

**Prerequisites:**
* An iOS project targeting at least iOS 13.0
* Install and configure the Amplify CLI

```terminal
$ npm install -g @aws-amplify/cli
$ amplify configure
```

## Automated Configuration

The Amplify CLI helps you to create the appropriate IAM permissions to hit the AWS machine learning APIs. As part of the automated setup, the CLI helps you provision resources that leverage AWS AI/ML services. In addition to those services, we also support offline functionality and improved responses between online/offline models provided by Apple's CoreML [Vision Framework](https://developer.apple.com/documentation/vision).

To create a project with the Predictions category, run the following command:

1. Run `amplify init` command as shown:

```terminal
$ amplify init
? Enter a name for the project AmplifyPredictions
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building ios
? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
```

2. Add auth `amplify add auth` and choose `Default configuration`, allow users to sign in with `Email` and do not configure `advanced settings`

3. Add predictions `amplify add predictions`
    * choose `Convert (translate text, text to speech), Identify (labels, text, celebs, etc.), or Interpret (language characteristics, sentiment, etc)`
    * Who should have access: `Auth and guest users`

4. Run `amplify push`to create the resources in the cloud.

When your backend is successfully updated, add `amplifyconfiguration.json` and `awsconfiguration.json` to your project using Xcode. Your new configuration file `awsconfiguration.json` will contain your default project `region` value as well as any necessary configuration options for each predictions method (i.e. target language and source language for translate, etc)


## Manual Configuration

If you have already created the resources in the cloud and would like to take advantage of those existing resources but still use the Amplify library in swift, please follow the directions below:

Create the file `amplifyconfiguration.json`
```
touch amplifyconfiguration.json
```

Copy the contents over and update the values for the specific predictions method you are looking to use
```
{
    "UserAgent": "aws-amplify-cli/2.0",
    "Version": "1.0",
    "Predictions": {
        "plugins": {
            "awsPredictionsPlugin": {
                "defaultRegion": "us-west-2",
                 "identify": {
                    "identifyText": {
                        "format": "ALL",
                        "region": "us-west-2",
                        "defaultNetworkPolicy": "auto"
                    },
                    "identifyEntities": {
                        "maxEntities": "0",
                        "celebrityDetectionEnabled": "true",
                        "region": "us-west-2",
                        "defaultNetworkPolicy": "auto"
                    },
                    "identifyLabels": {
                        "region": "us-west-2",
                        "type": "LABELS",
                        "defaultNetworkPolicy": "auto"
                    }
                },
                "convert": {
                    "translateText": {
                        "targetLang": "zh",
                        "sourceLang": "en",
                        "region": "us-west-2",
                        "defaultNetworkPolicy": "auto"
                    },
                    "speechGenerator": {
                        "voice": "Salli",
                        "language": "en-US",
                        "region": "us-west-2",
                        "defaultNetworkPolicy": "auto"
                    }
                },
                "interpret": {
                    "interpretText": {
                        "region": "us-west-2",
                        "defaultNetworkPolicy": "auto"
                    }
                }
            }
        }
    }
}
```
Add both the `amplifyconfiguration.json` and the `awsconfiguration.json` to your project using Xcode.

## Configure the frontend

Use the following steps to add file storage backend services to your app.

Add the dependencies to the `Podfile`:

```ruby
target :'YOUR-APP-NAME' do
	use_frameworks!
	pod 'AWSPredictionsPlugin'
	pod 'AWSMobileClient', '~> 2.12.0'
end
```

Run `pod install --repo-update` before you continue.

Add the following code to your AppDelegate:

```swift
import Amplify
import AWSMobileClient
import AmplifyPlugins

// Inside  AppDelegate's application method
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

	let predictionsPlugin = AWSPredictionsPlugin()
	try! Amplify.add(plugin: predictionsPlugin)
	try! Amplify.configure()
	print("Amplify initialized")

	window = UIWindow()
	window?.rootViewController  = MainTabBarController()
	return true
}
```
