import React from 'react'
import { Button } from '../ui/button'
import { PRICING_DATA } from '@/constants/pricing'
import type { PaymentMethod } from '@/types/PricingPlans'

type Props = {
  selectedPlan: string
  paymentMethod: PaymentMethod
  handlePlanSelect: (id: string) => void
}

export const PricingPlanComparison = ({
  selectedPlan,
  paymentMethod,
  handlePlanSelect,
}: Props) => {
  return (
    <>
      {/* Comparison Table - Right Side */}
      <div className='bg-card border border-border rounded-lg shadow-lg p-8'>
        <h2 className='text-2xl font-bold mb-6 text-foreground'>
          Compare Plans
        </h2>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='border-b border-border'>
                <th className='text-left py-3 px-4 text-foreground font-semibold text-sm'>
                  Feature
                </th>
                <th className='text-center py-3 px-4 text-foreground font-semibold text-sm'>
                  Per Module
                </th>
                <th className='text-center py-3 px-4 text-foreground font-semibold text-sm'>
                  Full Demo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-border'>
                <td className='py-3 px-4 text-foreground text-sm'>
                  Price (
                  {paymentMethod === 'oneTime' ? 'One-Time' : 'Subscription'})
                </td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'module'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  ${PRICING_DATA.plans[0][paymentMethod].price}{' '}
                  {PRICING_DATA.plans[0][paymentMethod].unit}
                </td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'full'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  ${PRICING_DATA.plans[1][paymentMethod].price}{' '}
                  {PRICING_DATA.plans[1][paymentMethod].unit}
                </td>
              </tr>
              <tr className='border-b border-border'>
                <td className='py-3 px-4 text-foreground text-sm'>
                  Number of modules
                </td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'module'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  1
                </td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'full'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  All (10+)
                </td>
              </tr>
              <tr className='border-b border-border'>
                <td className='py-3 px-4 text-foreground text-sm'>
                  Support period
                </td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'module'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  {paymentMethod === 'oneTime' ? '30 days' : 'Ongoing'}
                </td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'full'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  {paymentMethod === 'oneTime' ? '90 days' : 'Priority ongoing'}
                </td>
              </tr>
              <tr className='border-b border-border'>
                <td className='py-3 px-4 text-foreground text-sm'>Updates</td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'module'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  {paymentMethod === 'oneTime'
                    ? 'Current version only'
                    : 'Regular updates'}
                </td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'full'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  {paymentMethod === 'oneTime'
                    ? 'Current version only'
                    : 'Priority updates'}
                </td>
              </tr>
              <tr>
                <td className='py-3 px-4 text-foreground text-sm'>
                  Documentation
                </td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'module'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  Basic
                </td>
                <td
                  className={`text-center py-3 px-4 text-sm ${
                    selectedPlan === 'full'
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  Comprehensive
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Action Buttons */}
        <div className='mt-6 space-y-2'>
          <p className='text-sm text-muted-foreground mb-3'>Switch to:</p>
          <div className='flex gap-2'>
            <Button
              variant={selectedPlan === 'module' ? 'default' : 'outline'}
              size='sm'
              onClick={() => handlePlanSelect('module')}
              className='flex-1'
            >
              Per Module
            </Button>
            <Button
              variant={selectedPlan === 'full' ? 'default' : 'outline'}
              size='sm'
              onClick={() => handlePlanSelect('full')}
              className='flex-1'
            >
              Full Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
