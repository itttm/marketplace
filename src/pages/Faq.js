import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextInput from "../components/commons/TextInput";
import CardFaq from "../components/cards/CardFaq";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Purchases", "Returns", "Payments"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  // Example data array for FAQs
  const faqData = [
    {
      question: "Can I create my own custom category?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What are the payment methods?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Available payment methods are credit card, PayPal, and others.",
    },
    {
      question: "Will I get a replacement if the cards are damaged?",
      answer:
        "Yes, you can get a replacement within 30 days of purchase if the cards are damaged.",
    },
    {
      question: "How does Card Marketplace help my business?",
      answer:
        "Card Marketplace provides a platform for buying and selling customized cards to expand your business reach.",
    },
    {
      question: "How do returns & refunds work?",
      answer:
        "Returns and refunds are processed within 7 business days upon receiving the returned items.",
    },
    {
      question: "What are the terms & conditions for returning a product?",
      answer:
        "Products should be returned in their original condition within 30 days to be eligible for a refund.",
    },
  ];

  return (
    <div>
      <Header isLogin />
      <div className="container mx-auto px-5 py-32 lg:py-48 relative after:content-[''] after:w-[360px] after:right-[100%] after:h-[360px] after:bottom-[80%] after:blur-[250px] after:bg-primary after:rounded-full after:absolute after:z-[1]">
        <h1 className="font-aero uppercase text-center text-white leading-[1.2] text-[32px] lg:text-[48px]">
          Faq's
        </h1>

        <div className="w-full max-w-[960px] mx-auto">
          <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-3 my-12">
            <div className="grid grid-cols-2 mt-4 lg:mt-0 lg:flex w-full items-center gap-3 ">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative w-full justify-center text-sm lg:text-base flex items-center p-4 px-6 whitespace-nowrap border-style-decoration after:bottom-[-.5px] right-[-.5px]
                ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "text-white hover:bg-white hover:text-[#141414]"
                }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <TextInput
              divClassName="w-full max-w-[345px]"
              placeholder="Search for FAQs..."
              inputClassName="placeholder:text-white/60"
            />
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <CardFaq key={index} title={faq.question} content={faq.answer} />
            ))}
          </div>
          <div className="w-full lg:w-fit mx-auto mt-8 lg:mt-12">
            <button className="hover:bg-white w-full  lg:w-fit hover:text-[#141414] justify-center flex items-center p-4 px-6 text-white border-style-decoration after:bottom-[-.5px] right-[-.5px]">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
