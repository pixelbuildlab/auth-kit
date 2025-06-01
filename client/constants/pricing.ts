import type { PaymentMethod, Plan } from '@/types/PricingPlans'

export const PRICING_DATA = {
  paymentMethods: ['one-time', 'subscription'] as PaymentMethod[],
  plans: [
    {
      id: 'module',
      title: 'Per Module',
      description: 'Access individual modules at an affordable price',
      oneTime: {
        price: 10,
        unit: 'per module',
        features: [
          {
            title: 'Access to a single module',
            description: 'Choose any one module that fits your needs',
          },
          {
            title: 'Documentation included',
            description: 'Basic guides to help you get started',
          },
          {
            title: '30 days of support',
            description: 'Get help when you need it most',
          },
          { title: 'One-time payment', description: 'No recurring charges' },
        ],
      },
      subscription: {
        price: 5,
        unit: '/month per module',
        features: [
          {
            title: 'Access to a single module',
            description: 'Choose any one module that fits your needs',
          },
          {
            title: 'Documentation included',
            description: 'Basic guides to help you get started',
          },
          {
            title: 'Ongoing support',
            description: 'Get help for as long as you subscribe',
          },
          {
            title: 'Regular updates',
            description: 'Always have the latest version',
          },
        ],
      },
    },
    {
      id: 'full',
      title: 'Full Demo',
      description: 'Get access to all modules at a discounted price',
      popular: true,
      oneTime: {
        price: 100,
        unit: 'one-time',
        features: [
          {
            title: 'Access to all available modules',
            description: 'Complete access to the entire demo suite',
          },
          {
            title: 'Comprehensive documentation',
            description: 'Detailed guides for all features',
          },
          { title: '90 days of support', description: 'Extended help period' },
          {
            title: 'Save over 50%',
            description: 'Compared to purchasing modules individually',
          },
        ],
      },
      subscription: {
        price: 20,
        unit: '/month',
        features: [
          {
            title: 'Access to all available modules',
            description: 'Complete access to the entire demo suite',
          },
          {
            title: 'Comprehensive documentation',
            description: 'Detailed guides for all features',
          },
          {
            title: 'Priority support',
            description: 'Get faster responses to your questions',
          },
          {
            title: 'Regular updates',
            description: 'Always have the latest version',
          },
          {
            title: 'Save over 50%',
            description: 'Compared to monthly per-module subscription',
          },
        ],
      },
    },
  ] as Plan[],
  faqs: [
    {
      question: "What's included in a module?",
      answer:
        "Each module includes the complete source code, documentation, and support. You'll have everything you need to integrate the module into your project.",
    },
    {
      question: 'Can I upgrade from a single module to the full demo?',
      answer:
        "Yes! If you've purchased individual modules, you can upgrade to the full demo by paying the difference. Contact our support team for assistance.",
    },
    {
      question: "What's the difference between one-time and subscription?",
      answer:
        'One-time payment gives you permanent access to the current version with limited support. Subscription provides ongoing updates and continuous support for as long as you subscribe.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.",
    },
    {
      question: 'Do you offer refunds?',
      answer:
        "We offer a 14-day money-back guarantee if you're not satisfied with your purchase. Please contact our support team to process your refund.",
    },
  ],
}
