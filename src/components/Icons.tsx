import { useState } from "react";

type IconProps = {
    mode: 'dark' | 'light';
    size?: string;
}

enum Colors {
    dark = '#D1D5DB',
    light = '#4B5563',
}

export function Logo({mode}: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: "'Courier New', monospace", fontWeight: 'bold', }} viewBox="0 0 200 100" width="100" height="50">
            <text x="10" y="70" fontSize="60" fill={mode === 'light' ? "#111827" : 'white'} className="logo-text">&lt;/K&gt;</text>
        </svg>
    )
}

export function Pin({mode, size}: IconProps) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function Twitter({mode, size}: IconProps) {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 10C28 10 27.3 12.1 26 13.4C27.6 23.4 16.6 30.7 8 25C10.2 25.1 12.4 24.4 14 23C9 21.5 6.5 15.6 9 11C11.2 13.6 14.6 15.1 18 15C17.1 10.8 22 8.4 25 11.2C26.1 11.2 28 10 28 10Z" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function Github({mode, size}: IconProps) {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 28V24C21.1392 22.7473 20.78 21.4901 20 20.5C23 20.5 26 18.5 26 15C26.08 13.75 25.73 12.52 25 11.5C25.28 10.35 25.28 9.15 25 8C25 8 24 8 22 9.5C19.36 9 16.64 9 14 9.5C12 8 11 8 11 8C10.7 9.15 10.7 10.35 11 11.5C10.2719 12.5159 9.91851 13.7528 10 15C10 18.5 13 20.5 16 20.5C15.61 20.99 15.32 21.55 15.15 22.15C14.98 22.75 14.93 23.38 15 24V28" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 24C10.49 26 10 22 8 22" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function LivePreview({mode, size}: IconProps) {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 19V25C24 25.5304 23.7893 26.0391 23.4142 26.4142C23.0391 26.7893 22.5304 27 22 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V14C9 13.4696 9.21071 12.9609 9.58579 12.5858C9.96086 12.2107 10.4696 12 11 12H17" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 9H27V15" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 20L27 9" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function LinkedIn({mode, size}: IconProps) {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.60938 14V26.5H12.8844V14H8.60938ZM10.7469 12.3313C9.57532 12.3313 8.60938 11.3393 8.60938 10.1656C8.60938 8.99194 9.57532 8 10.7469 8C11.9185 8 12.8844 8.99194 12.8844 10.1656C12.8844 11.3393 11.9185 12.3313 10.7469 12.3313Z" stroke={Colors[mode]} strokeWidth="2"/>
            <path d="M15.2656 14H19.3613V16.4906H19.4188C19.9454 15.4825 21.2486 14.3875 23.2969 14.3875C27.1834 14.3875 28.4 16.8925 28.4 20.7906V26.5H24.1156V21.1556C24.1156 19.5013 24.0745 17.5969 21.6388 17.5969C19.1694 17.5969 18.7906 19.4444 18.7906 21.0388V26.5H15.2656V14Z" stroke={Colors[mode]} strokeWidth="2"/>
        </svg>
    );
}

export function Email({mode, size = '32'}: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6667 5.3335H5.33341C3.86066 5.3335 2.66675 6.5274 2.66675 8.00016V24.0002C2.66675 25.4729 3.86066 26.6668 5.33341 26.6668H26.6667C28.1395 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1395 5.3335 26.6667 5.3335Z" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.3334 9.3335L17.3734 16.9335C16.9618 17.1914 16.4858 17.3282 16.0001 17.3282C15.5143 17.3282 15.0384 17.1914 14.6267 16.9335L2.66675 9.3335" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function Telephone({mode, size = '32'}: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3334 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2266C22.3239 28.7808 18.3827 27.3788 14.9201 25.1333C11.6985 23.0862 8.96719 20.3549 6.92007 17.1333C4.66671 13.6549 3.2644 9.69463 2.82674 5.5733C2.79342 5.20459 2.83724 4.83298 2.95541 4.48213C3.07357 4.13128 3.2635 3.80889 3.51309 3.53546C3.76269 3.26204 4.06648 3.04358 4.40513 2.894C4.74378 2.74441 5.10986 2.66698 5.48007 2.66663H9.48007C10.1271 2.66026 10.7545 2.8894 11.2451 3.31134C11.7357 3.73328 12.0562 4.31923 12.1467 4.95997C12.3156 6.24006 12.6287 7.49694 13.0801 8.70663C13.2595 9.18387 13.2983 9.70252 13.1919 10.2011C13.0856 10.6998 12.8386 11.1574 12.4801 11.52L10.7867 13.2133C12.6848 16.5514 15.4487 19.3152 18.7867 21.2133L20.4801 19.52C20.8426 19.1615 21.3003 18.9144 21.7989 18.8081C22.2975 18.7018 22.8162 18.7406 23.2934 18.92C24.5031 19.3714 25.76 19.6845 27.0401 19.8533C27.6878 19.9447 28.2793 20.2709 28.7021 20.77C29.125 21.269 29.3496 21.9061 29.3334 22.56Z" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function Copy({mode, size = '44'}: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.6667 16.6665H19.3334C17.8607 16.6665 16.6667 17.8604 16.6667 19.3332V32.6665C16.6667 34.1393 17.8607 35.3332 19.3334 35.3332H32.6667C34.1395 35.3332 35.3334 34.1393 35.3334 32.6665V19.3332C35.3334 17.8604 34.1395 16.6665 32.6667 16.6665Z" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.3334 27.3332C9.86675 27.3332 8.66675 26.1332 8.66675 24.6665V11.3332C8.66675 9.8665 9.86675 8.6665 11.3334 8.6665H24.6667C26.1334 8.6665 27.3334 9.8665 27.3334 11.3332" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function Copied({mode, size = '44'}: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.6667 16.6665H19.3334C17.8607 16.6665 16.6667 17.8604 16.6667 19.3332V32.6665C16.6667 34.1393 17.8607 35.3332 19.3334 35.3332H32.6667C34.1395 35.3332 35.3334 34.1393 35.3334 32.6665V19.3332C35.3334 17.8604 34.1395 16.6665 32.6667 16.6665Z" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.3334 27.3332C9.86675 27.3332 8.66675 26.1332 8.66675 24.6665V11.3332C8.66675 9.8665 9.86675 8.6665 11.3334 8.6665H24.6667C26.1334 8.6665 27.3334 9.8665 27.3334 11.3332" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 26L25 29L31 23" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function Hamburger({mode, size}: IconProps) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 6H20" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 18H20" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
    );
}

export function Cancel({mode, size}: IconProps) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke={Colors[mode]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}