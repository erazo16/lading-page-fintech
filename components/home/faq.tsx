/**
 * Componente de Preguntas Frecuentes (FAQ)
 * Muestra las preguntas y respuestas en un formato de acordeón,
 * permitiendo al usuario expandir/colapsar cada pregunta.
 */

import React, { useState } from "react";
import {
  FAQAnswer,
  FAQContainer,
  FAQItem,
  FAQQuestion,
  FAQSection,
  SectionDescriptionFaq,
  SectionTitleFaq,
} from "../styled";
import { faqItems } from "@/utils/data";

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <FAQSection id="faq">
      <div className="container mx-auto">
        <SectionTitleFaq>Preguntas frecuentes</SectionTitleFaq>
        <SectionDescriptionFaq>
          Encuentra respuestas a las preguntas más comunes sobre nuestros
          productos y servicios
        </SectionDescriptionFaq>

        <FAQContainer>
          {faqItems.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion
                $isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>{item.answer}</FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </div>
    </FAQSection>
  );
};

export default Faq;
