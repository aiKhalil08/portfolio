import { Domain } from '../types';

export function filterByDomain<T extends { domains: Domain[] }>(
    items: T[],
    activeDomain: Domain | 'all'
): T[] {
    if (activeDomain === 'all') return items;
    return items.filter(item => item.domains.includes(activeDomain));
}
