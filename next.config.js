/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    exportPathMap: () => {
        return {
            "/games/[alias]": { page: "/games" }
        }
    }
}

module.exports = nextConfig
