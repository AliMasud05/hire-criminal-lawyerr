import Script from "next/script";

export default function TestimonialsPage() {
  // const testimonials = [
  //   {
  //     name: "Charles Valade",
  //     date: "10 December 2024",
  //     rating: 5,
  //     text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
  //     avatar: "/professional-male-headshot.png",
  //   },
  //   {
  //     name: "Charles Valade",
  //     date: "10 December 2024",
  //     rating: 5,
  //     text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
  //     avatar: "/professional-headshot-female.png",
  //   },
  //   {
  //     name: "Charles Valade",
  //     date: "10 December 2024",
  //     rating: 5,
  //     text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
  //     avatar: "/diverse-professional-headshots.png",
  //   },
  //   {
  //     name: "Charles Valade",
  //     date: "10 December 2024",
  //     rating: 5,
  //     text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
  //     avatar: "/placeholder-ry475.png",
  //   },
  //   {
  //     name: "Charles Valade",
  //     date: "10 December 2024",
  //     rating: 5,
  //     text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
  //     avatar: "/professional-client-headshot.png",
  //   },
  //   {
  //     name: "Charles Valade",
  //     date: "10 December 2024",
  //     rating: 5,
  //     text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
  //     avatar: "/professional-headshot-person.png",
  //   },
  //   {
  //     name: "Charles Valade",
  //     date: "10 December 2024",
  //     rating: 5,
  //     text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
  //     avatar: "/placeholder-4o1al.png",
  //   },
  //   {
  //     name: "Charles Valade",
  //     date: "10 December 2024",
  //     rating: 5,
  //     text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
  //     avatar: "/professional-headshot-customer.png",
  //   },
  // ];

  return (
    <div className="lg:ml-0 p-6 lg:p-12 pt-16 lg:pt-12">
      <div className="max-w-7xl ml-0 md:ml-14">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h1> */}
          <p className="text-gray-600 text-lg">
            Real client comments showcasing our dedication and successful
            outcomes.
          </p>
        </div>

        {/* Google Reviews Header */}
        {/* <div className="reviews-section bg-[#F4F4F4CC]/80 rounded-lg px-2 py-3 flex items-center gap-4 mb-8 flex-wrap font-inter">
                  <div className="flex items-center gap-2">
                    <Image
                      src={google_icon.src}
                      alt="google logo"
                      width={1000}
                      height={1000}
                      className="w-20 h-6"
                    />
                    <span className="text-[#333333] font-bold text-base font-inter">
                      Excellent
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_61_140)">
                          <path
                            d="M19.9479 8.17148C19.8169 7.7665 19.4577 7.47887 19.0328 7.44057L13.2602 6.91641L10.9776 1.57372C10.8093 1.18217 10.426 0.928711 10.0001 0.928711C9.57422 0.928711 9.19091 1.18217 9.0226 1.57463L6.73998 6.91641L0.966514 7.44057C0.542309 7.47978 0.184023 7.7665 0.0523365 8.17148C-0.0793503 8.57646 0.0422654 9.02065 0.363166 9.30066L4.72653 13.1274L3.43987 18.7951C3.34573 19.2118 3.50747 19.6426 3.85325 19.8925C4.0391 20.0268 4.25655 20.0952 4.47582 20.0952C4.66488 20.0952 4.85242 20.0442 5.02073 19.9435L10.0001 16.9675L14.9776 19.9435C15.3419 20.1626 15.801 20.1426 16.146 19.8925C16.492 19.6418 16.6536 19.2109 16.5594 18.7951L15.2728 13.1274L19.6361 9.30142C19.957 9.02065 20.0796 8.57722 19.9479 8.17148Z"
                            fill="#FFC107"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_61_140">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                    <div className="flex items-center gap-2">
                      <span className="ml-2 font-bold">5.0</span>
                      <span> | </span>
                      <span className="text-[#333333]"> 226 reviews</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto py-5 font-medium text-base bg-transparent"
                  >
                    Write a review
                  </Button>
                </div> */}

        {/* Testimonials Grid */}
        {/* <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            // <Card key={index} className="p-6">
            //   <div className="flex items-center gap-3 mb-4">
            //     <Image
            //       src={testimonial.avatar || "/placeholder.svg"}
            //       alt={testimonial.name}
            //       width={1000}
            //       height={1000}
            //       className="w-10 h-10 rounded-full"
            //     />
            //     <div className="flex-1">
            //       <div className="font-medium text-sm">{testimonial.name}</div>
            //       <div className="text-xs text-gray-500">
            //         {testimonial.date}
            //       </div>
            //     </div>
            //     <div className="text-blue-600 font-bold text-lg">G</div>
            //   </div>

            //   <div className="flex items-center gap-1 mb-3">
            //     {[...Array(testimonial.rating)].map((_, i) => (
            //       <Star
            //         key={i}
            //         className="w-4 h-4 fill-yellow-400 text-yellow-400"
            //       />
            //     ))}
            //   </div>

            //   <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            //     {testimonial.text}
            //   </p>

            //   <button className="text-sm text-blue-600 hover:underline">
            //     Read More
            //   </button>
            // </Card>
            <TestimonialCard key={index} /> 
          ))}
        </div> */}

        {/* Pagination */}
        {/* <div className="flex items-center justify-center gap-2">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "ghost"}
              size="sm"
              className={page === 1 ? "bg-red-600 hover:bg-red-700" : ""}
            >
              {page}
            </Button>
          ))}
          <Button variant="ghost" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div> */}

        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
          defer
          async
        />
        <div
          className="elfsight-app-68f7bed7-78bb-4006-8801-25f413c30250"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
}
