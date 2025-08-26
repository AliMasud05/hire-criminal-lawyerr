"use client";

// import nabil from "@/assets/user/HR-2024-10-24 Nabil B 58 V2-Photoroom 1.png";
import nabil from "@/assets/about/consultation.png";
import { BookingModal } from "@/components/modal/booking-modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";


export default function BookConsultationPage() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <div className="lg:ml-0 p-6 lg:p-12 pt-16 lg:pt-26">
        <div className="max-w-7xl ml-0 md:ml-14">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              pricing & booking
            </h1>
            <p className="text-[#333] text-lg font-medium">
              Select Your Service and Reserve Your Time Today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  bg-[#EDEDED] ">
            {/* Service Details */}
            <div className="flex flex-col gap-6 p-6">
              <div className="flex flex-col justify-between items-start ">
                <h2 className="text-4xl font-semibold text-[#333] mb-4">
                  In person meeting at the office
                </h2>
                
              <p className="text-gray-600 text-base font-normal mb-6">
                Professional guidance to help you understand your legal rights
                and options.
              </p>
              </div>


              <div className="">
                <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-base text-gray-900">
                  INCLUDED:
                </h3>

                  <div className="text-xl font-bold text-gray-900">
                    $250 + TX
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm ml-3 font-inter">
                  <li>
                    • 30-minute private legal consultation in person or via
                    video call
                  </li>
                  <li>• Review of your case details and related documents</li>
                  <li>
                    • Personalized legal advice tailored to your situation
                  </li>
                  <li>
                    • Guidance on next steps and possible legal strategies
                  </li>
                  <li>• Follow-up summary sent via email within 48 hours</li>
                </ul>
              </div>

              <div className="">
                <h3 className="font-semibold text-base text-gray-900 mb-3">
                  ADD-ONS:
                </h3>
                <ul className="space-y-2 text-[#333] text-sm ml-3 font-inter">
                  <li>
                    • Additional consultation time: $100 / 30 minutes + tx
                  </li>
                  <li>• Document drafting & review: Starting at $150 + tx</li>
                </ul>
              </div>

              <Button
                onClick={() => setShowBookingModal(true)}
                className="-ml-6 bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-base font-medium w-[200px]"
              >
                Book Now
              </Button>
            </div>

            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-full h-auto bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={nabil.src}
                    alt="Nabil Ben-Naoum, Professional Lawyer"
                    height={1000}
                    width={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal onClose={() => setShowBookingModal(false)} />
      )}
    </>
  );
}
