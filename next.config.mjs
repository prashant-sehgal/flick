/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URI:
      process.env.NEXT_PUBLIC_API_URI ||
      'https://flick-services-aecga7drcfdja0ad.francecentral-01.azurewebsites.net',
    NEXT_PUBLIC_MEDIA_URI:
      process.env.NEXT_PUBLIC_MEDIA_URI ||
      'https://flickmediafiles.blob.core.windows.net/images<blobname>?sp=r&st=2025-04-29T10:20:09Z&se=2125-04-29T18:20:09Z&spr=https&sv=2024-11-04&sr=c&sig=ifgAOghjgjwqABehO%2FbSomrse7twsoowaK0jNqQQ1Xk%3D',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
