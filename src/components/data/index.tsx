import { FaLaptopCode, FaBalanceScale, FaChalkboardTeacher } from "react-icons/fa";
export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    course: "Computer Science",
    text: "“Godfrey Okoye University has given me the best learning experience with world-class faculty.”",
  },
  {
    id: 2,
    name: "Jane Doe",
    course: "Medicine",
    text: "“The environment and community here have been life-changing for my education and career.”",
  },
  {
    id: 3,
    name: "John Smith",
    course: "Law",
    text: "“The resources and facilities at Godfrey Okoye University have been invaluable to my studies.”",
  },
  {
    id: 4,
    name: "Jane Smith",
    course: "Business",
    text: "“The support and guidance I received from the faculty and staff at Godfrey Okoye University has been instrumental in my success.”",
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Staff", href: "/staff" }
];

export const courses = [
  {
    id: "computer-science",
    title: "Computer Science",
    description: "Learn programming, AI, and software engineering.",
    details: "The Computer Science program covers core areas such as programming, artificial intelligence, database systems, and cybersecurity. Students will engage in hands-on projects, coding challenges, and real-world applications to prepare for careers in software development, data science, and more.",
    icon: <FaLaptopCode className="text-green-700 text-5xl mx-auto" />,
  },
  {
    id: "law",
    title: "Law",
    description: "Study legal systems, ethics, and jurisprudence.",
    details: "The Law program provides students with a strong foundation in legal principles, ethics, and case law. Courses include constitutional law, criminal justice, and human rights. Graduates will be equipped to pursue careers as lawyers, judges, or legal advisors.",
    icon: <FaBalanceScale className="text-green-700 text-5xl mx-auto" />,
  },
  {
    id: "education",
    title: "Education",
    description: "Train to become an impactful educator.",
    details: "The Education program focuses on teaching methodologies, curriculum development, and classroom management. Students will gain hands-on experience through teaching practice, preparing them for roles as educators, administrators, and policy makers in the education sector.",
    icon: <FaChalkboardTeacher className="text-green-700 text-5xl mx-auto" />,
  },
];


export const staffMembers = [
  {
    id: "john-doe",
    name: "Dr. John Doe",
    role: "Professor of Computer Science",
    bio: "Dr. John Doe is a distinguished professor specializing in AI and cybersecurity. With over 15 years of experience, he has led groundbreaking research in artificial intelligence and machine learning.",
    image: "https://placehold.co/600x400.png",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "johndoe@example.com",
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    role: "Head of Law Faculty",
    bio: "Jane Smith is a highly respected legal scholar with expertise in international law and human rights. She has mentored countless students in their journey toward legal excellence.",
    image: "https://placehold.co/600x400.png",
    linkedin: "https://linkedin.com/in/janesmith",
    email: "janesmith@example.com",
  },
  {
    id: "michael-johnson",
    name: "Michael Johnson",
    role: "Dean of Education",
    bio: "Michael Johnson has dedicated his career to shaping the future of education. His research focuses on innovative teaching methods and inclusive learning strategies.",
    image: "https://placehold.co/600x400.png",
    twitter: "https://twitter.com/michaeljohnson",
    email: "michaeljohnson@example.com",
  },
];
