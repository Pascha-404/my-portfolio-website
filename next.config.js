/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: '/patrick',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/drpmdiapv/image/upload/**',
			},
		],
	},
};

module.exports = nextConfig;
