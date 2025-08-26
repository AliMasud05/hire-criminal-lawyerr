import Image from "next/image";

export default function NeighborhoodOverview() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Hero Image */}
          <div className="relative">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/old-west-austin.png"
                alt="Old West Austin neighborhood"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 text-white">
                <p className="text-sm font-medium opacity-90">Austin TX</p>
                <h1 className="text-3xl font-bold mt-1">Old West Austin</h1>
              </div>
            </div>

            {/* Explore the Area Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">
                Explore the Area
              </h2>
            </div>
          </div>

          {/* Right Column - Overview and Photos */}
          <div className="space-y-8">
            {/* Neighborhood Overview */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Neighborhood Overview
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {/* Buy Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Buy
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    $770K - $5.4M
                  </div>
                  <div className="text-sm text-gray-600">132 homes</div>
                </div>

                {/* For Rent On Allayne */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">
                      For Rent On Allayne
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">132 homes</div>
                </div>

                {/* Rent Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Rent
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    $800K - $7K
                  </div>
                </div>

                {/* For Rent On Allayne (second) */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">
                      For Rent On Allayne
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">132 homes</div>
                </div>
              </div>
            </div>

            {/* Map Section */}

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Map
                </h3>
                <div className="h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 relative">
                    {/* Map placeholder with some visual elements */}
                    <div className="absolute inset-0 opacity-20">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      ></div>
                    </div>
                    <div className="absolute top-4 left-4 text-xs text-gray-600">
                      Interactive Map
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  All Photos
                </h3>
                {/* Main featured photo */}
                <div className="col-span-2 relative h-32 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-green-400 to-blue-500"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">+38</span>
                  </div>
                </div>
              </div>
            </div>

            {/* All Photos Section */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                {/* Category photos */}
                <div className="relative h-20 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-green-300 to-green-600"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-medium">
                      Outdoors
                    </span>
                  </div>
                </div>

                <div className="relative h-20 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-red-400 to-orange-500"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-medium">
                      Main Streets
                    </span>
                  </div>
                </div>

                <div className="relative h-20 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-medium">
                      Side Streets
                    </span>
                  </div>
                </div>

                <div className="relative h-20 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-600"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-medium">
                      Home Styles
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
