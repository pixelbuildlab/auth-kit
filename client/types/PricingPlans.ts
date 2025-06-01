export type PaymentMethod = 'oneTime' | 'subscription'

export type Feature = {
  title: string
  description: string
}

export type PricingOption = {
  price: number
  unit: string
  features: Feature[]
}

export type Plan = {
  id: string
  title: string
  description: string
  popular?: boolean
  oneTime: PricingOption
  subscription: PricingOption
}
