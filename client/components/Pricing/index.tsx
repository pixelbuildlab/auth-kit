'use client'

import { useState } from 'react'
import { PricingPlanFaq } from './PricingPlanFaq'
import { PricingPlanDetails } from './PricingPlanDetails'
import { PricingPlanOptions } from './PricingPlanOptions'
import { PricingPlanMethods } from './PricingPlanMethods'
import { Stripe } from '../ui/SVG'
import { PRICING_DATA } from '@/constants/pricing'
import type { PaymentMethod } from '@/types/PricingPlans'

export const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('full')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('oneTime')

  const handlePlanSelect = (id: string) => {
    setSelectedPlan(id)
  }

  const togglePaymentMethod = () => {
    setPaymentMethod(paymentMethod === 'oneTime' ? 'subscription' : 'oneTime')
  }

  // Find the selected plan data
  const selectedPlanData = PRICING_DATA.plans.find(
    (plan) => plan.id === selectedPlan
  )

  // Safely access the current pricing option
  const currentPricing = selectedPlanData
    ? selectedPlanData[paymentMethod]
    : undefined

  const handlePurchasePlan = () => {
    // Handle purchase logic here
  }
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold mb-4 text-foreground'>
          Simple, Transparent Pricing
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto mb-8'>
          Choose the plan that works best for your needs. Get started with
          individual modules or access everything with our full demo.
        </p>

        <PricingPlanMethods
          togglePaymentMethod={togglePaymentMethod}
          paymentMethod={paymentMethod}
        />
      </div>

      {/* Selection */}
      <PricingPlanOptions
        handlePlanSelect={handlePlanSelect}
        handlePurchasePlan={handlePurchasePlan}
        paymentMethod={paymentMethod}
        selectedPlan={selectedPlan}
      />

      {selectedPlanData && currentPricing && (
        <PricingPlanDetails
          selectedPlanData={selectedPlanData}
          currentPricing={currentPricing}
          paymentMethod={paymentMethod}
          handlePlanSelect={handlePlanSelect}
          selectedPlan={selectedPlan}
          handlePurchasePlan={handlePurchasePlan}
        />
      )}

      <PricingPlanFaq />

      <div className='max-w-md mx-auto mt-16 text-center'>
        <div className='flex items-center justify-center gap-2 mb-4'>
          <Stripe />
        </div>
        <p className='text-sm text-muted-foreground'>
          Secure payment processing by Stripe. Your payment information is
          encrypted and secure.
        </p>
      </div>
    </div>
  )
}
