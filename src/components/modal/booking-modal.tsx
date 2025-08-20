"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface BookingModalProps {
  onClose: () => void;
}

export function BookingModal({ onClose }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(14);
  const [selectedTime, setSelectedTime] = useState<string | null>("9:00 AM");

  const timeSlots = [
    "9:00 AM",
    "9:00 AM",
    "9:00 AM",
    "9:00 AM",
    "9:00 AM",
    "9:00 AM",
    "9:00 AM",
    "9:00 AM",
  ];

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentStep === 1 && "Schedule Your Consultation"}
            {currentStep === 2 && "Complete Your Booking"}
            {currentStep === 3 && "Complete Your Booking"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {currentStep === 1 && (
            <div>
              <p className="text-gray-600 mb-8 text-center">
                Book a free initial consultation to discuss your case
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendar */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Select date & Time
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <ChevronLeft className="w-5 h-5 cursor-pointer" />
                    <span className="font-medium">Aug 2025</span>
                    <ChevronRight className="w-5 h-5 cursor-pointer" />
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Aug 2025</div>
                    <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
                      <div>Mo</div>
                      <div>Tu</div>
                      <div>We</div>
                      <div>Th</div>
                      <div>Fr</div>
                      <div>Sa</div>
                      <div>Su</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {[...Array(31)].map((_, i) => {
                        const day = i + 1;
                        return (
                          <button
                            key={day}
                            onClick={() => setSelectedDate(day)}
                            className={`p-2 text-sm rounded ${
                              selectedDate === day
                                ? "bg-red-600 text-white"
                                : day === 14
                                ? "bg-red-600 text-white"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-4">
                    Appointments available Monday - Friday only
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">
                      Available Times for August 21, 2025
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 text-sm border rounded ${
                            selectedTime === time && index === 0
                              ? "bg-red-600 text-white border-red-600"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          🕘 {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Form */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Your Information
                  </h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Information
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Information
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Information
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Information
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Information
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Information
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                  </div>

                  <Card className="p-4 mt-6 bg-gray-50">
                    <h4 className="font-medium mb-2">Your Information</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Date:</span>
                        <span className="ml-2">Enter your first name</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Time:</span>
                        <span className="ml-2">9:00 PM</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Type:</span>
                        <span className="ml-2">Enter your first name</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Type:</span>
                        <span className="ml-2">
                          $200 (Applied to retainer if hired
                        </span>
                      </div>
                    </div>

                    <Button
                      onClick={handleNextStep}
                      className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                    >
                      Go to next available
                    </Button>
                  </Card>
                </Card>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <p className="text-gray-600 mb-8 text-center">
                Secure your consultation appointment
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Booking Details */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Select date & Time</h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client:</span>
                      <span>Been Jonson</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span>August 21, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span>9:00PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Case Type:</span>
                      <span>drug crimes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span>beenjonson@gmail.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone :</span>
                      <span>123 456 7890</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-gray-600 text-sm">
                      Case Description :
                    </span>
                    <p className="text-sm mt-1">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>
                  </div>
                </Card>

                {/* Payment */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Payment Information</h3>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">Select date & Time</span>
                    </div>
                    <div className="text-2xl font-bold mb-2">$200.00</div>
                    <p className="text-sm text-gray-600 mb-4">
                      This fee will be applied to your retainer if you decided
                      to hire our services
                    </p>
                  </div>

                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex items-center gap-2 text-green-600">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Secure payment powered by Stripe</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>PCI DSS compliant</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleNextStep}
                    className="w-full mb-4 bg-red-600 hover:bg-red-700 text-white"
                  >
                    💳 Pay $200.00
                  </Button>

                  <Button
                    onClick={handleBackStep}
                    variant="outline"
                    className="w-full bg-transparent"
                  >
                    ← Back to appointment Details
                  </Button>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By clicking "Pay", you agree to our terms of service and
                    privacy policy. Your payment information is processed
                    securely and never stored on our service
                  </p>
                </Card>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Complete Your Booking
              </h3>
              <p className="text-gray-600 mb-8">
                All payment information is processed securely through Stripe, a
                PCI DSS Level 1 certified payment processor. We never store your
                credit card information on our servers.
              </p>
              <Button
                onClick={onClose}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
