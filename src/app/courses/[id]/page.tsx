import { courses } from "@/components/data";
import Link from "next/link";

export default async function CourseDetail({params}: { params: Promise<{ id: string }> }) {
  
  const { id } = await params;  
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <p className="text-center text-red-500">Course not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-[75vh] mt-15 bg-white">
      <div className="hadow-md p-6 rounded-lg text-center h-[75vh] pt-15 max-w-lg mx-auto">
        <div className="text-green-700 text-6xl mx-auto">{course.icon}</div>
        <h1 className="text-3xl font-bold text-green-800 mt-4">{course.title}</h1>
        <p className="text-gray-600 mt-2">{course.details}</p>
        <Link href={`/courses`} className="mt-4 text-green-700 hover:text-green-500 text-center">Go back</Link>
      </div>
    </div>
  );
}
