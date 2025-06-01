import 'server-only'
import getConfig from 'next/config'
import Stripe from 'stripe'

const config = getConfig()
const { serverRuntimeConfig } = config || {}
// https://docs.stripe.com/checkout/quickstart?lang=node&client=next
export const stripe = new Stripe(serverRuntimeConfig?.stripeSecretKey)
