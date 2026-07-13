"use client";

import React from "react";
import { TestimonialsColumn } from "./TestimonialsColumn";

const testimonials = [
  {
    text: "This tool completely changed how I create visuals for my projects. The results are stunning.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Chen",
    role: "Product Designer",
  },
  {
    text: "I was skeptical at first, but the output quality blew me away. Highly recommend to anyone.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Torres",
    role: "Marketing Lead",
  },
  {
    text: "The speed and quality of image generation here is unmatched. It's now part of my daily workflow.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Priya Sharma",
    role: "Content Creator",
  },
  {
    text: "Simple, fast, and the results look genuinely professional. Exactly what I needed.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Kim",
    role: "Freelance Developer",
  },
  {
    text: "Our team's design output has doubled since we started using this. Incredible tool.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Emma Williams",
    role: "Creative Director",
  },
  {
    text: "The interface is intuitive and the AI understands exactly what I'm going for.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "James Rodriguez",
    role: "Startup Founder",
  },
  {
    text: "I use this for all my client projects now. It saves me hours every week.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Lisa Park",
    role: "UX Designer",
  },
  {
    text: "Genuinely impressed by how well it handles complex prompts. A game changer.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Ahmed Hassan",
    role: "Software Engineer",
  },
  {
    text: "Best investment for my creative workflow this year, hands down.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Nina Petrov",
    role: "Illustrator",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="relative py-20">
      <div className="container z-10 mx-auto px-4">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
          <div className="rounded-lg border border-border px-4 py-1 text-sm">
            Testimonials
          </div>
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
            What our users say
          </h2>
          <p className="mt-5 text-center text-muted-foreground opacity-75">
            See what people are saying about their experience.
          </p>
        </div>

        <div className="flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
