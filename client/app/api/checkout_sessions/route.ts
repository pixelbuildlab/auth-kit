import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'

export async function POST() {
  try {
    const headersList = headers()
    const origin = headersList.get('origin')

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1RVKXPEFZDSer5QNwTn9cje9',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment?canceled=true`,
    })
    if (!session.url) {
      throw new Error('Session URL is not defined')
    }
    return NextResponse.redirect(session.url, 303)
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}
