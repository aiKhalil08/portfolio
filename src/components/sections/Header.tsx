import { useContext, useEffect, useState } from "react";
import { ModeContext } from "../../contexts/modeContext";
import sunIcon from '../../assets/icons/sun.svg';
import moonIcon from '../../assets/icons/moon.svg';
import { Cancel, Hamburger, Logo } from "../Icons";

export function Header({toggleMode}: {toggleMode: () => void}) {
    const mode = useContext(ModeContext);
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    return (
        <>
            <header className="bg-grey-light-default/70 dark:bg-grey-dark-default/70 shadow-sm shadow-black/5 dark:shadow-white/5 backdrop-blur-md p-4 md:px-8 md:py-4 sticky top-0 z-20">
                <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#home">
                        <Logo mode={mode} />
                    </a>
                    <button type="button" onClick={() => setSidebarExpanded(true)} className="rounded-lg hover:bg-grey-light-100 dark:hover:bg-grey-dark-100 p-[6px] transition-all ease-linear md:hidden">
                        <Hamburger mode={mode} />
                    </button>
                    <div className="hidden md:flex gap-6 items-center">
                        <nav>
                            <ul className="flex gap-4">
                                <li><a href="#about-me" className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">About</a></li>
                                <li><a href="#skills" className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Skills</a></li>
                                {/* <li><a href="#experience" className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Exprience</a></li> */}
                                <li><a href="#projects" className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Projects</a></li>
                                {/* <li><a href="#testimonials" className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Testimonials</a></li> */}
                                <li><a href="#contact" className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Contact</a></li>
                            </ul>
                        </nav>
                        <span className="inline-block self-stretch my-1 w-[2px] bg-grey-light-100 dark:bg-grey-dark-100"></span>
                        <div className="flex gap-4">
                            <button type="button" onClick={toggleMode}>
                                <img src={mode === 'dark' ? sunIcon : moonIcon} alt="" />
                            </button>
                            <a href="/resume/Ibrahim Abdullahi-Idiagbon Full-stack Resume.pdf" download={true} className="hover:bg-grey-dark-200 dark:hover:bg-grey-light-200 transition-all ease-linear px-4 py-[6px] bg-grey-light-900 dark:bg-grey-dark-900 text-grey-light-50 dark:text-grey-dark-50 text-body-2-all text-center whitespace-nowrap rounded-xl">Download CV</a>
                        </div>
                    </div>
                </div>
            </header>
            {
                sidebarExpanded &&
                <Sidebar close={() => setSidebarExpanded(false)} toggleMode={toggleMode} />
            }
        </>
    );
}

function Sidebar({close, toggleMode}: {close: () => void, toggleMode: () => void}) {
    const mode = useContext(ModeContext);
    const [animation, setAnimation] = useState('');
    const fragment = document.location.hash;

    useEffect(() => {
        setAnimation('slide-in');
    }, []);

    function handleClose() {
        setAnimation('slide-out');
        setTimeout(close, 250)
    }

    return (
        <div className="fixed top-0 left-0 h-full w-full z-30 bg-white/30 backdrop-blur-sm">
            <div className={`${animation} absolute top-0 -right-full h-full w-80 bg-grey-light-default dark:bg-grey-dark-default z-40`}>
                <header className="p-4 border-b border-b-grey-light-100 dark:border-b-grey-dark-100 md:px-28 md:py-4 sticky top-0 z-20 flex justify-between items-center ">
                    <a href="#home">
                        <Logo mode={mode} />
                    </a>
                    <button type="button" onClick={handleClose} className="rounded-lg hover:bg-grey-light-100 dark:hover:bg-grey-dark-100 p-[6px] transition-all ease-linear md:hidden">
                        <Cancel mode={mode} />
                    </button>
                </header>
                <nav>
                    <ul className="p-4 flex flex-col gap-4 border-b">
                        <li><a href="#about-me" onClick={handleClose} className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">About</a></li>
                        <li><a href="#skills" onClick={handleClose} className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Skills</a></li>
                        {/* <li><a href="#experience" onClick={handleClose} className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Exprience</a></li> */}
                        <li><a href="#projects" onClick={handleClose} className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Projects</a></li>
                        {/* <li><a href="#testimonials" onClick={handleClose} className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Testimonials</a></li> */}
                        <li><a href="#contact" onClick={handleClose} className="text-body-2-all font-medium text-grey-light-600 dark:text-grey-dark-600 hover:text-grey-light-800 dark:hover:text-grey-dark-800">Contact</a></li>
                    </ul>
                </nav>
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex justify-between">
                        <span className="text-body-2-all text-grey-light-600 dark:text-grey-dark-600">Switch Theme</span>
                        <button type="button" onClick={toggleMode}>
                            <img src={mode === 'dark' ? sunIcon : moonIcon} alt="" />
                        </button>
                    </div>
                    <a href="/resume/Ibrahim Abdullahi-Idiagbon Full-stack Resume.pdf" download={true} className="hover:bg-grey-dark-200 dark:hover:bg-grey-light-200 transition-all ease-linear px-4 py-[6px] bg-grey-light-900 dark:bg-grey-dark-900 text-grey-light-50 dark:text-grey-dark-50 text-body-2-all rounded-xl whitespace-nowrap text-center">Download CV</a>
                </div>
            </div>
        </div>
    );
}