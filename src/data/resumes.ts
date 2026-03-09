import { ResumeVariant } from '../types';

export type ResumeOption = {
    variant: ResumeVariant;
    label: string;
    filename: string;
};

export const resumes: ResumeOption[] = [
    { variant: 'fullstack', label: 'Full-Stack', filename: 'Ibrahim Abdullahi-Idiagbon Full-stack Resume.pdf' },
    { variant: 'mobile', label: 'Mobile', filename: 'Ibrahim Abdullahi-Idiagbon Mobile Resume.pdf' },
    { variant: 'frontend', label: 'Frontend', filename: 'Ibrahim Abdullahi-Idiagbon Frontend Resume.pdf' },
    { variant: 'backend', label: 'Backend', filename: 'Ibrahim Abdullahi-Idiagbon Backend Resume.pdf' },
];
