const navConfig = {
  'Amplify 101': {
    url: '/',
    description:
      'Learn about each part of the Amplify platform and how they all work together.'
  },
  'Amplify CLI': {
    url: '/',
    description:
      'Amplify command line toolchain for provisioning cloud resources.'
  },
  'Amplify Library': {
    url: '/',
    description:
      "Amplify client libraries for iOS, Android, and JavaScript."
  },
  'Amplify UI': {
    url: '/',
    description:
      'Framework-specific UI components.'
  },
  'Amplify Console': {
    url: 'https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html',
    description:
      'A complete workflow for developing and deploying fullstack serverless apps'
  }
};

const footerNavConfig = {
  Blog: {
    href: 'https://blog.apollographql.com/',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  Contribute: {
    href: 'https://www.apollographql.com/docs/community/'
  }
};
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'Amplify Docs',
        description: "Amplify Framework Docs",
        menuTitle: 'Amplify Framework',
        baseUrl: 'https://www.amplify.aws',
        twitterHandle: 'awsamplify',
        defaultVersion: 'default',
        navConfig,
        footerNavConfig,
        root: __dirname,
        subtitle: 'Amplify 101',
        description: 'How to use the Amplify Framework',
        sidebarCategories: {
          null: ['index'],
          'Authentication': [
            'auth/intro',
            'auth/start',
            'auth/signup',
            'auth/signin',
            'auth/signout',
            'auth/password',
            'auth/verification',
            'auth/guestaccess',
            'auth/prebuiltui',
            'auth/social',
            'auth/saml',
            'auth/devidentity',
            'auth/mfa',
            'auth/oauth',
            'auth/customizeflow',
            'auth/devicefeatures'
          ],
          'API (GraphQL)': [
            'api/intro',
            'api/start',
            'api/modeldata',
            'api/codegen',
            'api/adddata',
            'api/querydata',
            'api/mutatedata',
            'api/subscribedata',
            'api/configauth',
            'api/offline',
            'api/synchronization',
            'api/customresolvers',
            'api/graphqlserver',
            'api/manualconfig'
          ],
          'API (REST)': [
            'api/intro'
          ],
          'Storage': [
            'api/intro'
          ],
          'Datastore': [
            'api/intro'
          ],
          'Analytics': [
            'api/intro'
          ],
          'Predictions': [
            'api/intro'
          ],
          'Interactions': [
            'api/intro'
          ],
          'Push Notifications': [
            'api/intro'
          ],
          'XR': [
            'api/intro'
          ],
          'PubSub': [
            'api/intro'
          ],
          'Utilities': [
            'api/intro'
          ]
        }
      }
    }
  ]
};
