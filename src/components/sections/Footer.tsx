import { useContext } from "react";
import { ModeContext } from "../../contexts/modeContext";

export function Footer() {
    const mode = useContext(ModeContext);

    const year = new Date().getFullYear();
    return (
        <footer className="bg-grey-light-50 dark:bg-grey-dark-50 py-6 flex justify-center">
            <div className="flex justify-center flex-wrap gap-1 items-center text-body-3-all text-grey-light-600 dark:text-grey-dark-600">
                <div className="flex gap-1">
                    <span>&copy;</span>
                    <span className="">{year}</span>
                    <span className="">&#124;</span>
                </div>
                <div className="flex gap-1 ">
                    <a href="https://github.com/aiKhalil08/portfolio" target="_blank" className="underline">Coded by Ibrahim</a>
                    <span>&#124;</span>
                    <a href="https://www.figma.com/design/iyn7FntqG1OlBGppZN3FpE/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?m=auto&t=uSoNRR0fDlSNrKXk-6" target="_blank" className="underline">Design by Sagar Shah</a>
                </div>
            </div>
        </footer>
    );
}