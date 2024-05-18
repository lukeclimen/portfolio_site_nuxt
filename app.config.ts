export default defineAppConfig({
  appName: 'Portfolio site for Luke Climenhage',
  appDescription: 'Portfolio site created with from the Canvas template, built by HugoRCD',
  profilePicture: '/assets/luke-climenhage.webp',
  footerName: 'Luke Climenhage',
  email: 'contact@lukeclimenhage.com',
  socials: {
    github: 'https://github.com/lukeclimen',
    linkedin: 'https://www.linkedin.com/in/lclimenh',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
