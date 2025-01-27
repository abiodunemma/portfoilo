import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = () => {
  return (
    <div className="py-0 flex flex-col mt-0 p-0 bg-black">
      {/* Project Title */}
      <div className="mt-5 p-0 text-orange-600 justify-center text-center text-lg sm:text-xl md:text-2xl font-bold bg-black">
        PROJECTS
      </div>

      {/* First Project: Travel App */}
      <div className="mb-4 flex flex-auto border-red-900 bg-black text-white">
        <div className="py-16 w-full mt-0 p-0">
          <img
            src="/travels.png"
            alt="React Native Travel App"
            width="900"
            height="100"
            className="lg:w-full text-white bg-black"
          />
          <p className="mt-2 text-center text-gray-400 text-xs md:text-lg lg:text-lg">
            The Travel App is a cutting-edge mobile application designed to revolutionize tourism by offering travelers an intuitive,
            feature-rich, and personalized experience. Developed using React Native, the app ensures seamless performance on both iOS and
            Android platforms, leveraging a single codebase for efficiency and consistency.
          </p>
          <div className="text-white font-bold mt-2 text-center">Was written with React Native.</div>
        </div>
      </div>

      {/* Second Project: Blog Web */}
      <div className="text-gray-30">
        <div className="py-16 w-full mt-0 p-0">
          <img
            src="/blog.png"
            alt="Blog Web"
            width="900"
            height="100"
            className="lg:w-full text-white bg-black"
          />
        </div>
        <div className="mt-2 text-center text-gray-400 text-xs md:text-lg lg:text-lg justify-center">
          <p>
            Blog Web Application for Petrong Software Solution<br />
            Tech Stack: Next.js, TypeScript, State Management
          </p>
          <p>
            I developed a dynamic and scalable blog web application for Petrong Software Solution, leveraging Next.js for its powerful
            server-side rendering capabilities and seamless client-side navigation. This project showcased my expertise in crafting clean,
            maintainable, and scalable codebases tailored to modern web applications.
          </p>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Dynamic Content Management: Effortless addition, editing, and deletion of blog posts with real-time updates.</li>
            <li>Scalability: Modular design ensuring easy future enhancements.</li>
            <li>State Management: Robust state management solutions for smooth user experience.</li>
          </ul>
        </div>
        <div className="text-white font-bold mt-2 text-center">
  Was written with React & Next.js.
  <p>
    <Link href="https://blogjs-gmvf.vercel.app/" className="text-blue-500 hover:text-blue-700">
      Blog Web
    </Link>
  </p>
</div>

      </div>

      {/* Third Project: Gym Web */}
      <div className="text-gray-30">
        <div className="py-16 w-full mt-0 p-0">
          <img
            src="/gym.png"
            alt="Gym Web"
            width="900"
            height="100"
            className="lg:w-full text-white bg-black"
          />
        </div>
        <div className="mt-2 text-center text-gray-400 text-xs md:text-lg lg:text-lg justify-center">
          <p>
            Gym Management Web Application<br />
            Tech Stack: PHP, Laravel, MySQL, Payment Gateway (Paystack)
          </p>
          <p>
            I developed a feature-rich gym management web application aimed at optimizing gym operations and enhancing the user experience.
            The application, built with Laravel, demonstrates my ability to deliver clean, scalable, and maintainable solutions tailored to
            business needs.
          </p>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Member Management: Easy tracking and management of gym members.</li>
            <li>Class Scheduling: Real-time booking system for classes and sessions.</li>
            <li>Payment Gateway: Integrated Paystack for secure online payments.</li>
          </ul>
        </div>
        <div className="text-white font-bold mt-2 text-center">Was written with PHP & Laravel.</div>
      </div>
    </div>
  );
};

export default Project;
