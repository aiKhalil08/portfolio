import { useContext } from "react";
import { ModeContext } from "../../contexts/modeContext";

export function Footer() {
    const mode = useContext(ModeContext);

    const year = new Date().getFullYear();
    return (
        <footer className="bg-grey-light-50 py-6 flex justify-center">
            <div className="flex gap-2 items-center text-body-3-all text-grey-light-600">
                <span>&copy;</span>
                <div className="flex gap-2">
                    <span>{year}</span>
                    <span>&#124;</span>
                    <a className="underline">Coded by Ibrahim</a>
                    <span>&#124;</span>
                    <a className="underline">Design by Sagar Shah</a>
                </div>
            </div>
        </footer>
    );
}