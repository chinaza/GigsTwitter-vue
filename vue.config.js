module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://twgigs.com'
      }
    }
  }
};
