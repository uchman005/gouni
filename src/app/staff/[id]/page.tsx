import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { staffMembers } from "@/components/data";
import Link from "next/link";

export default async function StaffProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const staff = staffMembers.find((s) => s.id === id);

  if (!staff) return <h1 className="w-full py-16 px-4 bg-gray-100 min-h-screen text-gray-800">No staff with id: {id}</h1>;

  return (
    <div className="w-full pt-15 px-4 bg-gray-100 min-h-[80vh]">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <div className="text-center px-8">
          <Image
            src={staff.image}
            width={150}
            height={150}
            alt={staff.name}
            className="rounded-full mx-auto w-40 h-40 object-cover"
          />
          <h1 className="text-3xl font-bold text-green-800 mt-4">{staff.name}</h1>
          <p className="text-gray-600 text-lg">{staff.role}</p>
        </div>

        <div className="mt-6 text-center text-gray-700">
          <p className="text-lg leading-relaxed">{staff.bio}</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          {staff.linkedin && (
            <Link href={staff.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-3xl hover:text-blue-800" />
            </Link>
          )}
          {staff.twitter && (
            <Link href={staff.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-3xl hover:text-blue-600" />
            </Link>
          )}
          {staff.email && (
            <Link href={`mailto:${staff.email}`}>
              <FaEnvelope className="text-gray-600 text-3xl hover:text-gray-800" />
            </Link>
          )}
        </div>
        <Link href={`/staff`} className="text-green-600 hover:text-green-800 mt-4" >Go Back</Link>
      </div>
    </div>
  );
}
