module.exports = {
    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                darkGray: '#23272A',
                midGray: '#2C2F33',
                gray: '#99AAB5',
                silver: '#F6F6F6',
            },
        },
        container: {
            center: true,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
