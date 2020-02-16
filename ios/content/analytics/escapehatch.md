---
title: Escape Hatch
description: 
---

For advanced use cases where Amplify does not provide the functionality, you can retrieve the escape hatch to access AWSPinpoint instance.

Add `import AmplifyPlugins` and then the following code:

```swift
 func getEscapeHatch() throws {
    let plugin = try Amplify.Analytics.getPlugin(for: "awsPinpointAnalyticsPlugin")
    guard let pinpointAnalyticsPlugin = plugin as? AWSPinpointAnalyticsPlugin else {
        XCTFail("Could not get plugin of type AWSPinpointAnalyticsPlugin")
        return
    }
    let awsPinpoint = pinpointAnalyticsPlugin.getEscapeHatch()
    XCTAssertNotNil(awsPinpoint)
}
```
