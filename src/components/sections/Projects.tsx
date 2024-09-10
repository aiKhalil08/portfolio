import { useContext } from "react";
import { ModeContext } from "../../contexts/modeContext";
import livePreviewIcon from '../../assets/icons/live-preview.svg';
import { Github} from "../Icons";
import { projects, ProjectType } from "../../data/projects";

export function Projects({}) {
    const mode = useContext(ModeContext);
    return (
        <section id="projects" className="bg-grey-light-default px-28 py-24 flex flex-col gap-12">
            <div className="self-center text-center flex flex-col gap-4">
                <span className="rounded-xl bg-grey-light-200 px-5 py-1 text-body-3-all text-grey-light-600 self-center">Projects</span>
                <p className="text-subtitle-all text-grey-light-600">Some of my noteworthy projects</p>
            </div>
            <div>
                <ul className="flex flex-col gap-12 items-stretchs">
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
    const isEven = index === 0 || index % 2 === 0;

    const image = <div className="flex-1 p-12 grid place-items-center bg-grey-light-50">
                    <a href={project.livePreview || (project.github && project.github[0])} target="_blank">
                        <img src={project.imageUrl} className="rounded-xl w-[520px] hover:w-[540px] transition-all duration-200 ease-linear shadow-md"  alt="" />
                    </a>
                </div>

    return (
        <div className="flex h-[480px] shadow-md">
            { isEven && image }
            <div className="flex-1 p-12 flex flex-col gap-6">
                <h4 className="text-subtitle-all font-semibold text-grey-light-900">{project.title}</h4>
                <p className="text-body-2-all text-grey-light-600">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => {
                        return (
                            <li key={tech} className="rounded-xl px-5 py-1 bg-grey-light-200 text-body-3-all font-medium text-grey-light-600">{tech}</li>
                        )
                    })}
                </ul>
                <div className="flex gap-4">
                    {
                        project.livePreview &&
                        <a target="_blank" href={project.livePreview}><img src={livePreviewIcon} alt="" /></a>
                    }
                    {
                        project.github &&
                        <ul className="flex gap-4">
                            {project.github?.map(g =>  {
                                return (
                                    <li key={g}>
                                        <a target="_blank" href={g}>
                                            <Github mode={'light'} />
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