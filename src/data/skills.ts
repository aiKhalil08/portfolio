import { Domain, SkillCategory } from '../types';

export type SkillType = {
    imageUrl: string;
    name: string;
    category: SkillCategory;
    domains: Domain[];
    invertInDark?: boolean;
};

export const skills: SkillType[] = [
    // Languages
    {name: 'JavaScript', imageUrl: '/images/skills/icon-javascript.png', category: 'language', domains: ['mobile', 'frontend', 'backend']},
    {name: 'TypeScript', imageUrl: '/images/skills/icon-typescript.png', category: 'language', domains: ['mobile', 'frontend', 'backend']},
    {name: 'PHP', imageUrl: '/images/skills/icon-php.png', category: 'language', domains: ['backend']},
    {name: 'Python', imageUrl: '/images/skills/icon-python.png', category: 'language', domains: ['backend']},
    {name: 'Kotlin', imageUrl: '/images/skills/icon-kotlin.png', category: 'language', domains: ['mobile']},
    {name: 'C', imageUrl: '/images/skills/icon-c.png', category: 'language', domains: ['backend']},
    {name: 'C#', imageUrl: '/images/skills/icon-csharp.png', category: 'language', domains: ['backend']},
    {name: 'SQL', imageUrl: '/images/skills/icon-sql.png', category: 'language', domains: ['backend']},

    // Frameworks & Libraries
    {name: 'React', imageUrl: '/images/skills/icon-react.png', category: 'framework', domains: ['frontend']},
    {name: 'React Native', imageUrl: '/images/skills/icon-react.png', category: 'framework', domains: ['mobile']},
    {name: 'Expo', imageUrl: '/images/skills/icon-expo.png', category: 'framework', domains: ['mobile'], invertInDark: true},
    {name: 'Next.js', imageUrl: '/images/skills/icon-nextjs.png', category: 'framework', domains: ['frontend'], invertInDark: true},
    {name: 'Angular', imageUrl: '/images/skills/icon-angular.png', category: 'framework', domains: ['frontend']},
    {name: '.Net', imageUrl: '/images/skills/icon-dotnet.png', category: 'framework', domains: ['backend']},
    {name: 'Laravel', imageUrl: '/images/skills/icon-laravel.png', category: 'framework', domains: ['backend']},
    {name: 'Node.js', imageUrl: '/images/skills/icon-nodejs.png', category: 'framework', domains: ['backend']},
    {name: 'Nest.js', imageUrl: '/images/skills/icon-nestjs.png', category: 'framework', domains: ['backend']},
    {name: 'Express.js', imageUrl: '/images/skills/icon-express.png', category: 'framework', domains: ['backend'], invertInDark: true},
    {name: 'Django', imageUrl: '/images/skills/icon-django.png', category: 'framework', domains: ['backend']},
    {name: 'Redux', imageUrl: '/images/skills/icon-redux.png', category: 'framework', domains: ['mobile', 'frontend']},
    {name: 'TailwindCSS', imageUrl: '/images/skills/icon-tailwindcss.png', category: 'framework', domains: ['frontend']},
    {name: 'Bootstrap', imageUrl: '/images/skills/icon-bootstrap.png', category: 'framework', domains: ['frontend']},

    // Databases
    {name: 'MySQL', imageUrl: '/images/skills/icon-mysql.png', category: 'database', domains: ['backend']},
    {name: 'PostgreSQL', imageUrl: '/images/skills/icon-postgresql.png', category: 'database', domains: ['backend']},
    {name: 'MsSQL', imageUrl: '/images/skills/icon-mssql.png', category: 'database', domains: ['backend']},
    {name: 'MongoDB', imageUrl: '/images/skills/icon-mongodb.png', category: 'database', domains: ['backend']},
    {name: 'SQLite', imageUrl: '/images/skills/icon-sqlite.png', category: 'database', domains: ['mobile']},
    {name: 'Redis', imageUrl: '/images/skills/icon-redis.png', category: 'database', domains: ['backend']},

    // Tools & Platforms
    {name: 'Git', imageUrl: '/images/skills/icon-git.png', category: 'tool', domains: ['mobile', 'frontend', 'backend']},
    {name: 'Docker', imageUrl: '/images/skills/icon-docker.png', category: 'tool', domains: ['backend']},
    {name: 'AWS', imageUrl: '/images/skills/icon-aws.png', category: 'tool', domains: ['backend']},
    {name: 'Firebase', imageUrl: '/images/skills/icon-firebase.png', category: 'tool', domains: ['mobile', 'backend']},
    {name: 'Supabase', imageUrl: '/images/skills/icon-supabase.png', category: 'tool', domains: ['frontend', 'backend']},
    {name: 'Stripe', imageUrl: '/images/skills/icon-stripe.png', category: 'tool', domains: ['backend'], invertInDark: true},
    {name: 'Paystack', imageUrl: '/images/skills/icon-paystack.png', category: 'tool', domains: ['backend']},
    {name: 'Yoco', imageUrl: '/images/skills/icon-yoco.png', category: 'tool', domains: ['backend']},

    // Other
    {name: 'WebSockets', imageUrl: '/images/skills/icon-websockets.png', category: 'other', domains: ['frontend', 'backend']},
    {name: 'WebRTC', imageUrl: '/images/skills/icon-webrtc.png', category: 'other', domains: ['mobile', 'frontend']},
];
