import localFont from 'next/font/local'
export const interDisplay = localFont({
    variable: '--font-interDisplay',
    src: [
        {
            path: '../styles/fonts/InterDisplay-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../styles/fonts/InterDisplay-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../styles/fonts/InterDisplay-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../styles/fonts/InterDisplay-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../styles/fonts/InterDisplay-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
})