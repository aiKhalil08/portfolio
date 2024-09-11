export type ProjectType = {
    imageUrl: string;
    title: string;
    description: string;
    technologies: string[];
    livePreview?: string;
    github?: string[];
}

export const projects: ProjectType[] = [
    {
        title: 'MLA (Mitiget Learning Academy)',
        description: 'An e-learning platform for course browsing and registration, events registration, e-quiz and third party affiliate marketing. Incoorpoarates an audit system.',
        imageUrl: '/images/projects/mla.png',
        technologies: ['Typescript', 'Angular', 'TailwindCSS', 'PHP', 'Laravel', 'MySQL', 'JWT', 'RESTful API'],
        livePreview: 'https://mla.mitiget.com/',
    },
    {
        title: 'Telehealth',
        description: 'A platform for accessing health services online. Includes a feature that can help you find hospitals near you according to the selected search radius.',
        imageUrl: '/images/projects/telehealth.png',
        technologies: ['Typescript', 'React', 'TailwindCSS', 'MapBox API', 'Geoapify', 'RESTful API'],
        livePreview: 'https://telehealth-omega.vercel.app/',
        github: ['https://github.com/aiKhalil08/telehealth']
    },
    {
        title: 'Subssum',
        description: 'A telecommunications platform for purchasing data bundles, airtime, and electricity plans. You may create an account and login.',
        imageUrl: '/images/projects/subssum.png',
        technologies: ['Javascript', 'React', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'RESTful API'],
        livePreview: 'https://subssum-drab.vercel.app/',
        github: ['https://github.com/aiKhalil08/subssum', 'https://github.com/aiKhalil08/subssumapi']
    },
    {
        title: 'Events Registration',
        description: 'An events creation and registration plaform. Contains an event creation section where you input the event details and copy the registration link. The links directs users to the event registration form.',
        imageUrl: '/images/projects/events.png',
        technologies: ['PHP', 'TailwindCSS', 'MySQL'],
        livePreview: 'https://event.mitiget.com/register.php?e=Tech%20Skills%20with%20Global%20Relevance:%20Earning%20in%20Foreign%20Currency',
    },
    {
        title: 'School Portal',
        description: 'A secondary school portal divided into students, staff and admin sections. Contains features like students record management and in-app messaging.',
        imageUrl: '/images/projects/fpc.png',
        technologies: ['PHP', 'Javascript', 'CSS', 'MySQL'],
        github: ['https://github.com/aiKhalil08/fpc']
    },
    {
        title: 'Bluefield Clinic',
        description: 'A clinic website incoorporating a patient management system, dianostics system and a prescription system.',
        imageUrl: '/images/projects/bluefield.png',
        technologies: ['PHP', 'Javascript', 'CSS', 'Laravel', 'MySQL', 'RESTful API'],
        github: ['https://github.com/aiKhalil08/bluefield']
    },
]