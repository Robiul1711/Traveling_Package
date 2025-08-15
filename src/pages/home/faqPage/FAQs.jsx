import Title from '@/components/common/Title';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqsData = [
  {
    value: 'item-1',
    title: 'What types of trips do you offer?',
    content: [
      'We organize guided hiking and camping trips across the UAE, including day hikes, overnight camping, desert treks, mountain hikes, and private group adventures. Our routes range from beginner-friendly trails to more challenging climbs.'
    ]
  },
  {
    value: 'item-2',
    title: 'Shipping Details',
    content: [
      'We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.',
      'All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.'
    ]
  },
  {
    value: 'item-3',
    title: 'Return Policy',
    content: [
      'We stand behind our products with a comprehensive 30-day return policy. If you\'re not completely satisfied, simply return the item in its original condition.',
      'Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.'
    ]
  }
];

const FAQs = () => {
  return (
    <div className='py-16 section-padding-x flex flex-col bg-[#F7F7F7] items-center justify-center'>
      <Title level="title40" className="mb-4">
        Frequently Asked Questions (FAQ)
      </Title>
      <Title level="title20" className="mb-8 text-[#5C5C5C]">
        Your go-to guide for hiking and camping adventures in the UAE
      </Title>

      <div className='mt-14 w-full'>
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4" defaultValue="item-1">
          {faqsData.map(faq => (
            <AccordionItem key={faq.value} value={faq.value} className={" bg-white px-4 rounded-2xl"}>
              <AccordionTrigger className="text-[32px]">{faq.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-balance text-xl">
                {faq.content.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
