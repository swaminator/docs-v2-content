---
title: "4. File Storage"
description: Storage for uploading and downloading photos
---

Because we're making a photo sharing app, we'll need somewhere to store the images. Amplify Storage module provides a simple mechanism for managing user content for your app in public, protected or private storage buckets. The Storage category comes with built-in support for Amazon S3.

## Add Storage to Your Backend

We'll set up storage with the Amplify CLI, from the root of your project run:

```bash
amplify add storage
```

When you run this command, the CLI will prompt you for more information about your storage needs. Choose the following options:

```
Please select from one of the below mentioned services: (Use arrow keys)
❯ Content (Images, audio, video, etc.)
  NoSQL Database

Please provide a friendly name for your resource that will be used to label this category in the project: photoshare

Please provide bucket name: photos

Who should have access: Auth and guest users

What kind of access do you want for Authenticated users?
◉ create/update
◉ read
◉ delete


What kind of access do you want for Guest users?
◯ create/update
◉ read
◯ delete


Do you want to add a Lambda Trigger for your S3 Bucket? No
```

Now that our storage requirments are defined we need to push the new configuration to the cloud, to do that run:

```bash
amplify push
```

Since we now have a place to store our photos, let's update the app and add support for uploading photos.

## Add Photo Uploads

In order to handle file uploads, we'll need to allow the user to pick a photo, and upload it to S3. We'll then take the key given back to us from S3 and store it in our GraphQL API for use in the app.

Open up `src/App.js` and update with the folowing:

```diff
    import React, { useState, useEffect } from "react";
    import "./App.css";
-   import { withAuthenticator } from "aws-amplify-react";
+   import { withAuthenticator, S3Image } from "aws-amplify-react";
-   import { API, graphqlOperation } from "aws-amplify";
+   import { API, Storage, graphqlOperation } from "aws-amplify";
+   import uuid from "uuid/v4";

    import { listPhotos } from "./graphql/queries";
+   import { createPhoto } from "./graphql/mutations";

    function App() {
        const [photos, setPhotos] = useState([]);
+       const [file, setFile] = useState();

        useEffect(() => {
            const fetchPhotos = async () => {
            const result = await API.graphql(graphqlOperation(listPhotos));
            setPhotos(result.data.listPhotos.items);
            };

            fetchPhotos();
        }, [setPhotos]);

+      const onFileSelected = e => {
+        setFile(e.target.files[0]);
+      };

+      const uploadPhoto = async () => {
+        const result = await Storage.put(`${uuid()}/${file.name}`, file);
+        await API.graphql(
+           graphqlOperation(createPhoto, {
+             input: { url: result.key }
+           })
+         );
+      };

        return (
            <div className="App">
+               <div className="Photo-upload">
+                   <input
+                       type="file"
+                       onClick={e => (e.target.value = null)}
+                      onChange={onFileSelected}
+                   />
+                   <button disabled={!file} onClick={uploadPhoto}>
+                       Upload Photo
+                   </button>
+               </div>
                <div className="Photo-gallery">
                    {!photos.length && <h2>No photos yet.</h2>}
                    {photos.map(photo => (
                    <div key={photo.id} className="Photo-container">
                        <S3Image className="Photo" imgKey={photo.url} />
                    </div>
                    ))}
                </div>
            </div>
        );
    }

    export default withAuthenticator(App, true);
```

We'll also need to install the `uuid` package we use to create unique names for the photos:

```bash
npm install uuid
```

Now let's update the styling just a bit, open `src/App.js` and add the following:

```diff
    .App {
        text-align: center;
    }

    .App-logo {
        height: 40vmin;
        pointer-events: none;
    }

    @media (prefers-reduced-motion: no-preference) {
        .App-logo {
            animation: App-logo-spin infinite 20s linear;
        }
    }

    .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    }

    .App-link {
        color: #61dafb;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .Photo-gallery {
        display: flex;
    }

    .Photo-container {
        width: 250px;
        height: 250px;
        margin: 8px;
    }

    .Photo-container div {
        width: 100%;
        height: 100%;
    }

    .Photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

+   .Photo-upload {
+       margin-top: 16px;
+   }
```

If you upload a new photo, you may notice that it doesn't show immediately in the gallery. This is because we haven't yet set up the realtime functionality needed to do this. We currently only query for the photos when the app loads. In the next step we'll add in some realtime capabilities.
