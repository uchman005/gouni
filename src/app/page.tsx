'use client';
import { useEffect } from "react";
import { FaBookOpen, FaChalkboardTeacher, FaGraduationCap, FaPhone, FaEnvelope } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "@/components/ui/carousel";
import Link from "next/link";
import { testimonials } from "@/components/data";
import Image from "next/image";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section with Carousel */}
      <section className="mt-16">
        <Carousel />
      </section>

      {/* Courses Section */}
      <section id="courses" className="container mx-auto py-12" data-aos="fade-up">
        <h2 className="text-center text-2xl font-bold text-green-800">Our Courses</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <FaBookOpen className="text-green-700 text-4xl mx-auto" />
            <h3 className="mt-4 font-semibold">Computer Science</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <FaGraduationCap className="text-green-700 text-4xl mx-auto" />
            <h3 className="mt-4 font-semibold">Law</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <FaChalkboardTeacher className="text-green-700 text-4xl mx-auto" />
            <h3 className="mt-4 font-semibold">Education</h3>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="bg-gray-200 py-12" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-800">Campus Life</h2>
          <p className="mt-4 text-lg">
            Experience a vibrant and diverse campus with modern facilities, clubs, and cultural events.
          </p>

          {/* Image Gallery */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-hidden">
            {["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"].map((src, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <Image src={src} alt={`Campus image ${index + 1}`} layout="fill" objectFit="cover" className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="container mx-auto py-12 overflow-hidden" data-aos="fade-up">
        <h2 className="text-center text-2xl font-bold text-green-800">What Our Students Say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(({ id, name, course, text }) => (
            <div key={id} className="p-6 bg-white shadow-md rounded-lg">
              <p className="italic">{text}</p>
              <h3 className="mt-4 font-semibold">- {name}, {course}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Study Here */}
      <section className="bg-green-800 text-white py-12" data-aos="fade-right">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Why Study at Godfrey Okoye University?</h2>
          <p className="mt-4 text-lg">A leading institution with world-class faculty and a commitment to innovation.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-12 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-green-800">Contact Us</h2>
        <p className="mt-4 text-lg">Have questions? Reach out to us today.</p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href={'tel:+1234567890'} className="p-6 bg-white shadow-md rounded-lg text-center">
            <FaPhone className="text-green-700 text-4xl mx-auto" />
            <h3 className="mt-4 font-semibold">+123 456 7890</h3>
          </Link>
          <Link href={'mailto:info@gouniversity.edu'} className="p-6 bg-white shadow-md rounded-lg text-center">
            <FaEnvelope className="text-green-700 text-4xl mx-auto" />
            <h3 className="mt-4 font-semibold">info@gouniversity.edu</h3>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
