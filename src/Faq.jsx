import { useState } from "react";
import "./Faq.css";
import faqImg from "./assets/faq.png";
import Navbar from "./Nav/Navbar";
import Footer from "./Components/Footer";
import Logo from "./Components/logo";

const FAQPage = ({ accentColor = "#0dc7ae" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const getAccentClasses = () => {
    const colors = {
      blue: "accent-blue",
      green: "accent-green",
      purple: "accent-purple",
      red: "accent-red",
      indigo: "accent-indigo",
    };
    return colors[accentColor] || colors.blue;
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    },
    {
      question: "What is your return policy?",
      answer:
        "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    },
    {
      question: "How long does shipping take?",
      answer:
        "3-5 business days for standard shipping within the continental US.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide with varying rates and potential customs fees.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, Apple Pay, Google Pay, and Amazon Pay.",
    },
    {
      question: "Are your products eco-friendly?",
      answer:
        "Committed to sustainability, using recycled materials and minimal packaging.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accentClass = getAccentClasses();

  return (
    <>
      <Logo></Logo>
      <Navbar></Navbar>
      <div className="faq-page-container">
        <div className="faq-card">
          <div className="image-section">
            <img src={faqImg} alt="FAQ Illustration" className="faq-image" />
          </div>
          <div className="faq-section">
            <h1 className="faq-title">Frequently Asked Questions</h1>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    onClick={() => toggleFAQ(index)}
                    className={`faq-question ${
                      activeIndex === index ? accentClass : ""
                    }`}
                  >
                    <h3>{faq.question}</h3>
                    <span>{activeIndex === index ? "−" : "+"}</span>
                  </div>

                  <div
                    className={`faq-answer ${
                      activeIndex === index ? "visible" : "hidden"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default FAQPage;
