/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
      webpack(config) {
        config.module.rules.push({
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: { cleanupIds: false, removeViewBox: false },
                  },
                },
              ],
            },
            titleProp: true,
          },
          test: /\.svg$/,
        })
        return config
      },
};

export default nextConfig;
