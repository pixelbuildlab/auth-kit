import 'server-only'
import getConfig from 'next/config'
import Stripe from 'stripe'

const config = getConfig()
const { serverRuntimeConfig } = config || {}

export const stripe = new Stripe(serverRuntimeConfig?.stripeSecretKey)
