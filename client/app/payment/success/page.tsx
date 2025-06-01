import React from 'react'

export const metadata = {
  title: 'Payment Success - Auth-Kit',
  description:
    'Your payment was successful. Thank you for your purchase! You can now close this window.',
}

export default function SuccessPage() {
  // todo add information about the payment, like transaction ID, amount, etc.
  return (
    <>
      <h1>Payment Successful</h1>
      <p>Your payment was successful. Thank you for your purchase!</p>
      <p>You can now close this window.</p>
      <p>If you have any questions, please contact support.</p>
    </>
  )
}
