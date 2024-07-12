import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const PricingCard = ({ title, price, features, isPopular }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`bg-white rounded-lg shadow-xl p-8 flex flex-col ${
      isPopular ? 'border-4 border-indigo-500' : ''
    }`}
  >
    {isPopular && (
      <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold self-start mb-4">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <div className="text-4xl font-bold text-indigo-600 mb-6">${price}<span className="text-lg font-normal text-gray-600">/mo</span></div>
    <ul className="flex-grow mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-3">
          {feature.included ? (
            <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
          ) : (
            <FiX className="text-red-500 mr-2 flex-shrink-0" />
          )}
          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.text}</span>
        </li>
      ))}
    </ul>
    <button className={`py-2 px-4 rounded-lg font-bold text-lg transition-colors ${
      isPopular
        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
        : 'bg-gray-200 text-indigo-600 hover:bg-gray-300'
    }`}>
      Choose Plan
    </button>
  </motion.div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: 49,
      features: [
        { text: "Up to 1,000 messages/month", included: true },
        { text: "Basic NLP capabilities", included: true },
        { text: "Email support", included: true },
        { text: "Basic analytics", included: true },
        { text: "Multi-language support", included: false },
        { text: "Custom integrations", included: false },
      ],
    },
    {
      title: "Professional",
      price: 199,
      isPopular: true,
      features: [
        { text: "Up to 10,000 messages/month", included: true },
        { text: "Advanced NLP capabilities", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Multi-language support", included: true },
        { text: "Basic custom integrations", included: true },
      ],
    },
    {
      title: "Enterprise",
      price: 999,
      features: [
        { text: "Unlimited messages", included: true },
        { text: "State-of-the-art NLP", included: true },
        { text: "24/7 dedicated support", included: true },
        { text: "Real-time analytics dashboard", included: true },
        { text: "Multi-language support", included: true },
        { text: "Advanced custom integrations", included: true },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        <p className="text-center mt-12 text-gray-600">
          Need a custom plan? <a href="#" className="text-indigo-600 hover:underline">Contact us</a> for personalized pricing.
        </p>
      </div>
    </section>
  );
};

export default Pricing;