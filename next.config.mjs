/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    experimental: {
        serverActions: true,
    },
    async redirects() {
        return [
            {
                source: '/(figma|plugin|f)',
                destination: 'https://www.figma.com/community/plugin/1120667703468196103/uilogos',
                permanent: true,
            },
            {
                source: '/sketch',
                destination: 'https://github.com/realvjy/uiLogos-sketch-plugin',
                permanent: true,
            },
            {
                source: '/xd',
                destination: 'https://github.com/realvjy/uilogos-XD',
                permanent: true,
            },
            {
                source: '/(author|realvjy|v)',
                destination: 'https://vjy.me',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/uilogos/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "https://figma.com",
                    },
                ],
            },
        ];
    }
};

export default nextConfig;
