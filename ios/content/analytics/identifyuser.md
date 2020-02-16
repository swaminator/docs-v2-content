---
title: Identify User
description: 
---

This call sends information that you have specified about the user to Pinpoint. This could be an unauthenticated or an authenticated user. AWSMobileClient assigns all users an `identityId` that can be used to call `Amplify.Analytics.identifyUser` with. If you have asked for location access and got the user's location information, you can also provide that in `AnalyticsUserProfile.Location`.


```swift
func identifyUser() {
    let userState = AWSMobileClient.default().currentUserState
    let getIdentityIdTask = AWSMobileClient.default().getIdentityId()
    getIdentityIdTask.continueWith { (task) -> Any? in
        if let error = task.error {
            print("Failed to get identityId: \(error)")
        }

        guard let identityId = task.result else {
            print("Missing identityId")
            return nil
        }

        print("Got identityId: \(identityId). UserState: \(userState)")
        let location = AnalyticsUserProfile.Location(latitude: 47.606209,
                                                        longitude: -122.332069,
                                                        postalCode: "98122",
                                                        city: "Seattle",
                                                        region: "WA",
                                                        country: "USA")
        let properties = ["userState": "\(userState)"]
        let userProfile = AnalyticsUserProfile(name: "name",
                                                email: "name@email.com",
                                                location: location,
                                                properties: properties)
        Amplify.Analytics.identifyUser(identityId as String, withProfile: userProfile)

        return nil
    }
}
```
