const withImages = require('next-images');

module.exports = withImages({
  webpack(config) {
    return config;
  },
});

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};
