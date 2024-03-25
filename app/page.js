import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Head from 'next/head';
import Link from 'next/link';

const developers = [
  { name: "Kunal Agrawal", designation: "Team Leader", role: "Backend Developer", linkedin: "https://www.linkedin.com/in/kunalragrawal", github: "https://github.com/kunalagra" },
  { name: "Deexith Madas", designation: "Team Member", role: "Backend Developer", linkedin: "https://www.linkedin.com/in/deexith-madas", github: "https://github.com/MDeexith" },
  { name: "Aman Tiwari", designation: "Team Member", role: "Frontend Developer", linkedin: "https://www.linkedin.com/in/aman-tiwari03", github: "https://github.com/SultanIndian007" },
  { name: "Ganesh Utla", designation: "Team Member", role: "Frontend Developer", linkedin: "https://www.linkedin.com/in/ganesh-utla-888abc", github: "https://github.com/ganesh-utla" },
];

export default function Home() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">

          <div className='flex justify-center items-center'>
            <img
              src='/logo.png'
              alt='codegamy_logo'
              className='w-52 h-52 mb-6 object-contain'
            />
          </div>
          <p className="text-xl text-gray-700 text-center mb-12">Learn, Compete, Collaborate</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/problems">
              <FeatureCard title="Problems" description="Dive into a vast array of coding problems to hone your skills and master various algorithms and data structures." />
            </Link>
            <Link href="/contests">
              <FeatureCard title="Contests" description="Put your skills to the test in our thrilling coding contests. Compete against top programmers and climb the leaderboard to showcase your talent." />
            </Link>
            <Link href="/interview">
              <FeatureCard title="Interview Prep" description="Ace your coding interviews with our curated collection of questions and resources tailored to help you succeed." />
            </Link>
            <Link href="/news">
              <FeatureCard title="News" description="Stay updated with the latest industry news, trends, and advancements in the world of technology and software development." />
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-center mt-16">Meet Our Developers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {developers.map((developer) => (
              <DeveloperCard key={developer.name} {...developer} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:bg-light-2 group transition-all">
      <h2 className="text-xl font-semibold mb-4 group-hover:underline">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function DeveloperCard({ name, designation, role, linkedin, github }) {
  return (
    <div className="bg-gray-200 hover:bg-gray-300 py-6 transition-all rounded-lg shadow-md p-4 text-center">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-500">{designation}</p>
      <p className="text-gray-700">{role}</p>
      <div className="flex justify-center mt-4">
        <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-500" />
        </Link>
        <Link href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 text-gray-700 hover:text-gray-500" />
        </Link>
      </div>
    </div>
  );
}
