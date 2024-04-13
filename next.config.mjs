import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            hostname: 'github.com'
        },
        {hostname:'raw.githubusercontent.com'},
        {hostname: "utfs.io"}
    ],
    },
};




export default nextConfig;
