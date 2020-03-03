---
title: Get Started
description: 
---

## Set Up Your Backend

In a terminal window, navigate to your project folder (the folder that contains your app `.Android Studioproj` file), and add the SDK to your app.

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

## Working with the API

Next make a call using one of the HTTP verbs under `Amplify.API` such as a GET:

```java
final Map parameters = new HashMap<>();
parameters.put("lang", "en_US");

RestOptions options = new RestOptions("/items", parameters);

Amplify.API.get("myAPI", options, new ResultListener<RestResponse>() {
    @Override
    public void onResult(RestResponse restResponse) {
        Log.i("SUCCESS", restResponse.toString());
    }

    @Override
    public void onError(Throwable throwable) {
        Log.e("RESTERROR", throwable.toString());
    }
});
```
