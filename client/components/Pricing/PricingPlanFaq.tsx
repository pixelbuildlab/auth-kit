import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PRICING_DATA } from '@/constants/pricing'

export function PricingPlanFaq() {
  return (
    <div className='max-w-3xl mx-auto'>
      <h2 className='text-2xl font-bold mb-6 text-center text-foreground'>
        Frequently Asked Questions
      </h2>
      <Accordion
        type='single'
        collapsible
        className='w-full'
      >
        {PRICING_DATA.faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
          >
            <AccordionTrigger className='text-foreground'>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className='text-muted-foreground'>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
