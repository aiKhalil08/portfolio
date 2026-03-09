import { useContext, useEffect, useRef } from "react";
import { ModeContext } from "../../contexts/modeContext";

export function About() {
    const mode = useContext(ModeContext);
    const iconRef = useRef<HTMLElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const oberserver = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        iconRef.current?.classList.add('magnifying-glass')
                    }
                    if (!e.isIntersecting) {
                        iconRef.current?.classList.remove('magnifying-glass')
                    }
                });
            }, {threshold: 0});
            oberserver.observe(sectionRef.current as HTMLElement)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section ref={sectionRef} id="about-me" className="bg-grey-light-50 dark:bg-grey-dark-50 px-4 md:px-8 py-16 md:py-20 2xl:py-24 flex flex-col gap-6 md:gap-12">
            <span className="self-center rounded-xl bg-grey-light-200 dark:bg-grey-dark-200 px-5 py-1 text-body-3-all text-grey-light-600 dark:text-grey-dark-600">About me</span>
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
                <div className="relative self-center md:self-start w-80 md:w-[440px] h-[380px] md:h-[520px] shrink-0">
                    <div className="absolute bottom-0 left-0 w-80 md:w-[400px] h-[360px] md:h-[480px] bg-grey-light-200 dark:bg-grey-dark-200 border-8 border-grey-light-50 dark:border-grey-dark-50"></div>
                    <div className="absolute z-[1] top-0 right-5 md:right-0 w-[280px] md:w-[400px] h-[360px] md:h-[480px] border-8 border-grey-light-50 dark:border-grey-dark-50">
                        <img src="/cosmic-code.webp" className="object-cover w-full h-full" alt="" />
                    </div>
                </div>
                <article className="space-y-6 max-w-xl">
                    <h3 className="text-heading-3-tm md:text-heading-3-desktop font-semibold text-grey-light-900 dark:text-grey-dark-900">
                        <span className="inline-block mr-2" ref={iconRef}>🔍</span>
                        Some info about me
                    </h3>
                    <div className="space-y-4 text-grey-light-600 dark:text-grey-dark-600 text-body-2-all">
                        <p>
                            I am a dedicated full-stack software developer with over 7 years of coding experience. My passion lies in creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive — across mobile, web, and backend systems.
                        </p>
                        <p>
                            Throughout my career, I have delivered a wide range of products including banking platforms, AI-powered chatbots, health tracking apps, e-learning platforms, GRC systems, salon booking ecosystems, real-time multiplayer games, crypto analytics dashboards, and payment integrations.
                        </p>
                        <p>
                            My technical expertise spans languages like JavaScript, TypeScript, PHP, Kotlin, Python, C#, and C. I work with frameworks such as React, React Native, Expo, Angular, Next.js, .Net, Laravel, Node.js, Nest.js, Express.js, and Django. I'm skilled in databases including MySQL, PostgreSQL, MsSQL, MongoDB, SQLite, and Redis, and experienced with tools like Git, Docker, AWS, Firebase, Supabase, and payment platforms like Stripe, Paystack, and Yoco.
                        </p>
                        <p>
                            I approach every project with the same enthusiasm and dedication, always aiming to deliver innovative solutions tailored to clients' needs. Whether building mobile apps, crafting web frontends, or architecting backend systems, my focus is on creating standout digital experiences that drive real business value.
                        </p>
                        <h4 className="text-subtitle-all font-medium text-grey-light-900 dark:text-grey-dark-900">Some more personal stuff:</h4>
                        <ul className="list-disc list-inside">
                            <li>On a normal day I code 8 - 10 hours</li>
                            <li>On a good day I code 12+ hours</li>
                            <li>When I am not coding, I am reading Maths or CS books</li>
                            <li>But hey! My life is not entirely boring. I watch Chelsea F.C. when they play 😁💙</li>
                            <li>In the few minutes before I fall asleep I read novels. I am presently reading Foundation</li>
                            <li>And, as you might have guessed: I AM OBSESSED WITH SPACE! 🛰️</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
}