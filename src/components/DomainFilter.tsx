import { useContext } from 'react';
import { Domain } from '../types';
import { ModeContext } from '../contexts/modeContext';

type DomainFilterProps = {
    activeDomain: Domain | 'all';
    onDomainChange: (domain: Domain | 'all') => void;
};

const tabs: { key: Domain | 'all'; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
];

export function DomainFilter({ activeDomain, onDomainChange }: DomainFilterProps) {
    const mode = useContext(ModeContext);

    return (
        <div className="flex gap-2 flex-wrap justify-center">
            {tabs.map(tab => {
                const isActive = tab.key === activeDomain;
                return (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => onDomainChange(tab.key)}
                        className={`px-4 py-[6px] rounded-xl text-body-3-all font-medium transition-all ease-linear border-b-2 ${
                            isActive
                                ? 'bg-grey-light-900 dark:bg-grey-dark-900 text-grey-light-50 dark:text-grey-dark-50 border-emerald-500'
                                : 'bg-grey-light-200 dark:bg-grey-dark-200 text-grey-light-600 dark:text-grey-dark-600 border-transparent hover:bg-grey-light-300 dark:hover:bg-grey-dark-300'
                        }`}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}
