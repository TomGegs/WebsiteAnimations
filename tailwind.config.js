/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './pages/**/*.{ts,tsx}',
        './index.html',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        
        extend: {
            colors: {
                //    Main Colours
                primary: '#04143C',
                darkPrimary: '#031030',
                lightPrimary: '#1F408E',
                secondary: '#f8842c',
                darkSecondary: '#DA7A30',
                lightSecondary: '#F4934A',

                //   Text Colours
                white: '#FFFFFF',
                textBlack: '#313131',

                //    Background Colours

                // --e-global-color-5eb2d73: #FBB73D;
                // --e-global-color-8912f5c: #89D4E2;
                // --e-global-color-f473384: #0AB5AF;
                // --e-global-color-a734d7b: #006994;
                // --e-global-color-764183d: #161616;
                // --e-global-color-14ef391: #1D1D1D;
                // --e-global-color-dd11726: #757575;
                // --e-global-color-c696dce: #ECECEC;
                // --e-global-color-d6cea4e: #FFFFFF;
                // --e-global-color-86b4fcd: #02010100;
                // --e-global-color-57c8da2: #000000CC;
                // --e-global-color-567805b: #F3F4F6;
                // --e-global-color-8646797: #006994;
                // --e-global-color-245a9ea: #DA7A30;
                // --e-global-color-ea9408d: #F8842C;
                // --e-global-color-2dc52dc: #FFFFFF00;
                // --e-global-color-2ae907d: #FDE2CD;
                // --e-global-color-b45188a: #95B3D5;
                // --e-global-color-c74d642: #176D9C;
                // --e-global-color-204574a: #33396B
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },

    plugins: ['prettier-plugin-tailwindcss'],
};
