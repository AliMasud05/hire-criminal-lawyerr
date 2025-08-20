import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import google_icon from "@/assets/home/google_icon.png";
import icon1 from "@/assets/skill/Frame.png";
import icon4 from "@/assets/skill/Layer_1 (1).png";
import icon5 from "@/assets/skill/Layer_1 (2).png";
import icon3 from "@/assets/skill/Layer_1.png";
import icon2 from "@/assets/skill/Vector (1).png";
import icon6 from "@/assets/skill/Шар_1.png";
import nabil from "@/assets/user/HR-2024-10-24 Nabil B 58 V2-Photoroom 1.png";
import nabil_img_bg from "@/assets/user/placeholder.png";
import TestimonialCard from "@/components/defaultLayout/card/Testimonial-card";

export default function Home() {
  const testimonials = [
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/professional-man.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/professional-woman-diverse.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/diverse-business-person.png",
    },
    {
      name: "Charles Valade",
      date: "10 December 2024",
      rating: 5,
      text: "Vadim was extremely professional and knowledgeable about posing and angles. He is very thorough and ensures that you are satisfied...",
      avatar: "/professional-client-portrait.png",
    },
  ];

  const skills = [
    {
      icon: icon1,
      title: "Criminal Defense",
      description:
        "Defense against possession, distribution, and trafficking charges.",
    },
    {
      icon: icon2,
      title: "Theft & Property Crimes",
      description:
        "Defense for shoplifting, burglary, and other property-related charges.",
    },
    {
      icon: icon3,
      title: "Assault & Battery",
      description: "Protecting clients accused of violent crimes.",
    },
    {
      icon: icon4,
      title: "DUI/DWI Defense",
      description:
        "Aggressive representation for driving under the influence charges.",
    },
    {
      icon: icon5,
      title: "Juvenile Defense",
      description:
        "Protecting the future of young individuals in the legal system.",
    },
    {
      icon: icon6,
      title: "White-Collar Crimes",
      description:
        "Expert defense for fraud, embezzlement, and corporate crimes.",
    },
  ];


  return (
    <div className="lg:ml-0 p-6 lg:p-12 pt-16 lg:pt-12">
      <div className="max-w-7xl  ml-14">
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Hero Content */}
          <div className=" col-span-3">
            <h1
              className="text-4xl lg:text-6xl font-bold
             text-[#33333] mb-6 leading-20 tracking-normal"
            >
              Trusted Criminal Defense, Personalized For You
            </h1>
            <p
              className="text-[#333333]/80 text-lg
            font-normal
            mb-8 leading-relaxed"
            >
              Dedicated to protecting your rights and ensuring a fair legal
              process. With years of experience, I provide robust defense
              strategies tailored to your unique situation, fighting tirelessly
              for justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  className="bg-[#990012]                
                hover:bg-red-700
                 text-white px-6 py-6 text-base 
                 font-normal rounded-xl w-full sm:w-auto"
                >
                  CONTACT ME
                </Button>
              </Link>
              <Link href="/book-consultation">
                <Button
                  variant="outline"
                  className="border-gray-300
                   px-8 py-6 text-base
                    text-gray-700  font-medium 
                    bg-transparent rounded-xl w-full sm:w-auto"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="rounded-lg relative">
                {/* Container with explicit height and relative positioning */}
                <div className="relative h-[500px]">
                  {/* Background image */}
                  <Image
                    src={nabil_img_bg.src}
                    alt="Background"
                    width={1000}
                    height={1000}
                    className="w-full h-4/5 object-cover
                    border-1 px-1 py-4 b border-black 
                    absolute bottom-0 left-0 right-0 z-20 rounded-lg"
                  />
                  {/* Portrait image */}
                  <Image
                    src={nabil.src}
                    alt="Nabil Ben-Naoum, Criminal Defense Lawyer"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover absolute top-0 left-0 z-50 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Section */}
        <div className="mb-12">
          <div
            className="
          bg-[#F4F4F4CC]/80 rounded-lg px-2 py-3
          flex items-center gap-4 mb-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <Image
                src={google_icon.src}
                alt="google logo"
                width={1000}
                height={1000}
                className="w-20 h-6"
              />
              <span className="text-[#333333] font-bold text-base">
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
                  <g clip-path="url(#clip0_61_140)">
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
              className="ml-auto py-5 font-medium text-base  bg-transparent"
            >
              Write a review
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              // <Card key={index} className="p-6">
              //   <div className="flex items-center gap-3 mb-4">
              //     <Image
              //       src={
              //         testimonial.avatar ||
              //         "/placeholder.svg?height=40&width=40&query=professional headshot"
              //       }
              //       width={1000}
              //       height={1000}
              //       alt={testimonial.name}
              //       className="w-10 h-10 rounded-full"
              //     />
              //     <div className="flex-1">
              //       <div className="font-medium text-sm">
              //         {testimonial.name}
              //       </div>
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
          </div>
          {/* experience */}

          <div className="mt-16">
            <div className="flex flex-col items-center gap-6 mb-10">
              <h2 className="text-5xl font-semibold text-[#333] leading-6">
                We are fight any violence with of experience.
              </h2>
              <p className="text-xl font-medium text-[#333]">
                Comprehensive legal defense across a wide range of criminal
                charges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center space-y-5 mb-4
                  bg-[#253459] rounded-xl px-4 py-6
                  "
                >
                  <Image
                    src={skill.icon.src}
                    alt="Nabil Ben-Naoum, Criminal Defense Lawyer"
                    width={1000}
                    height={1000}
                    className="w-14 h-11 "
                  />
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="text-xl font-semibold text-[#FFF]">
                      {skill.title}
                    </h3>
                    <p className="text-base text-center text-[#DEDEDE]">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
