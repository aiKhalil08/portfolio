import { experiences, WorkExperienceType } from "../../data/experiences";
import { Domain } from "../../types";

const domainColors: Record<Domain, string> = {
    mobile: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    frontend: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    backend: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
};

export function Experiences() {
    return (
        <section id="experience" className="bg-grey-light-50 dark:bg-grey-dark-50 px-4 md:px-8 py-16 md:py-20 2xl:py-24 flex flex-col gap-6 md:gap-12">
            <div className="self-center text-center flex flex-col gap-4">
                <span className="rounded-xl bg-grey-light-200 dark:bg-grey-dark-200 px-5 py-1 text-body-3-all text-grey-light-600 dark:text-grey-dark-600 self-center">Experience</span>
                <p className="text-subtitle-tm md:text-subtitle-all text-grey-light-600 dark:text-grey-dark-600">Here is a quick summary of my most recent work experiences</p>
            </div>
            <div className="w-full max-w-5xl mx-auto relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-grey-light-200 dark:bg-grey-dark-200"></div>
                <div className="flex flex-col gap-12">
                    {experiences.map((experience, i) => (
                        <TimelineEntry key={experience.companyName} experience={experience} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineEntry({ experience, index }: { experience: WorkExperienceType; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className="relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-emerald-500 border-4 border-grey-light-50 dark:border-grey-dark-50 z-10"></div>

            {/* Desktop: alternating sides */}
            <div className={`hidden md:block w-1/2 ${isEven ? 'pr-12' : 'pl-12 ml-auto'}`}>
                <ExperienceCard experience={experience} />
            </div>

            {/* Mobile: always right of timeline */}
            <div className="md:hidden ml-10 flex-1">
                <ExperienceCard experience={experience} />
            </div>
        </div>
    );
}

function ExperienceCard({ experience }: { experience: WorkExperienceType }) {
    return (
        <div className="bg-grey-light-default dark:bg-grey-dark-100 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
                <img src={experience.companyLogo} alt="" className="h-12 w-12 object-cover rounded-lg" />
                <div className="flex-1 min-w-0">
                    <h3 className="text-body-1-all font-semibold text-grey-light-900 dark:text-grey-dark-900">{experience.role}</h3>
                    <p className="text-body-3-all text-grey-light-600 dark:text-grey-dark-600">{experience.companyName}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-body-3-all text-grey-light-500 dark:text-grey-dark-500">{experience.startDate} - {experience.endDate}</span>
                <span className="text-grey-light-300 dark:text-grey-dark-300">·</span>
                {experience.domains.map(d => (
                    <span key={d} className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${domainColors[d]}`}>
                        {d}
                    </span>
                ))}
            </div>
            <ul className="list-disc list-inside space-y-1.5">
                {experience.points.map(point => (
                    <li key={point} className="text-body-3-all text-grey-light-600 dark:text-grey-dark-600">
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
}
