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
  'Amplify JS': {
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
        githubRepo: 'swaminator/docs-v2-content',
        defaultVersion: 'default',
        navConfig,
        footerNavConfig,
        root: __dirname,
        subtitle: 'Amplify iOS',
        description: 'How to use the Amplify iOS',
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
          'GraphQL API': [
            'api-gql/intro',
            'api-gql/start',
            'api-gql/modeldata',
            'api-gql/codegen',
            'api-gql/adddata',
            'api-gql/querydata',
            'api-gql/mutatedata',
            'api-gql/subscribedata',
            'api-gql/configauth',
            'api-gql/graphqlserver',
            'api-gql/manualconfig'
          ],
          'REST API': [
            'api-rest/intro',
            'api-rest/start'
          ],
          'Storage': [
            'storage/intro',
            'storage/start',
            'storage/upload',
            'storage/download',
            'storage/geturl',
            'storage/list',
            'storage/remove',
            'storage/escapehatch',
            'storage/configureaccess'
          ],
          'Datastore': [
            'datastore/intro',
            'datastore/start',
            'datastore/data-access',
            'datastore/sync',
            'datastore/relational',
            'datastore/conflict'
          ],
          'Analytics': [
            'analytics/start',
            'analytics/record',
            'analytics/autotrack',
            'analytics/identifyuser',
            'analytics/escapehatch'
          ],
          'Predictions': [
            'predictions/intro',
            'predictions/start',
            'predictions/text-speech',
            'predictions/transcribe',
            'predictions/translate',
            'predictions/identify-text',
            'predictions/identify-entity',
            'predictions/label-image',
            'predictions/interpret',
            'predictions/escapehatch'
          ]
        }
      }
    }
  ]
};
