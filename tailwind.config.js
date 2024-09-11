/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: ["./src/**/*.{html,js,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                grey: {
                    light: {
                        default: '#fff',
                        50: '#f9fafb',
                        100: '#f3f4f6',
                        200: '#e5e7eb',
                        300: '#d1d5db',
                        400: '#9ca3af',
                        500: '#6b7280',
                        600: '#4b5563',
                        700: '#374151',
                        800: '#1f2937',
                        900: '#111827',
                        950: '#030712',
                    },
                    dark: {
                        950: '#fff',
                        900: '#f9fafb',
                        800: '#f3f4f6',
                        700: '#e5e7eb',
                        600: '#d1d5db',
                        500: '#9ca3af',
                        400: '#6b7280',
                        300: '#4b5563',
                        200: '#374151',
                        100: '#1f2937',
                        50: '#111827',
                        default: '#030712',
                    }
                },
                emerald: {500: '#10b981'}
            }, fontSize: {
                'heading-1-desktop': ['60px', {
                    lineHeight: '72px',
                    letterSpacing: '-2%',
                }],
                'heading-1-tablet': ['48px', {
                    lineHeight: '48px',
                    letterSpacing: '-2%',
                }],
                'heading-1-mobile': ['36px', {
                    lineHeight: '40px',
                }],
                'heading-2-desktop': ['36px', {
                    lineHeight: '40px',
                    letterSpacing: '-2%',
                }],
                'heading-2-tm': ['18px', {
                    lineHeight: '28px',
                    letterSpacing: '-2%',
                }],
                'heading-3-desktop': ['30px', {
                    lineHeight: '36px',
                    letterSpacing: '-2%',
                }],
                'heading-3-tm': ['24px', {
                    lineHeight: '32px',
                    letterSpacing: '-2%',
                }],
                'subtitle-all': ['20px', {
                    lineHeight: '28px',
                }],
                'subtitle-tm': ['18px', {
                    lineHeight: '28px',
                }],
                'body-1-all': ['18px', {
                    lineHeight: '28px',
                }],
                'body-1-tm': ['16px', {
                    lineHeight: '24px',
                }],
                'body-2-all': ['16px', {
                    lineHeight: '24px',
                }],
                'body-3-all': ['14px', {
                    lineHeight: '20px',
                }],
            }
        },
    },
    plugins: [],
}

