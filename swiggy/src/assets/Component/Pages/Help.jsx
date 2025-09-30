import { useState } from "react";
import React from "react";

export default function HelpSupport() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      title: "I want to partner my restaurant with Swiggy",
      content: "You can list your restaurant by filling out the onboarding form...",
    },
    {
      title: "What are the mandatory documents needed to list my restaurant on Swiggy?",
      content: "You will need GST, FSSAI license, PAN card, and bank details.",
    },
    {
      title: "I want to opt-out from Google reserve",
      content: "Please contact support to remove your restaurant from Google Reserve.",
    },
  ];

  const sidebar = ["Partner Onboarding", "Legal", "FAQs", "Instamart Onboarding"];

  return (
    <div className=" h-screen bg-blue-700 overflow-hidden ">
      {/* Header */}
     
             <header className="bg-blue-700 ml-40 text-white p-6">
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-gray-200 mt-1">Let's take a step ahead and help you better.</p>
      </header>
<div className="flex flex-col items-center h-full w-screen">
      <div className="flex  bg-gray-100 h-full w-[1600px]">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-200 p-4">
          {sidebar.map((item, index) => (
            <div
              key={index}
              className="py-3 px-4 mb-2 cursor-pointer hover:bg-gray-300 rounded"
            >
              {item}
            </div>
          ))}
        </aside>

        {/* Content / Accordion */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Partner Onboarding</h2>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow rounded">
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full text-left p-4 flex justify-between items-center"
                >
                  <span className="font-medium">{faq.title}</span>
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 border-t border-gray-200 text-gray-700">
                    {faq.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
     </div>
    </div>
  );
}
