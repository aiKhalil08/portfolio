import { useContext } from "react";
import { Github, LinkedIn, Pin, Twitter } from "../Icons";
import onlineIcon from '../../assets/icons/online.svg';
import { ModeContext } from "../../contexts/modeContext";
import { MeContext } from "../../contexts/meContext";

export function Home({}) {
    const mode = useContext(ModeContext);
    const me = useContext(MeContext);

    return (
        <section id="home" className="bg-grey-light-default px-28 py-24 flex gap-12">
            <div className="flex flex-col gap-12">
                <div>
                    <h2 className="text-heading-1-desktop font-bold text-grey-light-900">Hi, I’m {me.firstName} <span className="waving-hand inline-block">👋</span></h2>
                    <p className="text-body-2-all text-grey-light-600">
                        I'm a full-stack web developer with 5+ years of experience in building diverse web applications, from e-learning platforms to audit and GRC systems. I specialize in both frontend and backend technologies, working with JavaScript, Typescript, PHP, Python, Laravel, Angular, React, Node.js, and Django, among others. I am skilled in databases like MySQL, PostgreSQL, and MongoDB, and tools like Git, Docker, and AWS. I’m passionate about delivering fast, responsive, and visually appealing digital solutions.
                    </p>
                </div>
                <div className="space-y-2 text-body-2-all text-grey-light-600">
                    <div className="flex gap-2">
                        <Pin mode={mode} />
                        <span>{me.state}, {me.country}</span>
                    </div>
                    <div className="flex gap-2">
                        <img src={onlineIcon} alt="" />
                        <span>Available for work</span>
                    </div>
                </div>
                <div className="flex gap-1">
                    <a target="_blank" href={me.github}>
                        <Github mode={mode} />
                    </a>
                    <a target="_blank" href={me.twitter}>
                        <Twitter mode={mode} />
                    </a>
                    <a target="_blank" href={me.linkedin}>
                        <LinkedIn mode={mode} />
                    </a>
                </div>
            </div>
            <div className="float-end w-[400px] shrink-0 h-[360px]">
                <div className="relative ml-auto w-80 p-4 h-full">
                    <div className="absolute bottom-0 right-0 w-[280px] h-80 bg-grey-light-200 border-8 border-grey-light-default"></div>
                    <div className="absolute z-[1] top-0 left-0 w-[280px] h-80 border-8 border-grey-light-default">
                        <img src="/rover.webp" className="object-cover w-full h-full" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}