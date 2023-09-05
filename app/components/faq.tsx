"use client"

// components/FAQAccordion.tsx
import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: number;
  name: string;
  faqs: FAQItem[];
}

interface FAQAccordionProps {
  categories: FAQCategory[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleCategory = (categoryId: number) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const toggleFAQ = (faqId: number) => {
    setActiveFAQ(activeFAQ === faqId ? null : faqId);
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id} className="mb-4">
          <button
            onClick={() => toggleCategory(category.id)}
            className={`w-full text-left p-2 rounded-lg ${
              activeCategory === category.id ? 'bg-gray-300' : 'bg-gray-200'
            }`}
          >
            {category.name}
          </button>
          {activeCategory === category.id && (
            <div className="mt-2 space-y-2">
              {category.faqs.map((faq) => (
                <div key={faq.id} className="bg-white p-2 rounded-lg shadow-md">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className={`w-full text-left p-2 rounded-lg ${
                      activeFAQ === faq.id ? 'bg-gray-200' : ''
                    }`}
                  >
                    {faq.question}
                  </button>
                  {activeFAQ === faq.id && (
                    <div className="mt-2">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;

// ! TODO:
// put accrodion icon 
