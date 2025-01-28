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

  {/* First Project: Afrired App */}
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-950 text-white">
        <div className="py-16  w-full text-center">
        
          <div className="mt-2 text-center text-gray-400 text-xs md:text-lg lg:text-lg">
   <div className='bold-18'>    Movies Project

Overview:
</div>
The Movies project is a web application built using Laravel, designed to allow users to explore, rate, and review movies. 
The application utilizes Laravel Passport for authentication, providing a secure API for user registration, login, and access to movie-related features.

Features User Authentication:

Secure user registration and login using Laravel Passport. Password reset functionality with email notifications. Movie Management:

Users can view a list of movies with details such as title, description, and average rating. 
Users can add reviews and ratings for each movie, with a maximum rating of 5. Average Rating Calculation:

          </div>
          <p>
    <Link href="https://github.com/abiodunemma/Africed.git" className="text-blue-500 hover:text-blue-700">
    https://github.com/a/Africed.git
    </Link>
  </p>
        
        </div>
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
          <div className="text-white font-bold mt-2 text-center">Was written with React Native.
          <p>
    <Link href="https://github.com/abiodunemma/travel.git" className="text-blue-500 hover:text-blue-700">
    https://github.com/a/travel.git
    </Link>
  </p>
          </div>
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
  Was written with Next.js.
  <p>
    <Link href="https://blogjs-gmvf.vercel.app/" className="text-blue-500 hover:text-blue-700">
      Blog Web
    </Link>
  </p>


  {/* First Project: Afrired App */}
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-950 text-white">
        <div className="py-16  w-full ">
        
          <div className="mt-2  text-gray-400 text-xs md:text-lg lg:text-lg">
   <div className='bold-18'>    Logreg Project

Overview:
</div>
LogReg Web Application with Integrated Payment System
The LogReg Web App is a robust and user-friendly platform developed using Laravel, designed to streamline the purchase and payment process. This project integrates a secure payment gateway, Paystack, ensuring seamless and reliable transactions after users purchase goods.

Features
User Authentication:

Implemented using Laravel's built-in authentication features.
Secure login and registration (LogReg) to ensure data privacy.
Product Purchase Flow:

Users can browse and select goods for purchase.
A smooth checkout process leads to payment integration.
Paystack Payment Integration:

Integrated Paystack's API to handle transactions securely.
Customers are redirected to Paystack for payment processing and are returned to the application upon successful payment.
API Implementation:

Built custom APIs to manage product data and process user transactions.
Ensured RESTful API architecture for scalability and flexibility.

          </div>
          <p>
    <Link href="https://github.com/abiodunemma/Africed.git" className="text-blue-500 hover:text-blue-700">
    https://github.com/a/Logreg.git
    </Link>
  </p>
        
        </div>
      </div>



  
</div>




      </div>
</div>
  
  );
};

export default Project;
