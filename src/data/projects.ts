import { Domain, ProjectContext } from '../types';

export type ProjectType = {
    imageUrl: string;
    title: string;
    description: string;
    technologies: string[];
    domains: Domain[];
    context: ProjectContext;
    livePreview?: string;
    github?: string[];
}

export const projects: ProjectType[] = [
    // Professional Projects
    {
        title: 'Optiverse (Optimus Bank)',
        description: 'A banking application designed for seamless domestic and international transfers and payments, featuring an intuitive, user-friendly interface for effortless navigation.',
        imageUrl: '/images/projects/optiverse.png',
        technologies: ['TypeScript', 'React Native', 'Redux', 'Redux Thunk', 'Context API', 'NativeWind', 'REST API'],
        domains: ['mobile', 'backend'],
        context: 'professional',
        livePreview: 'https://play.google.com/store/apps/details?id=com.optiversev2&hl=en_US',
    },
    {
        title: 'Optiverse Business',
        description: 'Optimus Bank\'s corporate internet banking mobile application, enabling businesses to manage accounts, approve transactions, and handle multi-level authorization workflows.',
        imageUrl: '/images/projects/optiverse-business.svg',
        technologies: ['TypeScript', 'React Native', 'Redux', 'Redux Thunk', 'Context API', 'NativeWind', 'REST API'],
        domains: ['mobile'],
        context: 'professional',
    },
    {
        title: 'Optipass',
        description: 'A visitor management system for Optimus Bank, handling full backend implementation for visitor tracking and access control.',
        imageUrl: '/images/projects/optipass.png',
        technologies: ['.Net', 'C#', 'MsSQL', 'REST API'],
        domains: ['backend'],
        context: 'professional',
    },
    {
        title: 'M-Clarion',
        description: 'A GRC system that helps organizations manage their employees record, control access to resources, track risks, goals and objectives.',
        imageUrl: '/images/projects/mclarion.png',
        technologies: ['TypeScript', 'React', 'React Query', 'Context API', 'TailwindCSS', 'REST API'],
        domains: ['frontend'],
        context: 'professional',
        livePreview: 'https://mitiget.com/',
    },
    {
        title: 'MLA (Mitiget Learning Academy)',
        description: 'A comprehensive e-learning platform with course management, quiz taking, audit system, and affiliate marketing features.',
        imageUrl: '/images/projects/mla.png',
        technologies: ['TypeScript', 'Angular', 'TailwindCSS', 'PHP', 'Laravel', 'MySQL', 'JWT', 'REST API'],
        domains: ['frontend', 'backend'],
        context: 'professional',
        livePreview: 'https://mla.mitiget.com/',
    },
    {
        title: 'Events Registration',
        description: 'An events creation and registration platform with both administration and registration interfaces.',
        imageUrl: '/images/projects/events.png',
        technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
        domains: ['frontend', 'backend'],
        context: 'professional',
        livePreview: 'https://event.mitiget.com/register.php?e=Tech%20Skills%20with%20Global%20Relevance:%20Earning%20in%20Foreign%20Currency',
    },

    // Freelance Projects
    {
        title: 'Healthify',
        description: 'Health tracking mobile app with OCR-powered lab report analysis, daily reminders, weekly check-ins, and Google Health Connect integration for cross-app data sync.',
        imageUrl: '/images/projects/healthify.png',
        technologies: ['React Native', 'NestJS', 'PostgreSQL', 'Firebase'],
        domains: ['mobile', 'backend'],
        context: 'freelance',
    },
    {
        title: 'Iris Crypto Engine',
        description: 'Crypto intelligence dashboard featuring live market prices, trading signals, alpha feeds, portfolio tracking, and watchlists.',
        imageUrl: '/images/projects/iris-crypto.png',
        technologies: ['React', 'Supabase'],
        domains: ['frontend', 'backend'],
        context: 'freelance',
    },
    {
        title: 'The Gentle Touch',
        description: 'Full salon ecosystem: customer mobile app, marketing website, and admin portal supporting appointment booking, payments, real-time chat, product shopping, staff management, and service configuration.',
        imageUrl: '/images/projects/gentle-touch.png',
        technologies: ['Expo', 'React Native', 'Next.js', 'NestJS', 'MongoDB', 'Firebase', 'Redis', 'Yoco'],
        domains: ['mobile', 'frontend', 'backend'],
        context: 'freelance',
    },
    {
        title: 'Pictionary Android TV Game',
        description: 'Real-time multiplayer game where players draw on a web canvas that streams live to an Android TV; other players guess in real time via WebRTC.',
        imageUrl: '/images/projects/pictionary-game.png',
        technologies: ['Kotlin', 'WebRTC', 'Cloudflare Workers'],
        domains: ['mobile', 'frontend', 'backend'],
        context: 'freelance',
    },

    // Personal Projects
    {
        title: 'Telehealth',
        description: 'A platform for accessing health services online. Includes a feature that can help you find hospitals near you according to the selected search radius.',
        imageUrl: '/images/projects/telehealth.png',
        technologies: ['TypeScript', 'React', 'TailwindCSS', 'MapBox API', 'Geoapify'],
        domains: ['frontend'],
        context: 'personal',
        livePreview: 'https://telehealth-omega.vercel.app/',
        github: ['https://github.com/aiKhalil08/telehealth']
    },
    {
        title: 'Subssum',
        description: 'A telecommunications platform for purchasing data bundles, airtime, and electricity plans.',
        imageUrl: '/images/projects/subssum.png',
        technologies: ['JavaScript', 'React', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
        domains: ['frontend', 'backend'],
        context: 'personal',
        livePreview: 'https://subssum-drab.vercel.app/',
        github: ['https://github.com/aiKhalil08/subssum', 'https://github.com/aiKhalil08/subssumapi']
    },
    {
        title: '2-D Platform Game',
        description: 'A browser-based platform game showcasing front-end development and game logic skills.',
        imageUrl: '/images/projects/2d-platform-game.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        domains: ['frontend'],
        context: 'personal',
        livePreview: 'https://aikhalil08.github.io/2d-platform-game/',
        github: ['https://github.com/aiKhalil08/2d-platform-game']
    },
    {
        title: 'School Portal',
        description: 'A comprehensive school management system with student, teacher, and admin interfaces featuring records management and in-app messaging.',
        imageUrl: '/images/projects/fpc.png',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        domains: ['frontend', 'backend'],
        context: 'personal',
        github: ['https://github.com/aiKhalil08/fpc']
    },
    {
        title: 'Bluefield Clinic',
        description: 'A clinic website incorporating a patient management system, diagnostics system and a prescription system.',
        imageUrl: '/images/projects/bluefield.png',
        technologies: ['PHP', 'JavaScript', 'CSS', 'Laravel', 'MySQL', 'REST API'],
        domains: ['frontend', 'backend'],
        context: 'personal',
        github: ['https://github.com/aiKhalil08/bluefield']
    },
];
