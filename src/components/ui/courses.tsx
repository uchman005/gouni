"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { courses } from "../data";
import Link from "next/link";


export default function CoursesPage() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className=" py-16 mt-10 px-4 bg-gray-200">
            <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Our Courses</h1>

            <div className="grid md:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="hidden md:block col-span-1 bg-gray-100 text-gray-800 p-4 rounded-lg sticky top-20">
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>
                    <ul className="space-y-2">
                        {courses.map((course) => (
                            <li key={course.title} className="hover:text-green-700">
                                {course.title}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Courses List */}
                <div className="md:col-span-3 space-y-6">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center" data-aos="fade-up">
                            <div className="w-20 h-20 flex items-center justify-center">
                                {course.icon}
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-bold text-green-800">{course.title}</h2>
                                <p className="text-gray-600">{course.description}</p>
                                <Link href={`/courses/${course.id}`} className="text-green-700 hover:underline">
                                    View Details
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
