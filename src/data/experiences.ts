import { Domain } from '../types';

export type WorkExperienceType = {
    companyLogo: string;
    companyName: string;
    role: string;
    startDate: string;
    endDate: string;
    points: string[];
    domains: Domain[];
}

export const experiences: WorkExperienceType[] = [
    {
        companyName: 'Optimus Bank Limited',
        companyLogo: '/images/companies/optimus-logo.jpeg',
        role: 'Full-Stack Developer (Mobile & Backend)',
        startDate: 'January, 2025',
        endDate: 'Present',
        domains: ['mobile', 'backend'],
        points: [
            'Leading development of the corporate internet banking mobile app as the project\'s technical lead.',
            'Built and integrated an AI chatbot API powering in-app conversational banking on Optiverse.',
            'Developed Optipass, a visitor management system, handling full backend implementation.',
            'Integrated with Google ML-Kit to implement facial liveness detection for biometric authorization of high-stakes user actions.',
            'Shipped multiple mobile features including group savings, scheduled transactions, international payments, and health insurance.',
            'Refactored core areas of the codebase to improve maintainability and scalability across the stack.',
        ]
    },
    {
        companyName: 'Freelance',
        companyLogo: '/images/companies/freelance-logo.jpeg',
        role: 'Full-Stack Developer',
        startDate: '2025',
        endDate: 'Present',
        domains: ['mobile', 'frontend', 'backend'],
        points: [
            'Built and shipped four client products spanning mobile health tracking, crypto analytics, a full salon booking ecosystem, and a real-time multiplayer game.',
            'Worked independently across the full stack — from API design and database architecture to mobile and web frontends.',
        ]
    },
    {
        companyName: 'Mitiget Assurance and Technology Services Limited',
        companyLogo: '/images/companies/mitiget-logo.jpeg',
        role: 'Full-Stack Web Developer',
        startDate: 'January, 2024',
        endDate: 'January, 2025',
        domains: ['frontend', 'backend'],
        points: [
            'Developed an e-learning platform (Mitiget Learning Academy) using Angular (frontend) and Laravel (backend) with MySQL database, featuring a course registration system, a quiz system, an audit system, and affiliate marketing functionality.',
            'Led the frontend team of a Governance, Risk, and Compliance (GRC) system project.',
            'Created an events management and registration website using vanilla PHP.',
        ]
    }
];
