import { useContext } from "react";
import { ModeContext } from "../../contexts/modeContext";
import { skills, SkillType } from "../../data/skills";

export function Skills({}) {
    const mode = useContext(ModeContext);
    return (
        <section id="skills" className="bg-grey-light-default dark:bg-grey-dark-default px-4 md:px-8 py-16 md:py-20 2xl:py-24 flex flex-col gap-6 md:gap-12">
            <div className="self-center text-center flex flex-col gap-4">
                <span className="rounded-xl bg-grey-light-200 dark:bg-grey-dark-200 px-5 py-1 text-body-3-all text-grey-light-600 dark:text-grey-dark-600 self-center">Skills</span>
                <p className="text-subtitle-tm md:text-subtitle-all text-grey-light-600 dark:text-grey-dark-600">The skills, tools and technologies I have expertise in and have worked with</p>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <ul className="grid grid-cols-[repeat(3_,minmax(88px,1fr))] md:grid-cols-[repeat(7_,minmax(88px,1fr))] gap-4 md:gap-12">
                    {
                        skills.map(skill => {
                            return (
                                <li key={skill.name}>
                                    <Skill skill={skill} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

function Skill({skill}: {skill: SkillType}) {
    const mode = useContext(ModeContext);
    return (
        <div className="group flex flex-col gap-1 items-center cursor-pointer">
            <div className="w-[70px] h-[70px] grid place-items-center">
                <img src={skill.imageUrl} className={`w-16 h-16 md:group-hover:w-[70px] md:group-hover:h-[70px] transition-all duration-200 ease-linear object-contain ${skill.name === 'Express.js' && mode === 'dark' ? 'invert' : ''}`} alt="" />
            </div>
            <span className="text-body-1-all text-grey-light-600 dark:text-grey-dark-600">{skill.name}</span>
        </div>
    );
}