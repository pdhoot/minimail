import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "How does Minimail work?",
    answer:
      "Minimail uses AI to clean your inbox in 4 steps: 1) Log in with Gmail, 2) Select spam criteria, 3) Grant temporary access, 4) AI cleans your inbox within hours.",
  },
  {
    question: "Is it safe to give Minimail access to my Gmail?",
    answer:
      "Yes, it's safe. We use OAuth2 for secure login, never see your password, and our access is temporary and limited. We don't store any of your emails or personal information.",
  },
  {
    question: "Can I choose which types of emails are deleted?",
    answer:
      "Absolutely! You'll select which types of emails you consider spam before we start. This ensures we only remove emails you don't want.",
  },
  {
    question: "What happens to the deleted emails?",
    answer:
      "We provide a CSV file with a list of all deleted messages, allowing you to review what was removed. We don't keep copies of your emails.",
  },
  {
    question: "How long does the cleanup process take?",
    answer:
      "The process typically takes a few hours, depending on your inbox size. We'll notify you once the cleaning is complete.",
  },
];

const FAQComponent = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-16">
      <h2 className="text-4xl font-bold mb-8 text-white text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-arcade">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure as="div" key={index}>
            {({ open }) => (
              <div className="bg-white bg-opacity-95 rounded-lg overflow-hidden border-2 border-purple-600 shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-purple-700 font-medium font-arcade focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pt-2 pb-4 text-purple-700 ">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
