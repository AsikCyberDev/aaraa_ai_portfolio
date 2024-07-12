import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(msgs => [...msgs, { text: generateResponse(input), sender: 'bot' }]);
      }, 1000);
    }
  };

  const handlePromptClick = (prompt) => {
    setMessages([...messages, { text: prompt, sender: 'user' }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(msgs => [...msgs, { text: generateResponse(prompt), sender: 'bot' }]);
    }, 1000);
  };

  const generateResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // FAQ responses
    const faqResponses = {
      "what is ai chatbot": "An AI chatbot is a computer program designed to simulate human conversation through text or voice interactions. It uses artificial intelligence to understand user queries and provide relevant responses.",
      "how does your chatbot work": "Our chatbot uses advanced natural language processing (NLP) and machine learning algorithms to understand and respond to user queries. It's trained on a vast dataset and can continuously learn from interactions to improve its responses.",
      "what are the pricing plans": "We offer three main pricing tiers: Basic ($49/month), Professional ($199/month), and Enterprise (custom pricing). Each tier offers different features and message limits. Would you like more details on a specific plan?",
      "what models are available": "We offer a range of AI models, including GPT-3, BERT, and our proprietary NLP model. The availability of models depends on your subscription tier. Enterprise customers can also request custom model training.",
      "what integrations do you offer": "We offer integrations with popular platforms such as Slack, Discord, WhatsApp, and major CRM systems like Salesforce and HubSpot. We also provide APIs for custom integrations with your existing systems.",
      "how accurate is the chatbot": "Our chatbot achieves an accuracy rate of over 95% in understanding and responding to user queries. This accuracy improves over time as the chatbot learns from interactions.",
      "can the chatbot handle multiple languages": "Yes, our chatbot supports multiple languages. The Basic plan includes support for 5 major languages, while higher tiers offer support for 20+ languages.",
      "how do you ensure data privacy": "We take data privacy very seriously. All data is encrypted in transit and at rest. We comply with GDPR and CCPA regulations, and offer data residency options for Enterprise customers.",
      "what industries do you serve": "Our chatbot platform serves a wide range of industries including e-commerce, healthcare, finance, education, and customer service. We can customize the chatbot's knowledge base for specific industry needs.",
      "how long does it take to set up": "Basic setup can be done in minutes. For more complex integrations or custom knowledge bases, it may take a few days to a couple of weeks, depending on your specific requirements.",
      "can the chatbot handle complex queries": "Yes, our advanced NLP algorithms allow the chatbot to understand and respond to complex, multi-part queries. It can also maintain context throughout a conversation.",
      "what kind of analytics do you provide": "We provide comprehensive analytics including user engagement metrics, popular queries, chatbot performance stats, and sentiment analysis. Higher tier plans offer real-time analytics dashboards.",
      "how does the chatbot learn and improve": "The chatbot uses machine learning to continuously improve its responses based on user interactions. It can also be manually trained on new information or corrected if needed.",
      "what's the difference between basic and professional plans": "The main differences are in message volume (1,000 vs 10,000 per month), advanced NLP capabilities, multi-language support, and analytics features. Professional also includes priority support.",
      "do you offer a free trial": "Yes, we offer a 14-day free trial of our Professional plan. This allows you to test all features and see how the chatbot can benefit your business.",
      "how do you handle updates and maintenance": "We regularly update our systems to improve performance and add new features. These updates are typically done during off-peak hours and don't disrupt service.",
      "can the chatbot handle file uploads": "Yes, on Professional and Enterprise plans, the chatbot can handle file uploads, making it useful for technical support scenarios or document processing tasks.",
      "what's your uptime guarantee": "We guarantee 99.9% uptime for all plans, with Enterprise plans offering up to 99.99% uptime SLAs.",
      "how does billing work": "Billing is done on a monthly basis. You're billed at the start of each month for the upcoming month's service. We offer both credit card and invoice payment options.",
      "can we customize the chatbot's personality": "Absolutely! You can customize the chatbot's tone, language style, and responses to align with your brand voice. This is available on all plans, with more advanced customization options on higher tiers.",
      "what kind of customer support do you offer": "We offer email support for all plans, with Professional plans including priority email and chat support. Enterprise plans come with 24/7 dedicated support.",
      "can the chatbot integrate with our existing knowledge base": "Yes, we can integrate with your existing knowledge base or CMS. This allows the chatbot to leverage your current resources and provide accurate, up-to-date information.",
      "how do you handle seasonal traffic spikes": "Our system is built to automatically scale with traffic. For known high-traffic periods, Enterprise customers can also request pre-emptive scaling.",
      "can the chatbot handle voice interactions": "Voice interaction capability is available as an add-on feature for Professional and Enterprise plans. It allows integration with phone systems and voice assistants.",
      "what security measures do you have in place": "We employ industry-standard security measures including end-to-end encryption, regular security audits, and optional two-factor authentication for admin access.",
      "can the chatbot perform actions like booking appointments": "Yes, on Professional and Enterprise plans, the chatbot can integrate with your systems to perform actions like booking appointments, processing orders, or updating customer information.",
      "how do you handle chatbot errors or misunderstandings": "The chatbot is programmed to acknowledge when it doesn't understand a query and can escalate to human support when needed. We also provide tools for monitoring and improving the chatbot's performance.",
      "what's the process for upgrading or downgrading plans": "You can upgrade your plan at any time, with the new features available immediately. Downgrades take effect at the start of the next billing cycle. Both can be done easily from your account dashboard.",
      "do you offer white-labeling options": "Yes, white-labeling is available for Enterprise customers. This allows you to present the chatbot as a fully integrated part of your own platform.",
      "can we use the chatbot for internal processes": "Absolutely! Many of our customers use our chatbots for internal processes like HR queries, IT support, or knowledge management.",
      "how does the chatbot handle sensitive information": "The chatbot is designed to recognize and protect sensitive information. It can be configured to automatically redact or not store certain types of data, and all stored data is encrypted.",
      "what programming languages does your API support": "Our API supports integration with all major programming languages including Python, JavaScript, Java, C#, and Ruby. We provide SDKs and documentation for easy integration.",
      "can the chatbot learn from historical customer service data": "Yes, we can train the chatbot on your historical customer service data to improve its responses and make it more specific to your business needs. This is typically part of the Enterprise onboarding process.",
      "how do you measure the ROI of implementing your chatbot": "We provide detailed analytics that can help measure ROI, including metrics like reduced response times, increased customer satisfaction, and number of queries handled. We can also work with you to set up custom ROI tracking.",
      "what sets your chatbot apart from competitors": "Our chatbot stands out due to its advanced NLP capabilities, high accuracy, extensive customization options, and seamless integration possibilities. We also pride ourselves on our stellar customer support and continuous innovation.",
      "can the chatbot handle multiple conversations simultaneously": "Yes, our chatbot can handle thousands of simultaneous conversations, making it suitable for businesses of all sizes.",
      "how often do you release new features": "We have a regular release cycle with minor updates every two weeks and major feature releases quarterly. Enterprise customers can also request custom feature development.",
      "do you offer consulting services for chatbot implementation": "Yes, we offer consulting services to help with chatbot strategy, implementation, and optimization. This is typically part of our Enterprise offering but can be added to other plans as needed.",
      "can the chatbot integrate with social media platforms": "Yes, we offer integrations with major social media platforms including Facebook Messenger, Instagram, and Twitter. This allows you to provide seamless customer support across multiple channels.",
      "how do you handle data backups": "We perform regular data backups to ensure data safety and business continuity. Enterprise customers can also opt for more frequent backups or on-premise backup solutions."
    };

    // Check if the input matches any FAQ
    for (let question in faqResponses) {
      if (lowerInput.includes(question)) {
        return faqResponses[question];
      }
    }

    // Default response if no match is found
    return "I'm sorry, I don't have specific information about that. Would you like to know about our features, pricing, or integration options?";
  };

  const suggestedPrompts = [
    "What is an AI chatbot?",
    "what are the pricing plans?",
    "What integrations do you offer?",
    "How accurate is the chatbot?",
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-indigo-600 text-white p-4">
        <h3 className="text-lg font-semibold">AI Chatbot Demo</h3>
      </div>
      <div className="h-96 overflow-y-auto p-4">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <span className={`inline-block p-2 rounded-lg ${
                msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}>
                {msg.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-left"
          >
            <span className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800">
              Typing...
            </span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <div className="mb-4 flex flex-wrap gap-2">
          {suggestedPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => handlePromptClick(prompt)}
              className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-sm hover:bg-indigo-200 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-grow mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;