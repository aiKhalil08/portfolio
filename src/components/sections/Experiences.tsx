import { useContext } from "react";
import { ModeContext } from "../../contexts/modeContext";
import { experiences, WorkExperienceType } from "../../data/experiences";

export function Experiences({}) {
    const mode = useContext(ModeContext);
    return (
        <section id="experience" className="bg-grey-light-50 px-28 py-24 flex flex-col gap-12">
            <div className="self-center text-center flex flex-col gap-4">
                <span className="rounded-xl bg-grey-light-200 px-5 py-1 text-body-3-all text-grey-light-600 self-center">Work Experience</span>
                <p className="text-subtitle-all text-grey-light-600">Here is a quick summary of my most recent work experiences</p>
            </div>
            <div>
                <ul className="flex flex-col gap-12 items-center">
                    {
                        experiences.map(experience => {
                            return (
                                <li key={experience.companyName}>
                                    <WorkExperience experience={experience} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

function WorkExperience({experience}: {experience: WorkExperienceType}) {
    return (
        <div className="bg-grey-light-default rounded-xl p-8 flex gap-12 shadow-md max-w-[896px]">
            <div className="flex flex-col gap-4 max-w-64 flex-1">
                <span className="text-body-3-all text-grey-light-900">{experience.companyName}</span>
                <img src={experience.companyLogo} alt="" className="self-start h-[150px] w-[200px] object-cover" />
            </div>
            <div className="space-y-4 flex-[2_1]">
                <h3 className="text-subtitle-all font-semibold">{experience.role}</h3>
                <ul className="list-disc space-y-1">
                    {
                        experience.points.map(point => {
                            return (
                                <li key={point} className="text-body-2-all text-grey-light-600">
                                    {point}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <span className="self-start text-body-2-all text-grey-light-700 flex-1">{experience.startDate} - {experience.endDate}</span>
        </div>
    );
}