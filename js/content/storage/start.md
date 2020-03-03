---
title: 'Setup file storage'
---

AWS Amplify Storage module provides a simple mechanism for managing user content for your app in public, protected or private storage buckets. The Storage category comes with built-in support for Amazon S3.

## Create storage bucket

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

## Import storage bucket

Manual setup enables you to use your existing Amazon Cognito and Amazon S3 credentials in your app:

```javascript
import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'XX-XXXX-X', // REQUIRED - Amazon Cognito Region
        userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        AWSS3: {
            bucket: '', //REQUIRED -  Amazon S3 bucket
            region: 'XX-XXXX-X', //OPTIONAL -  Amazon service region
        }
    }
});

```

### File access for imported buckets
If you set up your Cognito resources manually, the roles will need to be given permission to access the S3 bucket.

There are two roles created by Cognito: an `Auth_Role` that grants signed-in-user-level bucket access and an `Unauth_Role` that allows unauthenticated access to resources. Attach the corresponding policies to each role for proper S3 access. Replace ```{enter bucket name}``` with the correct S3 bucket.

Inline policy for the `Auth_Role`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}/public/*",
                "arn:aws:s3:::{enter bucket name}/protected/${cognito-identity.amazonaws.com:sub}/*",
                "arn:aws:s3:::{enter bucket name}/private/${cognito-identity.amazonaws.com:sub}/*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}/uploads/*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}/protected/*"
            ],
            "Effect": "Allow"
        },
        {
            "Condition": {
                "StringLike": {
                    "s3:prefix": [
                        "public/",
                        "public/*",
                        "protected/",
                        "protected/*",
                        "private/${cognito-identity.amazonaws.com:sub}/",
                        "private/${cognito-identity.amazonaws.com:sub}/*"
                    ]
                }
            },
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}"
            ],
            "Effect": "Allow"
        }
    ]
}
```

Inline policy for the `Unauth_Role`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}/public/*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}/uploads/*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}/protected/*"
            ],
            "Effect": "Allow"
        },
        {
            "Condition": {
                "StringLike": {
                    "s3:prefix": [
                        "public/",
                        "public/*",
                        "protected/",
                        "protected/*"
                    ]
                }
            },
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::{enter bucket name}"
            ],
            "Effect": "Allow"
        }
    ]
}
```

The policy template that Amplify CLI uses is found [here](https://github.com/aws-amplify/amplify-cli/blob/b12d20b9d85f7fc6abf7e2f7fbe11e1a108911b9/packages/amplify-category-storage/provider-utils/awscloudformation/cloudformation-templates/s3-cloudformation-template.json).