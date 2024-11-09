'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FaqItem = {
  question: string;
  answer: string;
};
export const faqData: FaqItem[] = [
    {
      question: 'Why choose 100xDevs?',
      answer:
        "With 100xDevs, there are no compromises. Rather than choosing between various tutors and random tutorials, learners get the benefit of building production-ready applications through a structured approach.",
    },
    {
      question: 'Who will be teaching in this program?',
      answer:
        "The program is led by Harkirat, one of India's top instructors in remote work, open source, and job placement, ensuring high-quality mentorship.",
    },
    {
      question: 'Is 100xDevs suitable for beginners?',
      answer:
        "Yes, 100xDevs is beginner-friendly. It starts from the basics and progresses to complex technologies through hands-on projects, making it suitable for all levels.",
    },
    {
      question: 'Are additional course materials provided besides recordings?',
      answer:
        "Absolutely. To make revisions easier, students receive well-documented slides for all lessons, eliminating the need to take timestamps or revisit recordings constantly.",
    },
    {
      question: 'How will 100xDevs help me grow as a developer?',
      answer:
        "100xDevs enables students to learn, build, and ship projects, helping them reach an inflection point to become self-sufficient developers in just a few months.",
    },
    {
      question: 'How can I get my doubts resolved quickly?',
      answer:
        "Personal teaching assistants (TAs) are available for immediate help. Additionally, the Discord community provides a platform for getting doubts resolved quickly.",
    },
    {
      question: 'Are there hands-on assignments?',
      answer:
        "Yes, assignments are specifically crafted to ensure a practical, hands-on learning experience that reinforces theoretical knowledge.",
    },
    {
      question: 'What is the refund policy?',
      answer:
        "100xDevs offers a 7-day no-questions-asked refund policy, providing peace of mind for students trying out the program.",
    },
  ];
  

export default function Faqs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div
      id="faq"
      className="w-full h-fit dark:bg-faq-dark md:px-16 px-5 flex flex-col items-center pt-10"
    >
      <div className="w-full h-fit flex flex-col items-center">
        <h2 className="font-bold md:text-4xl text-3xl text-center">
          Frequently Asked Questions
        </h2>
        <p className="md:text-sm text-xs py-2 font-semibold text-[#64748B] dark:text-[#94A3B8]">
          Quick answers to any questions you may have.
        </p>
      </div>

      <div className="w-full h-fit py-10 flex justify-center items-center">
        <div className="md:w-3/6 w-full flex flex-col items-center bg-white dark:bg-transparent">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className="w-full flex flex-col items-start md:p-4 p-2"
            >
              <button
                className="flex w-full justify-between items-center cursor-pointer focus:outline-none dark:bg-[#0F172A] bg-[#F1F5F9] p-4 rounded-xl"
                onClick={() => toggleExpand(i)}
                aria-expanded={expandedIndex === i}
                aria-controls={`faq-content-${i}`}
              >
                <p className="text-left font-medium dark:text-white text-gray-900">
                  {faq.question}
                </p>
                <motion.div
                  animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 dark:text-white text-gray-900" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {expandedIndex === i && (
                  <motion.div
                    id={`faq-content-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden w-full"
                  >
                    <p className="md:text-base text-sm mt-3 dark:text-[#F8FAFC] text-gray-900 leading-7 dark:bg-[#0F172A] bg-[#64748B1A] rounded-xl p-3">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
