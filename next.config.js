const debug = process.env.NODE_ENV !== "production";

module.exports = {
    basePath: '/reacttesttask',
    assetPrefix: !debug ? '/reacttesttask/' : '',
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          };
        }

        return config;
      }
};