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
                source: "/uilogos",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "false" },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date",
                    },
                ],
            },
        ];
    }
};

export default nextConfig;
