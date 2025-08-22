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
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white w-full flex flex-col justify-center items-center">
        <div className=" h-4 w-full">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full ml-3 md:ml-10 bg-gray border-1 border-black"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className=" rounded-lg   overflow-y-auto ">
          <div className="max-w-6xl w-full max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                {currentStep === 1 && "Schedule Your Consultation"}
                {currentStep === 2 && "Complete Your Booking"}
                {currentStep === 3 && "Complete Your Booking"}
              </h2>
            </div>

            <div className="p-6">
              {currentStep === 1 && (
                <div>
                  <p className="text-gray-600 mb-8 ">
                    Book a free initial consultation to discuss your case
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Calendar */}
                    <Card className="p-6 bg-gray-400">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-2xl flex items-center gap-2">
                          <svg
                            className="w-6 h-6"
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

                      <p className="text-xs font-normal text-gray-500 mb-4">
                        Appointments available Monday - Friday only
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium text-xl mb-2">
                          Available Times for August 21, 2025
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedTime(time)}
                              className={`px-2 py-3  text-sm border rounded ${
                                selectedTime === time && index === 0
                                  ? "bg-[#990012] text-white border-red-600"
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
                      <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
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
                        <div className="grid grid-cols-2 gap-4 ">
                          <div>
                            <label className="block text-sm font-medium text-black mb-2 ">
                              Your Information
                            </label>
                            <Input
                              className="py-5"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">
                              Your Information
                            </label>
                            <Input
                              className="py-5"
                              placeholder="Enter your first name"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">
                              Your Information
                            </label>
                            <Input
                              className="py-5"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">
                              Your Information
                            </label>
                            <Input
                              className="py-5"
                              placeholder="Enter your first name"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-black mb-2">
                            Your Information
                          </label>
                          <Input
                            className="py-5"
                            placeholder="Enter your first name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-black mb-2">
                            Your Information
                          </label>
                          <Input
                            className="py-8"
                            placeholder="Enter your first name"
                          />
                        </div>
                      </div>

                      <Card className="p-4 mt-6 bg-gray-50">
                        <h4 className="font-medium text-xl mb-2">
                          Your Information
                        </h4>
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
                          className="w-full mt-4 py-6 bg-[#990012] hover:bg-red-700 text-white"
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
                  <p className="text-gray-600 mb-8">
                    Secure your consultation appointment
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 pr-0 md:pr-10">
                    {/* Booking Details */}
                    <Card className="p-6">
                      <h3 className="font-semibold text-2xl mb-4">
                        Select date & Time
                      </h3>

                      <div className="space-y-4 text-sm text-black">
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

                      <div className="mt-4 space-y-6">
                        <span className="text-gray-600 text-sm ">
                          Case Description :
                        </span>
                        <p className="text-sm font-normal mt-3  leading-6">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters.
                        </p>
                      </div>
                    </Card>

                    {/* Payment */}
                    <Card className="p-6">
                      <h3 className="font-semibold text-2xl mb-4">
                        Payment Information
                      </h3>

                      <div className="mb-2 border-1 border-gray-200 rounded-md p-4 ">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            className="w-7 h-7 text-green-600 border-1 border-gray-200 rounded-full p-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xl font-normal">
                            Select date & Time
                          </span>
                        </div>
                        <div className="text-3xl font-semibold my-3">
                          $200.00
                        </div>
                        <p className="text-bse text-gray-600 mb-4">
                          This fee will be applied to your retainer if you
                          decided to hire our services
                        </p>
                      </div>

                      <div className="space-y-2 text-sm mb-6">
                        <div className="flex items-center gap-2 text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_423_713)">
                              <path
                                d="M18.4956 5.92651L18.495 5.91094C18.4863 5.71884 18.4805 5.51559 18.477 5.28945C18.4606 4.1867 17.584 3.27454 16.4811 3.21289C14.1816 3.08456 12.4028 2.33475 10.8828 0.853278L10.8699 0.840919C10.3741 0.38636 9.62628 0.38636 9.13037 0.840919L9.1174 0.853278C7.59748 2.33475 5.81862 3.08456 3.51912 3.21304C2.41637 3.27454 1.5396 4.1867 1.52328 5.28961C1.51992 5.51422 1.51397 5.71746 1.50527 5.91094L1.50436 5.94711C1.45965 8.29192 1.40411 11.2102 2.38036 13.8589C2.91716 15.3155 3.73015 16.5817 4.79658 17.6225C6.01118 18.8078 7.60206 19.7488 9.52497 20.4193C9.58753 20.4411 9.65253 20.4588 9.71875 20.4721C9.81213 20.4907 9.90613 20.5 10.0001 20.5C10.0941 20.5 10.1883 20.4907 10.2815 20.4721C10.3477 20.4588 10.4132 20.4409 10.476 20.419C12.3967 19.7473 13.9859 18.8058 15.1994 17.6207C16.2654 16.5796 17.0784 15.3131 17.6156 13.8562C18.5955 11.1995 18.5401 8.27574 18.4956 5.92651ZM16.5145 13.4501C15.4849 16.2419 13.383 18.1591 10.0888 19.3112C10.077 19.3151 10.0645 19.3187 10.0515 19.3212C10.0175 19.328 9.98288 19.328 9.9484 19.3211C9.93558 19.3185 9.92307 19.3151 9.91147 19.3112C6.61375 18.1613 4.51048 16.2451 3.48159 13.4532C2.58178 11.0116 2.63274 8.33281 2.67775 5.96954L2.67806 5.95641C2.68722 5.75332 2.69332 5.54061 2.69668 5.30685C2.704 4.8172 3.09401 4.41208 3.58458 4.38476C4.88585 4.31213 6.02903 4.06067 7.07945 3.61603C8.12848 3.172 9.06018 2.54608 9.92749 1.70258C9.97159 1.66535 10.0288 1.6652 10.0728 1.70258C10.9402 2.54608 11.8719 3.172 12.9208 3.61603C13.9712 4.06067 15.1144 4.31213 16.4158 4.38476C16.9064 4.41208 17.2964 4.8172 17.3036 5.307C17.3071 5.54199 17.3132 5.75469 17.3223 5.95641C17.3672 8.32244 17.4169 11.0034 16.5145 13.4501Z"
                                fill="#12B347"
                              />
                              <path
                                d="M9.9999 5.5166C7.25149 5.5166 5.01562 7.75262 5.01562 10.5009C5.01562 13.2493 7.25149 15.4853 9.9999 15.4853C12.7481 15.4853 14.9842 13.2493 14.9842 10.5009C14.9842 7.75262 12.7481 5.5166 9.9999 5.5166ZM9.9999 14.3116C7.89861 14.3116 6.18918 12.6022 6.18918 10.5009C6.18918 8.39959 7.89861 6.69015 9.9999 6.69015C12.101 6.69015 13.8105 8.39959 13.8105 10.5009C13.8105 12.6022 12.101 14.3116 9.9999 14.3116Z"
                                fill="#12B347"
                              />
                              <path
                                d="M11.4324 8.95325L9.11736 11.2683L8.489 10.64C8.25982 10.4108 7.88827 10.4108 7.65908 10.64C7.43005 10.8691 7.43005 11.2407 7.65908 11.4697L8.70247 12.5131C8.81707 12.6277 8.96721 12.6849 9.11736 12.6849C9.2675 12.6849 9.41765 12.6277 9.53224 12.5131L12.2623 9.78303C12.4914 9.55384 12.4914 9.18229 12.2623 8.95325C12.0332 8.72392 11.6616 8.72392 11.4324 8.95325Z"
                                fill="#12B347"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_423_713">
                                <rect
                                  width="20"
                                  height="20"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#12B347] text-base font-normal">
                            Secure payment powered by Stripe
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_423_718)">
                              <path
                                d="M4.72 6.98L3.6 8.1L7.2 11.7L15.2 3.7L14.08 2.58L7.2 9.46L4.72 6.98ZM14.4 8.5C14.4 12.02 11.52 14.9 8 14.9C4.48 14.9 1.6 12.02 1.6 8.5C1.6 4.98 4.48 2.1 8 2.1C8.64 2.1 9.2 2.18 9.76 2.34L11.04 1.06C10.08 0.74 9.04 0.5 8 0.5C3.6 0.5 0 4.1 0 8.5C0 12.9 3.6 16.5 8 16.5C12.4 16.5 16 12.9 16 8.5H14.4Z"
                                fill="#12B347"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_423_718">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#12B347] text-base font-normal">
                            256-bit SSL encryption
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_423_722)">
                              <path
                                d="M4.72 6.98L3.6 8.1L7.2 11.7L15.2 3.7L14.08 2.58L7.2 9.46L4.72 6.98ZM14.4 8.5C14.4 12.02 11.52 14.9 8 14.9C4.48 14.9 1.6 12.02 1.6 8.5C1.6 4.98 4.48 2.1 8 2.1C8.64 2.1 9.2 2.18 9.76 2.34L11.04 1.06C10.08 0.74 9.04 0.5 8 0.5C3.6 0.5 0 4.1 0 8.5C0 12.9 3.6 16.5 8 16.5C12.4 16.5 16 12.9 16 8.5H14.4Z"
                                fill="#12B347"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_423_722">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-[#12B347] text-base font-normal">
                            PCI DSS compliant
                          </span>
                        </div>
                      </div>

                      <Button
                        onClick={handleNextStep}
                        className="w-full mb-4 bg-[#990012] py-7 text-base md:text-lg
                         hover:bg-red-700 text-white rounded-xl"
                      >
                        💳 Pay $200.00
                      </Button>

                      <Button
                        onClick={handleBackStep}
                        variant="outline"
                        className="w-full bg-transparent py-7 text-base md:text-lg "
                      >
                        ← Back to appointment Details
                      </Button>

                      <p className="text-xs text-gray-500 mt-4 text-center">
                        By clicking &quot;Pay&quot;, you agree to our privacy
                        policy. Your payment information is processed securely
                        and never stored on our service
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
                    All payment information is processed securely through
                    Stripe, a PCI DSS Level 1 certified payment processor. We
                    never store your credit card information on our servers.
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
      </div>
    </div>
  );
}
