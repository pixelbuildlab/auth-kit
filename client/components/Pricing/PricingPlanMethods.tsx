import React from 'react'
import { CreditCard, CalendarClock } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import type { PaymentMethod } from '@/types/PricingPlans'

type Props = {
  togglePaymentMethod: () => void
  paymentMethod: PaymentMethod
}

export function PricingPlanMethods({
  togglePaymentMethod,
  paymentMethod,
}: Props) {
  return (
    <div className='flex items-center justify-center gap-4 mb-8'>
      <div className='flex items-center space-x-2'>
        <CreditCard
          className={`h-5 w-5 transition-colors ${
            paymentMethod === 'oneTime'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-muted-foreground'
          }`}
        />
        <Label
          htmlFor='payment-toggle'
          className={`transition-colors cursor-pointer ${
            paymentMethod === 'oneTime'
              ? 'font-medium text-foreground'
              : 'text-muted-foreground'
          }`}
        >
          One-time
        </Label>
      </div>
      <Switch
        id='payment-toggle'
        checked={paymentMethod === 'subscription'}
        onCheckedChange={togglePaymentMethod}
      />
      <div className='flex items-center space-x-2'>
        <CalendarClock
          className={`h-5 w-5 transition-colors ${
            paymentMethod === 'subscription'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-muted-foreground'
          }`}
        />
        <Label
          htmlFor='payment-toggle'
          className={`transition-colors cursor-pointer ${
            paymentMethod === 'subscription'
              ? 'font-medium text-foreground'
              : 'text-muted-foreground'
          }`}
        >
          Subscription
        </Label>
      </div>
    </div>
  )
}
