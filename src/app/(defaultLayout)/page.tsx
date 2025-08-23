"use client";
import nabil_image from "@/assets/about/nabil_img.jpg";
import google_icon from "@/assets/home/google_icon.png";
import icon1 from "@/assets/skill/Frame.png";
import icon4 from "@/assets/skill/Layer_1 (1).png";
import icon5 from "@/assets/skill/Layer_1 (2).png";
import icon3 from "@/assets/skill/Layer_1.png";
import icon2 from "@/assets/skill/Vector (1).png";
import icon6 from "@/assets/skill/Шар_1.png";
import TestimonialCard from "@/components/defaultLayout/card/Testimonial-card";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);
  const reviewsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const skillsRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([".hero-title", ".hero-description", ".hero-buttons"], {
        opacity: 0,
        y: 50,
      });

      gsap.set(".hero-image", {
        opacity: 0,
        scale: 0.9,
        x: 50,
      });

      gsap.set(".reviews-section", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".testimonial-card", {
        opacity: 0,
        y: 40,
      });

      gsap.set(".experience-title", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".experience-subtitle", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".skill-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
      });

      // Hero section animations
      const heroTl = gsap.timeline({ delay: 0.2 });

      heroTl
        .to(".hero-title", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          ".hero-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          ".hero-buttons",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          ".hero-image",
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );

      // Reviews section with scroll trigger
      ScrollTrigger.create({
        trigger: ".reviews-section",
        start: "top 80%",
        animation: gsap.to(".reviews-section", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }),
      });

      // Testimonials stagger animation
      ScrollTrigger.create({
        trigger: ".testimonials-grid",
        start: "top 85%",
        animation: gsap.to(".testimonial-card", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        }),
      });

      // Experience section
      ScrollTrigger.create({
        trigger: ".experience-section",
        start: "top 80%",
        animation: gsap
          .timeline()
          .to(".experience-title", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          })
          .to(
            ".experience-subtitle",
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4"
          ),
      });

      // Skills grid animation
      ScrollTrigger.create({
        trigger: ".skills-grid",
        start: "top 85%",
        animation: gsap.to(".skill-card", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }),
      });

      // Add hover animations for interactive elements
      gsap.utils.toArray<HTMLElement>(".skill-card").forEach((card) => {
        const icon = card.querySelector(".skill-icon");

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(icon, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Button hover animations
      gsap.utils.toArray<HTMLElement>(".animated-button").forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      });

      // Floating animation for hero image
      gsap.to(".hero-image", {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="lg:ml-0 p-6 lg:p-12 pt-16 lg:pt-12">
      <div className="max-w-7xl ml-0 md:ml-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Hero Content */}
          <div className="col-span-1 md:col-span-3" ref={heroContentRef}>
            <h1 className="hero-title text-4xl lg:text-6xl font-bold text-[#33333] mb-6 leading-10 md:leading-20 tracking-normal">
              Trusted Criminal Defense, Personalized For You
            </h1>
            <p className="hero-description text-[#333333]/80 text-lg font-normal mb-8 leading-relaxed">
              Dedicated to protecting your rights and ensuring a fair legal
              process. With years of experience, I provide robust defense
              strategies tailored to your unique situation, fighting tirelessly
              for justice.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="animated-button bg-[#990012] hover:bg-red-700 text-white px-6 py-6 text-base font-normal rounded-xl w-full sm:w-auto">
                  CONTACT ME
                </Button>
              </Link>
              <Link href="/book-consultation">
                <Button
                  variant="outline"
                  className="animated-button border-gray-300 px-8 py-6 text-base text-gray-700 font-medium bg-transparent rounded-xl w-full sm:w-auto"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Professional Photo */}
          <div
            className="col-span-1 md:col-span-2 flex justify-center lg:justify-end"
            ref={heroImageRef}
          >
            <div className="hero-image relative w-full max-w-md">
              <div className="rounded-lg relative">
                <div className="relative h-[500px]">
                  <Image src={nabil_image.src} alt="Nabil Ben-Naoum" width={1000} height={1000} className="w-full h-full object-cover absolute top-0 left-0 z-50 rounded-lg" />
                  {/* <Image
                    src={nabil_img_bg.src}
                    alt="Background"
                    width={1000}
                    height={1000}
                    className="w-full h-4/5 object-cover border-1 px-1 py-4 b border-black absolute bottom-0 left-0 right-0 z-20 rounded-lg"
                  />
                  <Image
                    src={nabil.src}
                    alt="Nabil Ben-Naoum, Criminal Defense Lawyer"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover absolute top-0 left-0 z-50 rounded-lg"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Section */}
        <div className="mb-12" ref={reviewsRef}>
          <div className="reviews-section bg-[#F4F4F4CC]/80 rounded-lg px-2 py-3 flex items-center gap-4 mb-8 flex-wrap font-inter">
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
          </div>

          {/* Testimonials Grid */}
          <div
            className="testimonials-grid grid md:grid-cols-2 xl:grid-cols-4 gap-6"
            ref={testimonialsRef}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <TestimonialCard />
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="experience-section mt-16" ref={experienceSectionRef}>
            <div className="flex flex-col items-center gap-6 my-16">
              <h2 className="experience-title text-4xl md:text-5xl font-semibold text-[#333] leading-10 md:leading-13">
                We are fight any violence with of experience.
              </h2>
              <p className="experience-subtitle text-base md:text-xl font-medium text-[#333]">
                Comprehensive legal defense across a wide range of criminal
                charges.
              </p>
            </div>
            <div
              className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
              ref={skillsRef}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card flex flex-col justify-center items-center space-y-5 mb-4 bg-[#253459] rounded-xl px-4 py-6 cursor-pointer"
                >
                  <Image
                    src={skill.icon.src}
                    alt="Skill Icon"
                    width={1000}
                    height={1000}
                    className="skill-icon w-14 h-11"
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
