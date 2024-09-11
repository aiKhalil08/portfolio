import { FC, useEffect, useState } from "react"

import { Home } from "./sections/Home"
import { ModeContext } from "../contexts/modeContext"
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experiences } from "./sections/Experiences";
import { Projects } from "./sections/Projects";
import { Header } from "./sections/Header";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Me } from "../types";
import { MeContext } from "../contexts/meContext";

const Main: FC = () => {
    const [mode, setMode] = useState<'dark' | 'light'>(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    useEffect(() => {
        const fragment = document.location.hash;
        if (fragment) {
            document.querySelector(fragment)?.scrollIntoView({behavior: 'smooth'});
        }
    }, []);

    useEffect(() => {
        if (mode === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    }, [mode])

    const me: Me = {
        firstName: 'Ibrahim',
        state: 'Lagos',
        country: 'Nigeria',
        email: 'ibidiagbon@gmail.com',
        phoneNumber: '+234 8081746461',
        github: 'https://github.com/aiKhalil08/',
        linkedin: 'https://www.linkedin.com/in/ibrahim-abdullahi-idiagbon-1a61321b8/',
        twitter: 'https://x.com/aiKhalil08/',
    }

    return (
        <ModeContext.Provider value={mode}>
        <MeContext.Provider value={me}>
            <main className={`${mode === 'dark' ? 'bg-grey-dark-default dark' : 'bg-grey-light-default'}`}>
                <Header toggleMode={() => {setMode(mode === 'dark' ? 'light' : 'dark')}} />
                <Home />
                <About />
                <Skills />
                <Experiences />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
            </main>
        </MeContext.Provider>
        </ModeContext.Provider>
    )
}

export default Main