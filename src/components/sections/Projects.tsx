import { useContext, useState } from "react";
import { ModeContext } from "../../contexts/modeContext";
import { Github, LivePreview } from "../Icons";
import { projects, ProjectType } from "../../data/projects";
import { Domain, ProjectContext } from "../../types";
import { DomainFilter } from "../DomainFilter";
import { filterByDomain } from "../../utils/filterByDomain";

const contextLabels: Record<ProjectContext, string> = {
    professional: 'Professional',
    freelance: 'Freelance',
    personal: 'Personal',
};

const contextOrder: ProjectContext[] = ['professional', 'freelance', 'personal'];

const domainColors: Record<Domain, string> = {
    mobile: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    frontend: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    backend: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
};

export function Projects({}) {
    const [activeDomain, setActiveDomain] = useState<Domain | 'all'>('all');

    const filtered = filterByDomain(projects, activeDomain);
    const grouped = contextOrder
        .map(ctx => ({ context: ctx, items: filtered.filter(p => p.context === ctx) }))
        .filter(g => g.items.length > 0);

    return (
        <section id="work" className="bg-grey-light-default dark:bg-grey-dark-default px-4 md:px-8 py-16 md:py-20 2xl:py-24 flex flex-col gap-6 md:gap-12">
            <div className="self-center text-center flex flex-col gap-4">
                <span className="rounded-xl bg-grey-light-200 dark:bg-grey-dark-200 px-5 py-1 text-body-3-all text-grey-light-600 dark:text-grey-dark-600 self-center">Projects</span>
                <p className="text-subtitle-tm md:text-subtitle-all text-grey-light-600 dark:text-grey-dark-600">Some of my noteworthy projects</p>
            </div>
            <DomainFilter activeDomain={activeDomain} onDomainChange={setActiveDomain} />
            <div key={activeDomain} className="w-full max-w-7xl mx-auto flex flex-col gap-12 fade-in">
                {grouped.map(({ context, items }) => (
                    <div key={context}>
                        <h3 className="text-body-1-all font-semibold text-grey-light-900 dark:text-grey-dark-900 mb-6">{contextLabels[context]}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {items.map(project => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: ProjectType }) {
    const mode = useContext(ModeContext);

    return (
        <div className="flex flex-col rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden bg-grey-light-default dark:bg-grey-dark-100">
            <a
                href={project.livePreview || (project.github && project.github[0])}
                target="_blank"
                rel="noreferrer"
                className="block bg-grey-light-50 dark:bg-grey-dark-200 p-6"
            >
                <img
                    src={project.imageUrl}
                    className="w-full h-48 object-cover rounded-lg hover:scale-[1.02] transition-transform duration-200"
                    alt={project.title}
                />
            </a>
            <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <h4 className="text-subtitle-tm md:text-body-1-all font-semibold text-grey-light-900 dark:text-grey-dark-900">{project.title}</h4>
                    <div className="flex gap-1 shrink-0">
                        {project.domains.map(d => (
                            <span key={d} className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${domainColors[d]}`}>
                                {d}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="text-body-3-all text-grey-light-600 dark:text-grey-dark-600 line-clamp-3">{project.description}</p>
                <ul className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map(tech => (
                        <li key={tech} className="rounded-lg px-3 py-0.5 bg-grey-light-200 dark:bg-grey-dark-200 text-[12px] font-medium text-grey-light-600 dark:text-grey-dark-600">{tech}</li>
                    ))}
                </ul>
                <div className="flex gap-2 pt-2">
                    {project.livePreview && (
                        <a target="_blank" rel="noreferrer" href={project.livePreview}>
                            <LivePreview mode={mode} />
                        </a>
                    )}
                    {project.github?.map(g => (
                        <a key={g} target="_blank" rel="noreferrer" href={g}>
                            <Github mode={mode} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
