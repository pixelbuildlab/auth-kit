import React from 'react'
import { PricingPlanComparison } from './PricingPlanComparison'
import { PricingPlanModuleInfo } from './PricingPlanModuleInfo'
import type { PaymentMethod, Plan, PricingOption } from '@/types/PricingPlans'

type Props = {
  selectedPlanData: Plan
  currentPricing: PricingOption
  selectedPlan: string
  paymentMethod: PaymentMethod
  handlePlanSelect: (id: string) => void
  handlePurchasePlan: () => void
}

export const PricingPlanDetails = ({
  selectedPlanData,
  currentPricing,
  selectedPlan,
  paymentMethod,
  handlePlanSelect,
  handlePurchasePlan,
}: Props) => {
  return (
    <div className='max-w-7xl mx-auto mb-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Selected Plan Details - Left Side */}
        <PricingPlanModuleInfo
          selectedPlanData={selectedPlanData}
          currentPricing={currentPricing}
          handlePurchasePlan={handlePurchasePlan}
          paymentMethod={paymentMethod}
        />

        {/* Comparison Table - Right Side */}
        <PricingPlanComparison
          handlePlanSelect={handlePlanSelect}
          paymentMethod={paymentMethod}
          selectedPlan={selectedPlan}
        />
      </div>
    </div>
  )
}
