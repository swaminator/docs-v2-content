---
title: 'Setup file storage'
---

AWS Amplify Storage module provides a simple mechanism for managing user content for your app in public, protected or private storage buckets. The Storage category comes with built-in support for Amazon S3.

## Create file storage 

> Ensure you have [installed and configured the Amplify CLI and library](tbd)

To create a project with the Storage category, run the following command from the root of your project:

```bash
$ amplify add storage
```

and select *Content* in prompted options:

```bash
? Please select from one of the below mentioned services (Use arrow keys)
❯ Content (Images, audio, video, etc.)
  NoSQL Database
```

The CLI will walk you though the options to enable Auth, if not enabled previously, and name your S3 bucket. To update your backend run:

```bash
$ amplify push
```

When your backend is successfully updated, your new configuration file `aws-exports.js` is copied under your source directory, e.g. '/src'.

