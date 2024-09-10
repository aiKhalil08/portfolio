import { useContext } from "react";
import { ModeContext } from "../../contexts/modeContext";
import themeToggleIcon from '../../assets/icons/theme-toggle.svg';
import logo from '../../assets/logo.svg';

export function Header({}) {
    const mode = useContext(ModeContext);
    return (
        <header className="bg-grey-light-default/70 backdrop-blur-md px-20 py-4 sticky top-0 z-20">
            <div className="px-8 flex justify-between items-center">
                <a href="#home">
                    <img src={logo} alt="" />
                </a>
                <div className="flex gap-6 items-center">
                    <nav className="flex gap-4">
                        <a href="#about-me" className="text-body-2-all text-grey-light-600">About</a>
                        <a href="#skills" className="text-body-2-all text-grey-light-600">Skills</a>
                        <a href="#experience" className="text-body-2-all text-grey-light-600">Exprience</a>
                        <a href="#projects" className="text-body-2-all text-grey-light-600">Projects</a>
                        <a href="#testimonials" className="text-body-2-all text-grey-light-600">Testimonials</a>
                        <a href="#contact" className="text-body-2-all text-grey-light-600">Contact</a>
                    </nav>
                    <div className="flex gap-4">
                        <button type="button">
                            <img src={themeToggleIcon} alt="" />
                        </button>
                        <a href="/resume/Ibrahim Abdullahi-Idiagbon Full-stack Resume.pdf" download={true} className="px-4 py-[6px] bg-grey-light-900 text-grey-light-50 text-body-2-all rounded-xl">Download CV</a>
                    </div>
                </div>
            </div>
        </header>
    );
}