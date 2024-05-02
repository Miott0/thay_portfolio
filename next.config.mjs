import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: 'github.com'},
            {hostname:'raw.githubusercontent.com'},
            {hostname: "utfs.io"},

        ],

        formats: ['image/webp','image/avif'],
    },
};




export default nextConfig;
