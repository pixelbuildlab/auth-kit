import React from 'react'
import { PRICING_DATA } from '@/constants/pricing'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import type { PaymentMethod } from '@/types/PricingPlans'

type Props = {
  selectedPlan: string
  paymentMethod: PaymentMethod
  handlePlanSelect: (id: string) => void
  handlePurchasePlan: () => void
}

export const PricingPlanOptions = ({
  selectedPlan,
  paymentMethod,
  handlePlanSelect,
  handlePurchasePlan,
}: Props) => {
  return (
    <div className='flex flex-col md:flex-row gap-6 justify-center mb-16'>
      {PRICING_DATA.plans.map((plan) => (
        <div
          key={plan.id}
          className='relative'
        >
          {plan.popular && (
            <div className='absolute -top-8 left-0 right-0 mx-auto w-fit bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10'>
              Most Popular
            </div>
          )}
          <div
            className={`
                relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 bg-card
                ${
                  selectedPlan === plan.id
                    ? 'border-blue-600 dark:border-blue-400 shadow-xl ring-2 ring-blue-600/20 dark:ring-blue-400/20 bg-blue-50/50 dark:bg-blue-950/20'
                    : 'border-border hover:border-blue-400 dark:hover:border-blue-500 shadow-md hover:shadow-lg'
                }
              `}
            onClick={() => handlePlanSelect(plan.id)}
          >
            <div className='mb-4'>
              <h3 className='text-xl font-semibold mb-2 text-foreground'>
                {plan.title}
              </h3>
              <p className='text-muted-foreground'>{plan.description}</p>
            </div>

            <div className='flex items-end gap-1 mb-6'>
              <span className='text-3xl font-bold text-blue-600 dark:text-blue-400'>
                ${plan[paymentMethod].price}
              </span>
              <span className='text-muted-foreground mb-1'>
                {plan[paymentMethod].unit}
              </span>
            </div>

            {paymentMethod === 'subscription' && (
              <Badge className='mb-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30 border-green-200 dark:border-green-800'>
                Cancel anytime
              </Badge>
            )}

            <Button
              onClick={handlePurchasePlan}
              className={`w-full transition-all ${
                selectedPlan === plan.id
                  ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white'
                  : 'bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-blue-50'
              }`}
              variant={selectedPlan === plan.id ? 'default' : 'outline'}
            >
              {paymentMethod === 'oneTime' ? 'Buy Now' : 'Subscribe'}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
