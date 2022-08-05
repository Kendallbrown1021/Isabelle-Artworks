module.exports = {
  env: {
    SPACE_ID: "r874ru59pzq9",
    ACCESS_TOKEN: "tLYuXaS8282ZMOCKZ5R2HKN9HuaDGKF4dKPcH4K-yqo",
  },
  images: {
    domains: ["images.ctfassets.net", "downloads.ctfassets.net"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
