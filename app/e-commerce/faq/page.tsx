import FAQAccordion from "@/app/components/faq";
import React from "react";

const page = () => {
  // ** FAQ
  const faqCategories = [
    {
      id: 1,
      name: "General",
      faqs: [
        {
          id: 1,
          question: "What is our company mission?",
          answer: "Our mission is...",
        },
        {
          id: 2,
          question: "How do I contact customer support?",
          answer: "You can contact us...",
        },
      ],
    },
    {
      id: 2,
      name: "Billing",
      faqs: [
        {
          id: 3,
          question: "How do I change my billing information?",
          answer: "To change your billing info...",
        },
      ],
    },
    // Add more FAQ categories and items
  ];
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      <FAQAccordion categories={faqCategories} />
    </div>
  );
};

export default page;
