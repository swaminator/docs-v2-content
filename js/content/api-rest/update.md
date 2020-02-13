---
title: Updating data
description: 
---

## POST data

Posts data to the API endpoint:

```javascript
let apiName = 'MyApiName'; // replace this with your api name.
let path = '/path'; //replace this with the path you have configured on your API
let myInit = {
    body: {}, // replace this with attributes you need
    headers: {} // OPTIONAL
}

API.post(apiName, path, myInit).then(response => {
    // Add your code here
}).catch(error => {
    console.log(error.response)
});
```

Example with async/await

```javascript
async function postData() { 
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        body: {}, // replace this with attributes you need
        headers: {} // OPTIONAL
    }
    return await API.post(apiName, path, myInit);
}

postData();
```

## PUT data

When used together with a REST API, `put()` method can be used to create or update records. It updates the record if a matching record is found. Otherwise, a new record is created.

```javascript
let apiName = 'MyApiName'; // replace this with your api name.
let path = '/path'; // replace this with the path you have configured on your API
let myInit = {
    body: {}, // replace this with attributes you need
    headers: {} // OPTIONAL
}

API.put(apiName, path, myInit).then(response => {
    // Add your code here
}).catch(error => {
    console.log(error.response)
});
```

Example with async/await:

```javascript
async function putData() { 
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        body: {}, // replace this with attributes you need
        headers: {} // OPTIONAL
    }
    return await API.put(apiName, path, myInit);
}

putData();
```

Access body in the Lambda function

```javascript
// using a basic lambda handler
exports.handler = (event, context) => {
  console.log('body: ', event.body);
}

// using serverless express
app.put('/myendpoint', function(req, res) {
  console.log('body: ', req.body)
});
```

Update a record:

```javascript
const params = {
    body: {
        itemId: '12345',
        itemDesc: ' update description'
    }
}
const apiResponse = await API.put('MyTableCRUD', '/manage-items', params);
```

## DELETE data

```javascript
let apiName = 'MyApiName'; // replace this with your api name.
let path = '/path'; //replace this with the path you have configured on your API
let myInit = { // OPTIONAL
    headers: {} // OPTIONAL
}

API.del(apiName, path, myInit).then(response => {
    // Add your code here
}).catch(error => {
    console.log(error.response)
});
```

Example with async/await

```javascript
async function deleteData() { 
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        headers: {} // OPTIONAL
    }
    return await API.del(apiName, path, myInit);
}

deleteData();
```

Access body in the Lambda function

```javascript
// using a basic lambda handler
exports.handler = (event, context) => {
  console.log('body: ', event.body);
}

// using serverless express
app.delete('/myendpoint', function(req, res) {
  console.log('body: ', req.body)
});
```

## Access body in Lambda proxy function

```javascript
// using a basic lambda handler
exports.handler = (event, context) => {
  console.log('body: ', event.body);
}

// using serverless express
app.post('/myendpoint', function(req, res) {
  console.log('body: ', req.body)
});
```