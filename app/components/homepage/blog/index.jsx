// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import blog1 from '@/public/blogs/1.png';
import blog2 from '@/public/blogs/2.png';
import blog3 from '@/public/blogs/3.png';
import blog4 from '@/public/blogs/4.png';
import blog5 from '@/public/blogs/5.png';
import blog6 from '@/public/blogs/6.png';
import blog7 from '@/public/blogs/7.png';
import blog8 from '@/public/blogs/8.png';

function Blog() {
  const blogs = [
    {
      image:blog8,
      title:"Simplifying State Management in Next.js with Zustand: A Comprehensive Guide",
      description:"State management is the backbone of modern web applications. Whether it’s managing a user’s authentication status, handling complex application logic, or persisting data across sessions, choosing the right state management library is crucial. For many developers working with Next.js, Zustand has emerged as a lightweight, powerful, and elegant solution. In this article, we’ll explore what makes Zustand stand out, how it simplifies state management, and why it might be a better fit than traditional tools like Redux or Context API for your Next.js projects.",
      date:"December 16, 2024",
      link:"https://www.linkedin.com/pulse/simplifying-state-management-nextjs-zustand-guide-aakarshit-giri-ch4nc/"
    },
    {
      image:blog7,
      title:"Understanding React Hooks Beyond the Basics",
      description:"As developers, we often dive into learning React Hooks without fully understanding their true purpose. We might know how to use hooks, but not why they exist or how to leverage them in real-world scenarios, especially when it comes to custom solutions. This gap is why many developers don’t immediately think of creating a custom hook to solve recurring problems.",
      date:"October 23, 2024",
      link:"https://www.linkedin.com/pulse/understanding-react-hooks-beyond-basics-aakarshit-giri-ibyzc/"
    },
    {
      image:blog6,
      title:"Next.js 15: The Future of Web Development",
      description:"The Next.js continues redefining web development standards, and its 15th release introduces a wealth of new features, performance improvements, and breaking changes. With enhanced server components, optimized static generation, support for ESLint 9, and a host of breaking and non-breaking updates, Next.js 15 provides a more robust, streamlined development experience. This article dives deep into the critical updates, explaining their significance and how they shape the future of web development with Next.js.",
      date:"October 23, 2024",
      link:"https://www.linkedin.com/pulse/nextjs-15-future-web-development-aakarshit-giri-erdqc/"
    },
    {
      image:blog1,
      title:"My Journey into Learning Next.js: A 3-Month Transformation",
      description:"Three months ago, I hadn't even touched React.js, let alone Next.js. My background was firmly rooted in JavaScript, TypeScript, and Angular, where I was familiar with the fundamentals and had worked extensively. However, React.js and Next.js were completely new territories for me. This is the story of how I transitioned from having zero experience in React.js to gaining hands-on practice in Next.js, a framework that has significantly expanded my capabilities as a developer.",
      date:"September 3, 2024",
      link:"https://www.linkedin.com/pulse/my-journey-learning-nextjs-3-month-transformation-aakarshit-giri-clkac/"
    },
    {
      image:blog2,
      title:"System Design: Laying the Groundwork for Scalable and Efficient Systems",
      description:"Building large-scale software systems that can handle high traffic volumes and scale efficiently is a complex challenge. Proper system design from the outset is crucial to ensure your application can grow and adapt as needed. In this article, we'll cover some key principles and strategies for designing scalable and efficient systems.",
      date:"May 23, 2024",
      link:"https://www.linkedin.com/pulse/system-design-laying-groundwork-scalable-efficient-systems-giri-x4kfc/"
    },
    {
      image:blog3,
      title:"Types of Backend Web Architecture with Node.js",
      description:"Backend web architecture encompasses various structures and patterns for organizing server-side components. In the Node.js ecosystem, developers leverage different architectures to build scalable, maintainable, and efficient web applications. ",
      date:"March 22, 2024",
      link:"https://www.linkedin.com/pulse/types-backend-web-architecture-nodejs-aakarshit-giri-af4hc/"
    },
    {
      image:blog4,
      title:"Securing Your Socket.IO Chat APIs: Best Practices and Implementation Guide",
      description:"In today's interconnected world, real-time communication is essential for countless applications, ranging from chat applications to collaborative tools. Socket.IO has emerged as a powerful tool for enabling real-time, bidirectional communication between clients and servers. However, ensuring the security of these chat APIs is paramount to protect sensitive data and maintain user privacy. In this article, we'll explore best practices for securing Socket.IO chat APIs and provide sample code snippets for implementation.",
      date:"March 15, 2024",
      link:"https://www.linkedin.com/pulse/securing-your-socketio-chat-apis-best-practices-guide-aakarshit-giri-kxekc/"
    },
    {
      image:blog5,
      title:"Exploring Real-Time Communication with Socket.IO and Node.js",
      description:"In the dynamic landscape of web development, real-time communication has become a crucial aspect of creating engaging and interactive applications. One powerful tool that facilitates this is Socket.IO, a JavaScript library that enables bidirectional, event-based communication between clients and servers. In this article, we'll delve into the fundamentals of Socket.IO, demonstrate its integration with Node.js, and explore multiple use case examples.",
      date:"November 21, 2023",
      link:"https://www.linkedin.com/pulse/exploring-real-time-communication-socketio-nodejs-aakarshit-giri-hjxkf/"
    }
  ]

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
        
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default Blog;