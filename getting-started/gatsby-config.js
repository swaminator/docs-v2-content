const navConfig = {
	"Amplify 101": {
		url: "/",
		description:
			"Learn about each part of the Amplify platform and how they all work together."
	},
	"Amplify CLI": {
		url: "/",
		description:
			"Amplify command line toolchain for provisioning cloud resources."
	},
	"Amplify Library": {
		url: "/",
		description: "Amplify client libraries for iOS, Android, and JavaScript."
	},
	"Amplify UI": {
		url: "/",
		description: "Framework-specific UI components."
	},
	"Amplify Console": {
		url: "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html",
		description:
			"A complete workflow for developing and deploying fullstack serverless apps"
	}
};

const footerNavConfig = {
	Blog: {
		href: "https://blog.apollographql.com/",
		target: "_blank",
		rel: "noopener noreferrer"
	},
	Contribute: {
		href: "https://www.apollographql.com/docs/community/"
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
          'Get Started (Web)': [
            'start/introduction',
            'start/schema',
            'start/auth',
            'start/authz',
            'start/storage',
            'start/hosting'
          ],
          'Get Started (React Native)': [
            'start-rn/introduction',
            'start-rn/api',
            'start-rn/auth',
            'start-rn/storage'
          ],
          'Get Started (iOS)': [
            'start-ios/intro',
            'start-ios/schema',
            'start-ios/auth',
            'start-ios/authZ',
            'start-ios/storage'
          ]
        }
      }
    }
  ]
};
