"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { staffMembers } from "../data";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function StaffPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full mt-10 py-16 px-4 bg-gray-200 min-h-[80vh]">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Our Staff</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {staffMembers.map((staff) => (
          <Link key={staff.id} href={`/staff/${staff.id}`} className="block">
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 pb-10 cursor-pointer hover:shadow-2xl transition-all"
              data-aos="zoom-in"
            >
              <Image
                src={staff.image}
                width={150}
                height={150}
                alt={staff.name}
                className="rounded-full mx-auto w-32 h-32 object-cover"
              />
              <h2 className="text-xl font-bold text-green-800 mt-4">{staff.name}</h2>
              <p className="text-gray-600">{staff.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                {staff.linkedin && (
                  <Link href={staff.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800" />
                  </Link>
                )}
                {staff.twitter && (
                  <Link href={staff.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
                  </Link>
                )}
                {staff.email && (
                  <Link href={`mailto:${staff.email}`}>
                    <FaEnvelope className="text-gray-600 text-2xl hover:text-gray-800" />
                  </Link>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
