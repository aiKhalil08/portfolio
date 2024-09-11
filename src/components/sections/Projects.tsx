import { useContext } from "react";
import { ModeContext } from "../../contexts/modeContext";
import { Github, LivePreview} from "../Icons";
import { projects, ProjectType } from "../../data/projects";

export function Projects({}) {
    const mode = useContext(ModeContext);
    return (
        <section id="work" className="bg-grey-light-default dark:bg-grey-dark-default px-4 md:px-8 py-16 md:py-20 2xl:py-24 flex flex-col gap-6 md:gap-12">
            <div className="self-center text-center flex flex-col gap-4">
                <span className="rounded-xl bg-grey-light-200 dark:bg-grey-dark-200 px-5 py-1 text-body-3-all text-grey-light-600 dark:text-grey-dark-600 self-center">Work</span>
                <p className="text-subtitle-tm md:text-subtitle-all text-grey-light-600 dark:text-grey-dark-600">Some of my noteworthy projects</p>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <ul className="flex flex-col gap-6 md:gap-12 items-stretchs">
                    {
                        projects.map((project, i) => {
                            return (
                                <li key={project.title}>
                                    <Project index={i} project={project} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

function Project({project, index}: {project: ProjectType, index: number}) {
    const mode = useContext(ModeContext);
    const isEven = index === 0 || index % 2 === 0;

    const image = <div className="order-1 md:order-none flex-1 p-8 md:p-12 grid place-items-center bg-grey-light-50 dark:bg-grey-dark-200">
                    <a href={project.livePreview || (project.github && project.github[0])} target="_blank">
                        <img src={project.imageUrl} className="rounded-xl sm:min-w-80 w-[520px] md:hover:w-[540px] transition-all duration-200 ease-linear shadow-md"  alt="" />
                    </a>
                </div>

    return (
        <div className="flex flex-col md:flex-row h-fit md:min-h-[480px] shadow-md dark:bg-grey-dark-100">
            { isEven && image }
            <div className="order-2 md:order-none flex-1 p-8 md:p-12 flex flex-col gap-6">
                <h4 className="text-subtitle-tm md:text-subtitle-all font-semibold text-grey-light-900 dark:text-grey-dark-900">{project.title}</h4>
                <p className="text-body-2-all text-grey-light-600 dark:text-grey-dark-600">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => {
                        return (
                            <li key={tech} className="rounded-xl px-5 py-1 bg-grey-light-200 dark:bg-grey-dark-200 text-body-3-all font-medium text-grey-light-600 dark:text-grey-dark-600">{tech}</li>
                        )
                    })}
                </ul>
                <div className="flex gap-2">
                    {
                        project.livePreview &&
                        <a target="_blank" href={project.livePreview}>
                            <LivePreview mode={mode} />
                        </a>
                    }
                    {
                        project.github &&
                        <ul className="flex gap-2">
                            {project.github?.map(g =>  {
                                return (
                                    <li key={g}>
                                        <a target="_blank" href={g}>
                                            <Github mode={mode} />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </div>
            </div>
            { !isEven && image }
        </div>
    );
}