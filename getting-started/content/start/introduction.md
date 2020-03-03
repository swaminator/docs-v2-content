---
title: 0. Introduction
description: Learn how to build production ready apps with the Amplify Framework
---

Welcome! This tutorial guides you through building and deploying a full-stack serverless app with the Amplify Framework. We'll use a "real world" example complete with data modeling, authentication, authorization, CI/CD, custom domain setup, and hosting.

Let's get started!

## What we'll build

In this tutorial, we'll use React to build a photo sharing app that lets users upload photos to a shared photo gallery. We'll use a GraphQL API (AWS AppSync) to access data stored in a NoSQL database (Amazon DynamoDB). In addition, we'll demonstrate how to authenticate users, communicate with our API, and manage photo uploads.

<!-- Finally, we add in AI-powered object tagging using Amazon Rekognition, allowing users to discover photos without any manual data entry. -->

<!-- Here's what the finished app will look like: -->
<!--
<div style="text-align:center">
  <img src="../images/space-explorer.png" alt="Space explorer" width="400">
</div> -->

The app includes the following views:

- A login view
- A photo gallery view
- A photo upload view

## Prerequisites

This tutorial assumes that you're familiar with both JavaScript/ES6 and React. If you need to brush up on React, we recommend going through the [official tutorial](https://reactjs.org/tutorial/tutorial.html).

> If you don't want to use React, you can find our other getting started guides [here].

### System requirements

Before we begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) v8.x or later
- [npm](https://www.npmjs.com/) v5.x or later
- [git](https://git-scm.com/) v2.14.1 or later

### Sign up for an AWS account

If you don't already have an AWS account, you'll need to create one in order to follow the steps outlined in this tutorial.

[Create AWS Account](https://portal.aws.amazon.com/billing/signup?redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start)

> There are no upfront charges or any term commitments to create an AWS account and signing up gives you immediate access to the AWS Free Tier.

## Install and setup the Amplify CLI

The Amplify Command Line Interface (CLI) is a unified toolchain to create, integrate, and manage the AWS cloud services for your app.

```bash
npm install -g @aws-amplify/cli
```

Configure the CLI to work with your AWS account by creating an IAM user. Amazon IAM (Identity and Access Management) enables you to manage users and user permissions in AWS. You can create one or more IAM users in your AWS account. By default, Amplify creates a user with `AdministratorAccess` to your account so you can provision resources. The video below demonstrates how to install and configure the Amplify CLI.

```bash
amplify configure
```

<iframe
  width="500"
  height="345"
  src="https://www.youtube.com/embed/fWbM5DLh25U"
></iframe>

Next, we'll set up the React app and initialize Amplify!
