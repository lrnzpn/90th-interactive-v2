module.exports = {
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 8000 }));
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
      },
    }
  },
  devServer: {
    disableHostCheck: true,
    port: 9999,
    public: "0.0.0.0:9999"
  },
  publicPath: "./"
};
