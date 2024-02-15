export const dynamic = 'force-dynamic' // defaults to auto

export default function handler(req, res) {
    return new Response('Hello, Next.js!',
        {
            status: 200,
            source: "/uilogos/:path*",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        })
}