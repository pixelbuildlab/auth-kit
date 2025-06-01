import React from 'react'
import { Check } from 'lucide-react'
import { Button } from '../ui/button'
import type { PaymentMethod, Plan, PricingOption } from '@/types/PricingPlans'

type Props = {
  selectedPlanData: Plan
  currentPricing: PricingOption
  paymentMethod: PaymentMethod
  handlePurchasePlan: () => void
}

export function PricingPlanModuleInfo({
  selectedPlanData,
  currentPricing,
  paymentMethod,
  handlePurchasePlan,
}: Props) {
  return (
    <div className='bg-card border border-border rounded-lg shadow-lg p-8'>
      <div className='flex justify-between items-center border-b border-border pb-6 mb-6'>
        <div>
          <h2 className='text-2xl font-bold text-foreground'>
            {selectedPlanData.title}
          </h2>
          <p className='text-muted-foreground'>
            {paymentMethod === 'oneTime'
              ? 'One-time purchase'
              : 'Monthly subscription'}
          </p>
        </div>
        <div className='text-3xl font-bold text-blue-600 dark:text-blue-400'>
          ${currentPricing.price}
          <span className='text-sm text-muted-foreground font-normal'>
            {' '}
            {currentPricing.unit}
          </span>
        </div>
      </div>

      <div className='space-y-4 mb-8'>
        {currentPricing.features.map((feature, index) => (
          <div
            key={index}
            className='flex items-start gap-3'
          >
            <Check className='h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0' />
            <div>
              <p className='font-medium text-foreground'>{feature.title}</p>
              <p className='text-sm text-muted-foreground'>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Button
        className='w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white'
        onClick={handlePurchasePlan}
      >
        {paymentMethod === 'oneTime'
          ? `Purchase ${selectedPlanData.id === 'module' ? 'Module' : 'Full Demo'}`
          : `Subscribe to ${selectedPlanData.id === 'module' ? 'Module' : 'Full Demo'}`}
      </Button>

      {paymentMethod === 'subscription' && (
        <p className='text-center text-sm text-muted-foreground mt-4'>
          Secure payment powered by Stripe. Cancel anytime.
        </p>
      )}
    </div>
  )
}
