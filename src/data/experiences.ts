export type WorkExperienceType = {
    companyLogo: string;
    companyName: string;
    role: string;
    startDate: string;
    endDate: string;
    points: string[];
}

export const experiences: WorkExperienceType[] = [
    {
        companyName: 'Mitiget Assurance and Technology Services Limited',
        companyLogo: '/images/companies/mitiget-logo.jpeg',
        role: 'Full Stack Developer',
        startDate: 'January, 2024',
        endDate: 'Present',
        points: [
            'Developed an e-learning platform (Mitiget Learning Academy) using Angular (frontend) and Laravel (backend) with MySQL database, featuring a course registration system, a quiz system, an audit system, and affiliate marketing functionality.',
            'Created an events management and registration website using vanilla PHP.',
            'Currently developing the frontend of a Governance, Risk, and Compliance (GRC) system using React.'
        ]
    }
]