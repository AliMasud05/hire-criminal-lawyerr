import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import map from "@/assets/about/image 2.png";

export default function ContactPage() {
  return (
    <div className="lg:ml-0 p-6 lg:p-12 pt-16 lg:pt-26">
      <div className="max-w-7xl ml-0 md:ml-14">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-[#333] text-lg font-medium">
            Have a project in mind? I&apos;d love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="bg-[#F4F4F4CC]/80 rounded-lg 
           font-inter w-full"
          >
            <Card className="p-8">
              <h2
                className="text-xl font-medium
               text-[#333333] mb-6"
              >
                Contact me
              </h2>

              <form className="space-y-6">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="pr-10 py-6"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="pr-10 py-6"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <Input
                    type="tel"
                    placeholder="Number"
                    className="pr-10 py-6"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <Textarea
                    placeholder="Details"
                    rows={4}
                    className="pr-10 py-16"
                  />
                  <div className="absolute right-3 top-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H8.414l-2.707 2.707A1 1 0 014 15.414V13H4a1 1 0 01-1-1V4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                  Send Now →
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}

            <div
              className="flex items-center gap-4 mb-4
              px-4 py-3
              border-1 border-gray-300 rounded-md shadow-sm"
            >
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className=" font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">(514) 927-2160</p>
              </div>
            </div>

            <div
              className="flex items-center gap-4 mb-4
              px-4 py-3
              border-1 border-gray-300 rounded-md shadow-sm"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">nb@tonavocat.net</p>
              </div>
            </div>

            <div
              className="flex items-center gap-4 mb-4
              px-4 py-3
              border-1 border-gray-300 rounded-md shadow-sm"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">
                  2955, rue Gifford, Montréal, Québec, H1Y 2C1
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={map.src}
                alt="Office Location Map"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
