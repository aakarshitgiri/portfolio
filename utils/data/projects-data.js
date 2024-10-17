import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'B2B Travel White Label CRM',
        description: "I developed a robust B2B travel portal white-label solution, enabling clients to fully manage their business operations through an intuitive dashboard. The platform allows clients to customize their website design, manage payment methods, integrate hotel suppliers, and oversee revenue management. It also includes user role and access management, giving clients full control over their team and service providers. On the frontend, I created a seamless interface for users to search, view, and book hotels, ensuring a smooth experience across all devices.",
        tools: ['Express', 'NextJS', 'RxJS', 'TypeScript', 'AWS Services', 'Nginx', 'Google Maps', 'Tailwind CSS'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Campaign Management & Job Board',
        description: 'This project involved building a comprehensive campaign management system for B2B clients, allowing them to create and manage campaigns with ease. The system supports adding agencies under campaigns and includes a fully integrated wallet system for managing financial transactions. Additionally, it streamlines candidate screening, making it easier for clients to manage job postings and applicants. This end-to-end solution simplifies both campaign and job board management, enhancing efficiency for businesses.',
        tools: ['Angular', 'SCSS', "Google Maps", "TypeScript", "Express", "MongoDB", "AWS Services", "Jenkins", "NodeJS", "CronJob", "JWT"],
        role: 'Software Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Community Dashboard and Mobile App',
        description: 'In this project, I developed a web-based dashboard and a mobile app to manage community users and events. The dashboard allows administrators to verify users, manage their cars, create and oversee events, and handle group chats, user-to-user chats, and offers. The mobile app complements this by enabling community members to add their cars, join events, participate in chats, and access exclusive offers, providing a cohesive platform for community engagement both online and on mobile devices.',
        tools: ['Angular', 'IONIC', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'AWS Service', 'OpenAI API', 'Socket.IO', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];
