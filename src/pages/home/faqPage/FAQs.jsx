import Title from "@/components/common/Title";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqsData = [
  {
    value: "item-1",
    title: "What types of trips do you offer?",
    content: [
      "We organize guided hiking and camping trips across the UAE, including day hikes, overnight camping, desert treks, mountain hikes, and private adventures. Our routes range from beginner-friendly trails to more challenging climbs.",
    ],
  },
  {
    value: "item-2",
    title: "Are your trips beginner-friendly?",
    content: [
      "Yes! We offer hikes and camps suitable for all fitness levels. Each trip is labeled with a difficulty rating, and our guides provide support and tips throughout the experience.",
    ],
  },
  {
    value: "item-3",
    title: "What should I bring for a hike or camping trip?",
    content: [
      `You’ll receive a full packing list after booking, but essentials include:
- Comfortable hiking shoes
- Backpack with water and snacks
- Sunscreen, hat, sunglasses
- Personal medication (if any)

For overnight trips, we’ll guide you on what to bring (tent, sleeping bag, etc.), or provide gear rental options.`,
      `Do you provide transportation?
Transportation is available on a limited-seat basis and only from Dubai. Please check with our team for availability before booking.`,
    ],
  },
  {
    value: "item-4",
    title: "Do you provide transportation?",
    content: [
      "Transportation is available on a limited-seat basis and only from Dubai. Please check with our team for availability before booking.",
    ],
  },
  {
    value: "item-5",
    title: "Is prior experience required?",
    content: [
      "Not at all! Our hikes are guided by experienced professionals who ensure your safety and enjoyment. We cater to all levels of experience.",
    ],
  },
  {
    value: "item-6",
    title: "Are kids or families allowed?",
    content: [
      "Definitely we offer family-friendly hikes and camping experiences. Minimum age requirements may apply depending on the trail difficulty.",
    ],
  },
  {
    value: "item-7",
    title: "Do you offer private or corporate group bookings?",
    content: [
      "Yes, we organize customized private group hikes and corporate team-building events. Contact us directly to plan your tailor-made adventure.",
    ],
  },
  {
    value: "item-8",
    title: "What’s included in the price?",
    content: [
      `Typically, the cost includes:
- Professional guide
- Safety equipment
- First aid support
- Refreshments or meals (depending on the trip)
Some trips may include transportation and gear rental please check the individual trip page for details.`,
    ],
  },
  {
    value: "item-9",
    title: "What if I need to cancel or reschedule?",
    content: [
      "We understand that plans change. Our cancellation and refund policies vary by trip and notice period. Details are provided during booking, or you can contact us for clarification.",
    ],
  },
  {
    value: "item-10",
    title: "Is it safe to hike in the UAE’s climate?",
    content: [
      "Yes, safety is our top priority. We schedule trips early in the day or during cooler months, monitor weather conditions, and always carry sufficient water and safety gear. You’ll be advised on how to prepare properly for the environment.",
    ],
  },
  {
    value: "item-11",
    title: "Do you offer multi-day or international trips?",
    content: [
      "Yes! We offer international trips as well. Please check the International Experience section on our website for upcoming adventures.",
    ],
  },
  {
    value: "item-12",
    title: "How do I book a trip?",
    content: [
      "You can browse upcoming trips and book directly through our website or contact our team via WhatsApp, email, or phone for assistance.",
    ],
  },
];

const FAQs = () => {
  return (
    <div className="py-16 section-padding-x flex flex-col bg-[#F7F7F7] items-center justify-center">
      <Title level="title40" className="mb-4">
        Frequently Asked Questions (FAQ)
      </Title>
      <Title level="title20" className="mb-8 text-[#5C5C5C]">
        Your go-to guide for hiking and camping adventures in the UAE
      </Title>

      <div className="mt-14 w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
          defaultValue="item-1"
        >
          {faqsData.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="bg-white px-4 rounded-2xl"
            >
              <AccordionTrigger className="text-[32px]">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col text-xl whitespace-pre-line">
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
