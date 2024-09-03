"use client";

import faqData from "@/static/data/faqs";
import { useState } from "react";
import Accordion from "./Accordian";

faqData.forEach((faq, id) => {
  if (id === 0) {
    return (faq.open = true);
  }
  return (faq.open = false);
});

const AccordionGroup = () => {
  const [FAQs, setFAQs] = useState(faqData);

  const toggleFaq = (i) => {
    setFAQs((prev) => {
      return prev.map((faq, index) => {
        if (index === i) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq, open: false };
        }
      });
    });
  };

  return (
    <div className="mx-auto">
      <div className="space-y-1 rounded">
        {FAQs?.map((faq, i) => {
          return (
            <Accordion
              key={i}
              question={faq?.question}
              open={faq?.open}
              onClick={() => toggleFaq(i)}
              index={i}
            >
              {faq?.answer}
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionGroup;
