import { useContext, useEffect, useRef, useState } from 'react';
import { ModeContext } from '../contexts/modeContext';
import { ChevronDown } from './Icons';
import { resumes } from '../data/resumes';

export function ResumeDropdown() {
    const mode = useContext(ModeContext);
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [open]);

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1.5 hover:bg-grey-dark-200 dark:hover:bg-grey-light-200 transition-all ease-linear px-4 py-[6px] bg-grey-light-900 dark:bg-grey-dark-900 text-grey-light-50 dark:text-grey-dark-50 text-body-2-all text-center whitespace-nowrap rounded-xl"
            >
                Download CV
                <ChevronDown mode={mode === 'dark' ? 'light' : 'dark'} size="14" />
            </button>
            {open && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl shadow-lg border border-grey-light-100 dark:border-grey-dark-100 bg-grey-light-default dark:bg-grey-dark-default overflow-hidden z-30">
                    {resumes.map(r => (
                        <a
                            key={r.variant}
                            href={`/resume/${r.filename}`}
                            download
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2.5 text-body-3-all text-grey-light-600 dark:text-grey-dark-600 hover:bg-grey-light-100 dark:hover:bg-grey-dark-100 transition-colors"
                        >
                            {r.label} Resume
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
