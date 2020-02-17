---
title: Escape Hatch
description: 
---

For advanced use cases where Amplify does not provide the functionality, you can retrieve the escape hatch to access AWSPinpoint instance.

```java
import com.amazonaws.mobileconnectors.pinpoint.analytics.AnalyticsClient;

AmazonPinpointAnalyticsPlugin plugin = (AmazonPinpointAnalyticsPlugin) Amplify
        .Analytics
        .getPlugin("amazonPinpointAnalyticsPlugin");
AnalyticsClient analyticsClient = plugin.getEscapeHatch();
```