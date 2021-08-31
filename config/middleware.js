module.exports = {
  settings: {
    gzip: {
      enabled: true
    },
    public: {
      maxAge: 86400000
    }
    // "upload-plugin-cache": {
    //   enabled: true,
    //   maxAge: 86400000,
    //   dynamic: true,
    //   lruCache: {
    //     max: 1000
    //   }
    // }
  }
};
