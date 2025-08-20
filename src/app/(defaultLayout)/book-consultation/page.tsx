"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { BookingModal } from "@/components/modal/booking-modal";

export default function BookConsultationPage() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <div className="lg:ml-0 p-6 lg:p-12 pt-16 lg:pt-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              pricing & booking
            </h1>
            <p className="text-gray-600 text-lg">
              Select Your Service and Reserve Your Time Today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Service Details */}
            <div>
              <Card className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    In person meeting at the office
                  </h2>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      $250 + TX
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  Professional guidance to help you understand your legal rights
                  and options.
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    INCLUDED:
                  </h3>
                  <ul className="space-y-2 text-gray-600">
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

                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">ADD-ONS:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Additional consultation time: $100 / 30 minutes + tx
                    </li>
                    <li>• Document drafting & review: Starting at $150 + tx</li>
                  </ul>
                </div>

                <Button
                  onClick={() => setShowBookingModal(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base font-medium w-full"
                >
                  Book Now
                </Button>
              </Card>
            </div>

            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder-rhf3v.png"
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
