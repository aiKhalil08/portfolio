import { useContext } from "react";
import { ModeContext } from "../../contexts/modeContext";

export function About({}) {
    const mode = useContext(ModeContext);

    return (
        <section id="about-me" className="bg-grey-light-50 px-28 py-24 flex flex-col gap-12">
            <span className="self-center rounded-xl bg-grey-light-200 px-5 py-1 text-body-3-all text-grey-light-600">About me</span>
            <div className="flex gap-48 justify-between">
                <div className="relative w-[440px] h-[520px] shrink-0">
                    <div className="absolute bottom-0 left-0 w-[400px] h-[480px] bg-grey-light-200 border-8 border-grey-light-default"></div>
                    <div className="absolute z-[1] top-0 right-0 w-[400px] h-[480px] border-8 border-grey-light-default">
                        <img src="/rover.webp" className="object-cover w-full h-full" alt="" />
                    </div>
                </div>
                <article className="space-y-6">
                    <h3 className="text-heading-3-desktop font-semibold text-grey-light-900">Some info about me</h3>
                    <div className="space-y-4 text-grey-light-600 text-body-2-all">
                        <p>
                            I am a dedicated full-stack web developer with over 5 years of coding experience. My passion lies in creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
                        </p>
                        <p>
                            Throughout my career, I have specialized in both frontend and backend system implementation, developing a wide range of web applications including a telehealth website, e-learning platforms, GRC systems, telecommunications website, audit systems, quiz systems, affiliate marketing systems, 2-D platform games, school portals, and clinic websites.
                        </p>
                        <p>
                            My technical expertise spans a diverse array of languages, frameworks, and technologies. This includes proficiency in JavaScript, TypeScript, PHP, SQL, and Python, as well as experience working with frameworks and libraries such as Laravel, Angular, React, Node.js, Express.js, Django, TailwindCSS, and Bootstrap. I'm also skilled in working with databases like MySQL, PostgreSQL, and MongoDB, and I'm adept at using tools and technologies like Git, GitHub, Docker, and AWS.
                        </p>
                        <p>
                            Despite my extensive experience, I approach each new project with the same level of enthusiasm and dedication as if it were something entirely novel. My focus is always on supporting forward-thinking development teams by providing cutting-edge web solutions that meet the unique needs of their clients.
                        </p>
                        <p>
                            Whether I'm working on the frontend or the backend, my goal is to leverage my full-stack expertise to create exceptional digital experiences that stand out from the crowd. I take great pride in my work and am constantly seeking new ways to push the boundaries of what's possible in the world of web development.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}