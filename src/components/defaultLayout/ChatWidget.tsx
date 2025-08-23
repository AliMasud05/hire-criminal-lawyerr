// components/defaultLayout/ChatWidget.tsx
"use client";

import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Open chat"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 38 32"
              fill="none"
            >
              <path
                d="M19 0.138672C8.75293 0.138672 0.445312 6.86426 0.445312 15.1602C0.445312 18.6602 1.92383 21.8799 4.40234 24.4336L2.39844 30.4287C2.11426 31.2773 2.9209 32.0869 3.77051 31.8057L12.0186 29.0801C14.1738 29.7891 16.5303 30.1807 19 30.1807C29.2471 30.1807 37.5547 23.4551 37.5547 15.1592C37.5547 6.86328 29.2471 0.137695 19 0.137695V0.138672ZM10.8818 18.1953C9.20605 18.1953 7.84668 16.8369 7.84668 15.1602C7.84668 13.4834 9.20508 12.125 10.8818 12.125C12.5586 12.125 13.917 13.4834 13.917 15.1602C13.917 16.8369 12.5586 18.1953 10.8818 18.1953ZM19 18.1953C17.3242 18.1953 15.9648 16.8369 15.9648 15.1602C15.9648 13.4834 17.3232 12.125 19 12.125C20.6768 12.125 22.0352 13.4834 22.0352 15.1602C22.0352 16.8369 20.6768 18.1953 19 18.1953ZM27.1182 18.1953C25.4424 18.1953 24.083 16.8369 24.083 15.1602C24.083 13.4834 25.4414 12.125 27.1182 12.125C28.7949 12.125 30.1533 13.4834 30.1533 15.1602C30.1533 16.8369 28.7949 18.1953 27.1182 18.1953Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[500px] bg-white rounded-lg shadow-xl z-40 border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm">Hello! How can we help you today?</p>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
