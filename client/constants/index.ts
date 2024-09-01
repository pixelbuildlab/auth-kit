export const AUTH_KIT_ROUTES = {
  admin: '/admin',
  login: '/login',
  register: '/register',
  home: '/',
  profile: '/profile',
  onboarding: '/onboarding',
  forgotPassword: '/forgot-password',
} as const

export const AUTH_OPTIONS = {
  main: {
    heading: 'Select to view authentication options for frontend or backend.',
    mainRoute: '',
    options: [
      {
        id: '1',
        title: 'Frontend Authentication Services',
        description:
          'Select to view frontend authentication options (Client: Next.js).',
        info: 'Client-side solutions for handling authentication.',
        route: '',
      },
      {
        id: '2',
        title: 'Backend Authentication Services',
        description:
          'Select to view backend authentication options (Server: Nest.js).',
        info: 'Server-side solutions for managing authentication.',
        route: '',
      },
    ],
  },
  frontend: {
    heading: 'Explore client-side solutions for managing authentication.',
    mainRoute: '/client',
    options: [
      {
        id: '1',
        title: 'Firebase Authentication',
        description: 'Client-side SDK for multi-method authentication.',
        info: 'Versatile and easy to use.',
        route: '/firebase',
      },
      {
        id: '2',
        title: 'Auth0 (Client-Side)',
        description: 'Handles social logins and session management.',
        info: 'Secure and feature-rich option.',
        route: '/auth0',
      },
      {
        id: '3',
        title: 'Magic.link',
        description: 'Passwordless authentication using email or Web3.',
        info: 'Simple and passwordless login.',
        route: '/magic',
      },
      {
        id: '4',
        title: 'AWS Amplify Authentication',
        description: 'Front-end libraries for authentication with AWS Cognito.',
        info: 'Powerful integration with AWS.',
        route: '/aws',
      },
      {
        id: '5',
        title: 'Clerk',
        description: 'All-in-one user management and authentication solution.',
        info: 'Comprehensive and easy setup.',
        route: '/clerk',
      },
    ],
  },
  backend: {
    heading: 'Explore server-side solutions for managing authentication.',
    mainRoute: '/server',
    options: [
      {
        id: '1',
        title: 'Passport.js',
        description: 'Middleware for various authentication strategies.',
        info: 'Flexible and widely used.',
        route: '/passport',
      },
      {
        id: '2',
        title: 'Auth0 (Server-Side)',
        description: 'Handles authentication and authorization on the server.',
        info: 'Feature-rich and scalable.',
        route: '/auth0',
      },
      {
        id: '3',
        title: 'Firebase Admin SDK',
        description: 'Server-side SDK for managing Firebase authentication.',
        info: 'Secure and integrated with Firebase.',
        route: '/firebase',
      },
      {
        id: '4',
        title: 'AWS Cognito (Server-Side)',
        description: 'Authentication and user management with AWS services.',
        info: 'Powerful AWS integration.',
        route: '/aws',
      },
      {
        id: '5',
        title: 'Keycloak',
        description: 'Open-source identity and access management solution.',
        info: 'Advanced identity management.',
        route: '/keycloak',
      },
    ],
  },
}

export const AUTH_FINAL_OPTIONS = [
  {
    id: '1',
    title: 'Register',
    description: 'Create brand new account',
    route: '/register',
  },
  {
    id: '2',
    title: 'Sign in',
    description: 'Login to existing account',
    route: '/login',
  },
  {
    id: '3',
    title: 'Forgot Password',
    description: 'Get back your account if lost',
    route: '/forgot-password',
  },
]
