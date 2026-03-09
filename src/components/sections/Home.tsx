import { useContext, useEffect, useRef } from "react";
import { Github, LinkedIn, Pin, Twitter } from "../Icons";
import onlineIcon from '../../assets/icons/online.svg';
import { ModeContext } from "../../contexts/modeContext";
import { MeContext } from "../../contexts/meContext";
import { Me } from "../../types";

export function Home() {
    const mode = useContext(ModeContext);
    const me = useContext(MeContext) as Me;

    const iconRef = useRef<HTMLElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const oberserver = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        iconRef.current?.classList.add('waving-hand')
                    }
                    if (!e.isIntersecting) {
                        iconRef.current?.classList.remove('waving-hand')
                    }
                });
            }, {threshold: 0});
            oberserver.observe(sectionRef.current as HTMLElement)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section ref={sectionRef} id="home" className="bg-grey-light-default dark:bg-grey-dark-default px-4 md:px-8 py-16 md:py-20 2xl:py-24">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:justify-between">
                <div className="relative self-center md:self-start md:order-last shrink-0 w-[280px] md:w-80 h-[300px] md:h-[360px]">
                    <div className="absolute bottom-0 md:right-0 w-[280px] h-[280px] md:h-80 bg-emerald-500/10 dark:bg-emerald-500/10 border-8 border-grey-light-default dark:border-grey-dark-default"></div>
                    <div className="absolute z-[1] top-0 left-5 md:left-0 w-[240px] md:w-[280px] h-[280px] md:h-80 border-8 border-grey-light-default dark:border-grey-dark-default">
                        <img src="/coding-astronaut.webp" className="object-cover w-full h-full" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-8 2xl:gap-12 md:order-first">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-heading-1-mobile font-semibold md:text-heading-1-desktop md:font-bold text-grey-light-900 dark:text-grey-dark-900">Hi, I’m {me.firstName} <span ref={iconRef} className="inline-block">👋</span></h2>
                        <p className="text-body-2-all text-grey-light-600 dark:text-grey-dark-600">
                            I’m a Full-Stack Software Developer with 7 years of coding experience building robust mobile and web solutions, with a focus on financial services, health tech, education, and compliance systems. I’ve successfully delivered mission-critical applications including banking platforms, AI-powered chatbots, comprehensive e-learning solutions, and enterprise GRC systems. I work across the full stack — from React Native and Expo mobile apps to React, Angular, and Next.js frontends, and Node.js, Nest.js, .Net, Laravel, and Django backends. I’m passionate about leveraging emerging technologies to create innovative digital experiences that drive business growth.
                        </p>
                    </div>
                    <div className="space-y-2 text-body-2-all text-grey-light-600 dark:text-grey-dark-600">
                        <div className="flex gap-2">
                            <Pin mode={mode} />
                            <span>{me.state}, {me.country}</span>
                        </div>
                        <div className="flex gap-2">
                            <img src={onlineIcon} alt="" className="animate-pulse" />
                            <span>Available for work</span>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <a target="_blank" rel="noreferrer" href={me.github}>
                            <Github mode={mode} />
                        </a>
                        <a target="_blank" rel="noreferrer" href={me.twitter}>
                            <Twitter mode={mode} />
                        </a>
                        <a target="_blank" rel="noreferrer" href={me.linkedin}>
                            <LinkedIn mode={mode} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}