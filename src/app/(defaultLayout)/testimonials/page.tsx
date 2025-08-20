import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/professional-male-headshot.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/professional-headshot-female.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/diverse-professional-headshots.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/placeholder-ry475.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/professional-client-headshot.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/professional-headshot-person.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/placeholder-4o1al.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/professional-headshot-customer.png",
    },
  ];

  return (
    <div className="lg:ml-0 p-6 lg:p-12 pt-16 lg:pt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h1>
          <p className="text-gray-600 text-lg">
            Real client comments showcasing our dedication and successful
            outcomes.
          </p>
        </div>

        {/* Google Reviews Header */}
        <div className="flex items-center gap-4 mb-8 flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 font-bold text-lg">Google</span>
            <span className="text-gray-600">Excellent</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 font-bold">5.0</span>
            <span className="text-gray-600">| 226 reviews</span>
          </div>
          <Button variant="outline" size="sm" className="bg-transparent">
            Write a review
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={1000}
                  height={1000}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">
                    {testimonial.date}
                  </div>
                </div>
                <div className="text-blue-600 font-bold text-lg">G</div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {testimonial.text}
              </p>

              <button className="text-sm text-blue-600 hover:underline">
                Read More
              </button>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
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
        </div>
      </div>
    </div>
  );
}
