import { useContext, useState } from "react";
import { ModeContext } from "../../contexts/modeContext";
import { skills, SkillType } from "../../data/skills";
import { Domain, SkillCategory } from "../../types";
import { DomainFilter } from "../DomainFilter";
import { filterByDomain } from "../../utils/filterByDomain";

const categoryLabels: Record<SkillCategory, string> = {
    language: 'Languages',
    framework: 'Frameworks & Libraries',
    database: 'Databases',
    tool: 'Tools & Platforms',
    other: 'Others',
};

const categoryOrder: SkillCategory[] = ['language', 'framework', 'database', 'tool', 'other'];

function groupByCategory(items: SkillType[]): Record<SkillCategory, SkillType[]> {
    const groups: Record<SkillCategory, SkillType[]> = {
        language: [], framework: [], database: [], tool: [], other: [],
    };
    items.forEach(skill => groups[skill.category].push(skill));
    return groups;
}

export function Skills({}) {
    const [activeDomain, setActiveDomain] = useState<Domain | 'all'>('all');

    const filtered = filterByDomain(skills, activeDomain);
    const grouped = groupByCategory(filtered);

    return (
        <section id="skills" className="bg-grey-light-default dark:bg-grey-dark-default px-4 md:px-8 py-16 md:py-20 2xl:py-24 flex flex-col gap-6 md:gap-12">
            <div className="self-center text-center flex flex-col gap-4">
                <span className="rounded-xl bg-grey-light-200 dark:bg-grey-dark-200 px-5 py-1 text-body-3-all text-grey-light-600 dark:text-grey-dark-600 self-center">Skills</span>
                <p className="text-subtitle-tm md:text-subtitle-all text-grey-light-600 dark:text-grey-dark-600">The skills, tools and technologies I have expertise in and have worked with</p>
            </div>
            <DomainFilter activeDomain={activeDomain} onDomainChange={setActiveDomain} />
            <div key={activeDomain} className="w-full max-w-7xl mx-auto flex flex-col gap-10 fade-in">
                {categoryOrder.map(cat => {
                    const items = grouped[cat];
                    if (items.length === 0) return null;
                    return (
                        <div key={cat}>
                            <h3 className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 mb-4">{categoryLabels[cat]}</h3>
                            <ul className="grid grid-cols-[repeat(3,minmax(88px,1fr))] md:grid-cols-[repeat(7,minmax(88px,1fr))] gap-4 md:gap-8">
                                {items.map(skill => (
                                    <li key={skill.name}>
                                        <Skill skill={skill} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

function Skill({skill}: {skill: SkillType}) {
    const mode = useContext(ModeContext);
    return (
        <div className="group flex flex-col gap-1 items-center cursor-pointer">
            <div className="w-[70px] h-[70px] grid place-items-center">
                <img src={skill.imageUrl} className={`w-16 h-16 md:group-hover:w-[70px] md:group-hover:h-[70px] transition-all duration-200 ease-linear object-contain ${skill.invertInDark && mode === 'dark' ? 'invert' : ''}`} alt="" />
            </div>
            <span className="text-body-3-all text-grey-light-600 dark:text-grey-dark-600 text-center">{skill.name}</span>
        </div>
    );
}
